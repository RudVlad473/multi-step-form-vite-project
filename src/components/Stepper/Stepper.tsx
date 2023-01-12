import { FC, useContext } from "react"
import { MainFormContext } from "../../context/MainFormContext"
import { moveTo, StepDescription } from "../../reducers/currentStep"
import styles from "./Stepper.module.scss"

const Stepper: FC<{ stepsDescrs: StepDescription[] }> = ({ stepsDescrs }) => {
  const { currentStep, dispatchCurrentStep } = useContext(MainFormContext)

  return (
    <nav className={styles["stepper"]}>
      {stepsDescrs.map(({ header }, stepIndex) => (
        <div
          key={header}
          className={styles["step-descr"]}
          onClick={() => {
            dispatchCurrentStep(moveTo(stepIndex))
          }}>
          <div
            className={`${styles["index"]} ${
              stepIndex === currentStep.stepIndex && styles["hovered-index"]
            }`}>
            {stepIndex + 1}
          </div>
          <h2 className={styles["subheader"]}>{`STEP ${stepIndex + 1}`}</h2>
          <h1 className={styles["header"]}>{header.toUpperCase()}</h1>
        </div>
      ))}
    </nav>
  )
}

export default Stepper
