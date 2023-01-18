import classNames from "classnames"
import { FC, useContext } from "react"
import { MainFormContext } from "../../context/MainFormContext"
import { moveTo } from "../../reducers/currentStep"
import { IPlan } from "../../schemas/stepTwoFormSchema"
import { getFee } from "../../utils/getFee"
import { addons } from "../StepThreeForm/StepThreeForm"
import { plans } from "../StepTwoForm/StepTwoForm"
import styles from "./StepFourForm.module.scss"

const StepFourForm: FC = () => {
  const {
    formsData: { selectedPlan, selectedAddons, isYearly },
    dispatchCurrentStep,
  } = useContext(MainFormContext)

  const summaryPlan = plans.find((plan) => plan.name === selectedPlan) as IPlan
  const summaryAddons = addons.filter(({ name }) =>
    selectedAddons.find((selectedAddon) => selectedAddon === name)
  )

  const summaryPrice = [summaryPlan, ...summaryAddons].reduce(
    (price, { monthlyFee }) => (price += monthlyFee),
    0
  )

  return (
    <form className={styles["summary-form"]}>
      <div className={styles["main"]}>
        <header className={styles["header"]}>
          <div className={styles["plan"]}>
            <h1 className={styles["selected-plan"]}>
              {`${selectedPlan} (${isYearly ? "Yearly" : "Monthly"})`}
            </h1>

            <a
              className={classNames(styles["change-link"], "muted-text")}
              href="#change-step"
              onClick={(e) => {
                e.preventDefault()

                dispatchCurrentStep(moveTo(1))
              }}>
              Change
            </a>
          </div>

          <aside className={styles["price--200"]}>
            {getFee(summaryPlan?.monthlyFee as number, isYearly)}
          </aside>
        </header>
        <hr className={styles["hr"]} />

        {summaryAddons.map(({ name, monthlyFee }) => (
          <div key={name} className={styles["base-record"]}>
            <h2 className={classNames(styles[""], "muted-text")}>{name}</h2>
            <aside className={styles["price--100"]}>
              {`+${getFee(monthlyFee, isYearly)}`}
            </aside>
          </div>
        ))}
      </div>
      <section className={styles["footer"]}>
        <h1 className={classNames(styles[""], "muted-text")}>
          {`Total (${isYearly ? "per year" : "per month"})`}
        </h1>
        <footer className={styles["price--300"]}>
          {`+${getFee(summaryPrice, isYearly)}`}
        </footer>
      </section>
    </form>
  )
}

export default StepFourForm
