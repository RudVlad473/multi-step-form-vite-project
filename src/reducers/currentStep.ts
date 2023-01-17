import { StepPhase } from "../components/StepForm/StepForm"
import { getCurrentStepPhase } from "../utils/getCurrentStepPhase"
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
  { stepIndex }: CurrentStep,
  { type, payload: stepTo }: CurrentStepAction
): CurrentStep {
  const stepPhase = getCurrentStepPhase( {stepIndex},
     {type, payload} )

  switch (type) {
    case "NEXT": {
      // if (stepIndex === stepsCount - 1) {
      //   throw new Error("You can go no further")
      // }
      return {
        stepIndex: stepIndex + 1,
        stepPhase,
      }
    }
    case "PREV": {
      return {
        stepIndex: stepIndex - 1,
        stepPhase,
      }
    }
    case "MOVE_TO": {
      return { stepIndex: stepTo as number, stepPhase }
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
