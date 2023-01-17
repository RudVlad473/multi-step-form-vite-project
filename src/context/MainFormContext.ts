import { FormError, FormsData } from "./../App"
import { createContext } from "react"
import { CurrentStep, CurrentStepAction } from "../reducers/currentStep"
import { FormsDataAction } from "../reducers/formsData"

const MainFormContext = createContext<{
  formsData: FormsData
  currentStep: CurrentStep
  dispatchCurrentStep: React.Dispatch<CurrentStepAction>
  dispatchFormsData: React.Dispatch<FormsDataAction>

  error?: FormError
  setError: React.Dispatch<React.SetStateAction<FormError | undefined>>
}>({
  dispatchCurrentStep: () => {},
  dispatchFormsData: () => {},
  currentStep: {
    stepIndex: 0,
    stepPhase: "FIRST",
  },
  formsData: {} as FormsData,
  setError: () => {},
})

export { MainFormContext }
