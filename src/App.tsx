import React from "react"
import { useReducer } from "react"
import styles from "./App.module.scss"
import StepOneForm from "./components/forms/StepOneForm/StepOneForm"
import { StepForm } from "./components/StepForm/StepForm"
import Stepper from "./components/Stepper/Stepper"
import { MainFormContext } from "./context/MainFormContext"
import { currentStepReducer, StepDescription } from "./reducers/currentStep"
import { formsDataReducer } from "./reducers/formsData"
import {
  IStepOneForm,
  stepOneFormInitialState,
} from "./schemas/stepOneFormSchema"
import {
  IStepThreeForm,
  stepThreeFormInitialState,
} from "./schemas/stepThreeFormSchema"
import {
  IStepTwoForm,
  stepTwoFormInitialState,
} from "./schemas/stepTwoFormSchema"
const StepThreeForm = React.lazy(
  () => import("./components/forms/StepThreeForm/StepThreeForm")
)
const StepTwoForm = React.lazy(
  () => import("./components/forms/StepTwoForm/StepTwoForm")
)

export type StepsTypes = IStepOneForm | IStepTwoForm | IStepThreeForm

export type FormsData = [
  { step1: IStepOneForm; stepDescr: StepDescription },
  { step2: IStepTwoForm; stepDescr: StepDescription },
  { step3: IStepThreeForm; stepDescr: StepDescription }
]

const steps: FormsData = [
  {
    stepDescr: {
      header: "Personal info",
      descr: "Please provide your name, email address, and phone number.",
    },
    step1: stepOneFormInitialState,
  },
  {
    stepDescr: {
      header: "Select your plan",
      descr: "You have the option of monthly or yearly billing.",
    },
    step2: stepTwoFormInitialState,
  },
  {
    stepDescr: {
      header: "Pick add-ons",
      descr: "Add-ons help enhance your gaming experience.",
    },
    step3: stepThreeFormInitialState,
  },
]

const stepForms = [
  <StepOneForm {...steps[0].step1} />,
  <React.Suspense>
    <StepTwoForm {...steps[1].step2} />
  </React.Suspense>,
  <React.Suspense>
    <StepThreeForm {...steps[2].step3} />
  </React.Suspense>,
]

export const stepsCount = steps.length

const App = () => {
  const [formsData, dispatchFormsData] = useReducer(formsDataReducer, steps)

  const [currentStep, dispatchCurrentStep] = useReducer(currentStepReducer, {
    stepIndex: 0,
    stepPhase: "FIRST",
  })

  const { stepDescr } = steps[currentStep.stepIndex]

  return (
    <MainFormContext.Provider
      value={{ currentStep, dispatchCurrentStep, dispatchFormsData }}>
      <main className={styles["main-form"]}>
        <Stepper stepsDescrs={steps.map((step) => step.stepDescr)} />
        <StepForm header={stepDescr.header} descr={stepDescr.descr}>
          {stepForms[currentStep.stepIndex]}
        </StepForm>
      </main>
    </MainFormContext.Provider>
  )
}

export default App
