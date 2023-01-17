import { FC, useContext } from "react"
import advancedImg from "../../assets/icon-advanced.svg"
import arcadeImg from "../../assets/icon-arcade.svg"
import proImg from "../../assets/icon-pro.svg"
import PlatesList from "../../components/ui/PlatesList/PlatesList"
import YearlyToggle from "../../components/ui/Toggle/YearlyToggle"
import { MainFormContext } from "../../context/MainFormContext"
import { IPlan } from "../../schemas/stepTwoFormSchema"
import styles from "./StepTwoForm.module.scss"

export const plans: IPlan[] = [
  { name: "Arcade", monthlyFee: 9, imgSrc: arcadeImg },
  { name: "Advanced", monthlyFee: 12, imgSrc: advancedImg },
  { name: "Pro", monthlyFee: 15, imgSrc: proImg },
]

const StepTwoForm: FC = () => {
  const { formsData } = useContext(MainFormContext)

  // const newPlans: IPlan[] = useMemo(() => {
  //   return plans.map((plan, index) => ({
  //     ...plan,
  //     monthlyFee: getFee(plan.monthlyFee),
  //   }))
  // }, [formsData.isYearly])

  return (
    <form className={styles["form"]}>
      <PlatesList plates={plans} {...formsData} />
      <YearlyToggle isInitiallyChecked={formsData.isYearly} />
    </form>
  )
}

export default StepTwoForm
