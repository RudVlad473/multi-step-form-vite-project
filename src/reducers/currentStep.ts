import { StepPhase } from "../components/StepForm/StepForm"
import { stepsCount } from "./../App"

export type CurrentStep = {
  stepIndex: number
  stepPhase: StepPhase
}

type CurrentStepTypes = "NEXT" | "PREV" | "MOVE_TO"

export interface CurrentStepAction {
  type: CurrentStepTypes
  payload: number | undefined
}

export interface StepDescription {
  header: string
  descr: string
}

function currentStepReducer(
  { stepIndex, stepPhase }: CurrentStep,
  { type, payload: stepTo }: CurrentStepAction
): CurrentStep {
  switch (type) {
    case "NEXT": {
      if (stepIndex === stepsCount - 1) {
        throw new Error("You can go no further")
      }

      const newStepPhase: StepPhase =
        stepIndex === stepsCount - 2 ? "LAST" : "IN_BETWEEN"
      return { stepIndex: stepIndex + 1, stepPhase: newStepPhase }
    }
    case "PREV": {
      const newStepPhase: StepPhase = stepIndex === 1 ? "FIRST" : "IN_BETWEEN"
      return { stepIndex: stepIndex - 1, stepPhase: newStepPhase }
    }
    case "MOVE_TO": {
      const newStepPhase: StepPhase =
      stepTo === 0
          ? "FIRST"
          : stepTo === stepsCount - 1
          ? "LAST"
          : "IN_BETWEEN"
      return { stepIndex: stepTo as number, stepPhase: newStepPhase }
    }
  }
}

export const nextStep = (): CurrentStepAction => ({
  type: "NEXT",
  payload: undefined,
})
export const prevStep = (): CurrentStepAction => ({
  type: "PREV",
  payload: undefined,
})
export const moveTo = (stepIndex: number): CurrentStepAction => ({
  type: "MOVE_TO",
  payload: stepIndex,
})

export { currentStepReducer }
