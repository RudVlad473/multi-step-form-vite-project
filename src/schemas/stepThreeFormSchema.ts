//import { object, SchemaOf, string } from "yup"

export interface IAddon {
  name: string
  descr: string
  monthlyFee: number
}

export interface IStepThreeForm {
  addons: [IAddon, IAddon, IAddon]
}

export const stepThreeFormInitialState: IStepThreeForm = {
  addons: [
    {
      name: "Online service",
      descr: "Access to multiplayer games",
      monthlyFee: 1,
    },
    {
      name: "Larger storage",
      descr: "Extra 1TB of cloud save",
      monthlyFee: 2,
    },
    {
      name: "Customizable Profile",
      descr: "Custom theme on your profile",
      monthlyFee: 2,
    },
  ],
}

//export { stepTwoFormSchema }
