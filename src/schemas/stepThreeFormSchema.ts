import { addons } from "../pages/StepThreeForm/StepThreeForm"

export interface IAddon {
  name: string
  descr: string
  monthlyFee: number
}

export interface IStepThreeForm {
  selectedAddons: IAddon["name"][]
}

export const stepThreeFormInitialState: IStepThreeForm = {
  selectedAddons: addons.slice(0, 2).map((addon) => addon.name),
}
