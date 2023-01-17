import { plans } from "../pages/StepTwoForm/StepTwoForm"

export interface IPlan {
  name: string
  monthlyFee: number
  imgSrc: string
}

export interface IStepTwoForm {
  selectedPlan: IPlan["name"]
}

export const stepTwoFormInitialState: IStepTwoForm = {
  selectedPlan: plans[0].name,
}
