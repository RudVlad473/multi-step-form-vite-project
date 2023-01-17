import React, { useReducer, useState } from "react"
import styles from "./App.module.scss"
import { StepForm } from "./components/StepForm/StepForm"
import Stepper from "./components/Stepper/Stepper"
import { MainFormContext } from "./context/MainFormContext"
import Final from "./pages/Final/Final"
import StepOneForm from "./pages/StepOneForm/StepOneForm"
import {
  CurrentStep,
  currentStepReducer,
  StepDescription,
} from "./reducers/currentStep"
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
  () => import("./pages/StepThreeForm/StepThreeForm")
)
const StepTwoForm = React.lazy(() => import("./pages/StepTwoForm/StepTwoForm"))
const StepFourForm = React.lazy(
  () => import("./pages/StepFourForm/StepFourForm")
)

export type StepsTypes = IStepOneForm & IStepTwoForm & IStepThreeForm

export type FormsData = StepsTypes & {
  isYearly: boolean
}

const initialSteps: StepsTypes = {
  ...stepOneFormInitialState,
  ...stepTwoFormInitialState,
  ...stepThreeFormInitialState,
}

const stepsDescrs: StepDescription[] = [
  {
    header: "Personal info",
    descr: "Please provide your name, email address, and phone number.",
  },
  {
    header: "Select your plan",
    descr: "You have the option of monthly or yearly billing.",
  },
  {
    header: "Pick add-ons",
    descr: "Add-ons help enhance your gaming experience.",
  },
  {
    header: "Finishing up",
    descr: "Double-check everything looks OK before confirming.",
  },
]

const initialState = {
  ...initialSteps,
  isYearly: false,
}

export const stepsCount = stepsDescrs.length

const stepForms = [
  <StepOneForm />,
  <React.Suspense>
    <StepTwoForm />
  </React.Suspense>,
  <React.Suspense>
    <StepThreeForm />
  </React.Suspense>,
  <React.Suspense>
    <StepFourForm />
  </React.Suspense>,
  <Final />,
]

export interface FormError {
  step: CurrentStep
  message?: string
}

const App = () => {
  const [formsData, dispatchFormsData] = useReducer(
    formsDataReducer,
    initialState
  )

  const [currentStep, dispatchCurrentStep] = useReducer(currentStepReducer, {
    stepIndex: 0,
    stepPhase: "FIRST",
  })

  const [error, setError] = useState<FormError | undefined>(undefined)

  return (
    <MainFormContext.Provider
      value={{
        formsData,
        dispatchFormsData,

        currentStep,
        dispatchCurrentStep,

        error,
        setError,
      }}>
      <main className={styles["main-form"]}>
        <Stepper stepsDescrs={stepsDescrs} />
        { <StepForm {...stepsDescrs[currentStep.stepIndex]}>
          {stepForms[currentStep.stepIndex]}
        </StepForm>}
      </main>
    </MainFormContext.Provider>
  )
}

export default App
