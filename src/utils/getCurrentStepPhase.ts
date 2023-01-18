import { stepsCount } from "./../App"
import { StepPhase } from "./../components/StepForm/StepForm"
import { CurrentStep, CurrentStepAction } from "./../reducers/currentStep"

function getCurrentStepPhase(
  stepIndex: CurrentStep["stepIndex"],
  { type, payload: stepTo }: CurrentStepAction
): StepPhase {
  let newStepPhase: StepPhase

  switch (type) {
    case "NEXT": {
      switch (stepIndex) {
        case stepsCount - 3: {
          newStepPhase = "LAST"
          break
        }
        case stepsCount - 2: {
          newStepPhase = "FINAL"
          break
        }
        default: {
          newStepPhase = "IN_BETWEEN"
          break
        }
      }
      break
    }
    case "PREV": {
      switch (stepIndex) {
        case 1: {
          newStepPhase = "FIRST"
          break
        }
        case stepsCount - 1: {
          newStepPhase = "LAST"
          break
        }
        default: {
          newStepPhase = "IN_BETWEEN"
          break
        }
      }
      break
    }
    case "MOVE_TO": {
      switch (stepTo) {
        case 0: {
          newStepPhase = "FIRST"
          break
        }
        case stepsCount - 2: {
          newStepPhase = "LAST"
          break
        }
        case stepsCount - 1: {
          newStepPhase = "FINAL"
          break
        }
        default: {
          newStepPhase = "IN_BETWEEN"
          break
        }
      }
      break
    }
  }

  return newStepPhase
}

export { getCurrentStepPhase }
