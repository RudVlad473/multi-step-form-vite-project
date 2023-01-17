import { FC, useContext } from "react"
import { MainFormContext } from "../../context/MainFormContext"
import { moveTo, nextStep, prevStep } from "../../reducers/currentStep"
import styles from "./StepperSlider.module.scss"

const StepperSlider: FC = () => {
  const {
    currentStep: { stepPhase },
    dispatchCurrentStep,

    error,
  } = useContext(MainFormContext)

  const [isPrev, isNext, isConfirm] = [
    stepPhase === "IN_BETWEEN" || stepPhase === "LAST",
    stepPhase === "IN_BETWEEN" || stepPhase === "FIRST",
    stepPhase === "LAST",
  ]

  const isSteppable = true

  return (
    <footer className={styles["footer"]}>
      {isPrev && (
        <button
          className={styles["prev-btn"]}
          onClick={() => {
            dispatchCurrentStep(prevStep())
          }}
          disabled={!isSteppable}>
          Go Back
        </button>
      )}
      {isNext && (
        <button
          className={styles["next-btn"]}
          onClick={() => {
            dispatchCurrentStep(nextStep())
          }}
          disabled={!isSteppable}>
          Next Step
        </button>
      )}
      {isConfirm && (
        <button
          className={styles["confirm-btn"]}
          onClick={() => {
            dispatchCurrentStep(nextStep())
            console.log("PUT CONFIRMATION LOGIC HERE")
          }}
          disabled={!isSteppable}>
          Confirm
        </button>
      )}
    </footer>
  )
}

export default StepperSlider
