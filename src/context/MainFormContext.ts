import { createContext } from "react"
import { CurrentStep, CurrentStepAction } from "../reducers/currentStep"
import { FormsDataAction } from "../reducers/formsData"

const MainFormContext = createContext<{
  currentStep: CurrentStep
  dispatchCurrentStep: React.Dispatch<CurrentStepAction>
  dispatchFormsData: React.Dispatch<FormsDataAction>
}>({
  dispatchCurrentStep: () => {},
  dispatchFormsData: () => {},
  currentStep: {
    stepIndex: 0,
    stepPhase: "FIRST",
  },
})

export { MainFormContext }
