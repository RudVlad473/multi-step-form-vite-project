import { FC } from "react"
import { StepDescription } from "../../reducers/currentStep"
import StepperSlider from "../StepperSlider/StepperSlider"
import styles from "./StepForm.module.scss"

export type StepPhase = "FIRST" | "IN_BETWEEN" | "LAST" | "FINAL"

export interface StepFormProps extends StepDescription {
  children: React.ReactNode
}

const StepForm: FC<StepFormProps> = ({
  header,
  descr,

  children: form,
}: StepFormProps) => {
  return (
    <section className={styles["step-form"]}>
      {!!header && (
        <header className={styles["header-wrapper"]}>
          <h1 className={styles["header"]}>{header}</h1>
          <h2 className={styles["subheader"]}>{descr}</h2>
        </header>
      )}
      <div className={styles["form"]}>{form}</div>
      <StepperSlider />
    </section>
  )
}

export { StepForm }
