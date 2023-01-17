import { StepPhase } from "./../components/StepForm/StepForm"
import { stepsCount } from "./../App"
import { CurrentStep, CurrentStepAction, currentStepReducer } from "./../reducers/currentStep"


function getCurrentStepPhase(
  { stepIndex }: CurrentStep,
  { type, payload: stepTo }: CurrentStepAction
): StepPhase {
  switch (type) {
    case "NEXT": {
      const newStepPhase: StepPhase =
        stepIndex === stepsCount - 2 ? "LAST" : "IN_BETWEEN"
      return newStepPhase
    }
    case "PREV": {
      const newStepPhase: StepPhase = stepIndex === 1 ? "FIRST" : "IN_BETWEEN"
      return newStepPhase
    }
    case "MOVE_TO": {
      const newStepPhase: StepPhase =
        stepTo === 0
          ? "FIRST"
          : stepTo === stepsCount - 1
          ? "LAST"
          : "IN_BETWEEN"
      return newStepPhase
    }
  }
}

export { getCurrentStepPhase }
