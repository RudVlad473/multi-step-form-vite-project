import { FC, useContext } from "react"
import AddonsList from "../../components/ui/AddonsList/AddonsList"
import { MainFormContext } from "../../context/MainFormContext"
import { IAddon } from "../../schemas/stepThreeFormSchema"


export const addons: IAddon[] = [
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
]

const StepThreeForm: FC = () => {
  const {
    formsData: { selectedAddons },
  } = useContext(MainFormContext)

  return (
    <form>
      <AddonsList {...{ selectedAddons, addons }} />
    </form>
  )
}

export default StepThreeForm
