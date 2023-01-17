import classNames from "classnames"
import { FC, useContext } from "react"
import { MainFormContext } from "../../context/MainFormContext"
import { moveTo, StepDescription } from "../../reducers/currentStep"
import styles from "./Stepper.module.scss"

const Stepper: FC<{ stepsDescrs: StepDescription[] }> = ({ stepsDescrs }) => {
  const { currentStep, dispatchCurrentStep, error } =
    useContext(MainFormContext)

  const isSteppable = true

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
            className={classNames(
              styles["index"],
              {
                [styles["hovered-index"]]: stepIndex === currentStep.stepIndex,
              },
              { [styles["index--error"]]: error?.step.stepIndex === stepIndex },
              { [styles["index--unsteppable"]]: !isSteppable }
            )}>
            {stepIndex + 1}
          </div>
          <h2 className={(styles["subheader"])}>{`STEP ${stepIndex + 1}`}</h2>
          <h1 className={styles["header"]}>{header.toUpperCase()}</h1>
        </div>
      ))}
    </nav>
  )
}

export default Stepper
