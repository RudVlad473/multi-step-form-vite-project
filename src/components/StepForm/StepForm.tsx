import { FC, useContext } from "react"
import { MainFormContext } from "../../context/MainFormContext"
import {
  CurrentStep,
  nextStep,
  prevStep,
  StepDescription,
} from "../../reducers/currentStep"
import styles from "./StepForm.module.scss"

export type StepPhase = "FIRST" | "IN_BETWEEN" | "LAST"

export interface StepFormProps extends StepDescription {
  children: React.ReactNode
}

const StepForm: FC<StepFormProps> = ({
  header,
  descr,

  children: form,
}: StepFormProps) => {
  const { currentStep, dispatchCurrentStep } = useContext(MainFormContext)
  const [isPrev, isNext] = [
    currentStep.stepPhase === "IN_BETWEEN" || currentStep.stepPhase === "LAST",
    currentStep.stepPhase === "IN_BETWEEN" || currentStep.stepPhase === "FIRST",
  ]

  return (
    <section className={styles["step-form"]}>
      <header>
        <h1 className={styles["header"]}>{header}</h1>
        <h2 className={styles["subheader"]}>{descr}</h2>
      </header>
      {form}
      <footer className={styles["footer"]}>
        {isPrev && (
          <button
            className={styles["go-back-btn"]}
            onClick={() => {
              dispatchCurrentStep(prevStep())
            }}>
            Go Back
          </button>
        )}
        {isNext && (
          <button
            className={styles["next-btn"]}
            onClick={() => {
              dispatchCurrentStep(nextStep())
            }}>
            Next Step
          </button>
        )}
      </footer>
    </section>
  )
}

export { StepForm }
