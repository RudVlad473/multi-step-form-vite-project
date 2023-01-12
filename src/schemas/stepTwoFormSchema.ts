export interface IPlan {
  name: string
  monthlyFee: number
}

export interface IStepTwoForm {
  selectedPlan: IPlan
}

export const stepTwoFormInitialState: IStepTwoForm = {
  selectedPlan: {
    name: "",
    monthlyFee: 0,
  },
}

//export { stepTwoFormSchema }
