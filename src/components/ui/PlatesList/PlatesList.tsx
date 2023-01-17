import React, { FC } from "react"
import { IPlan, IStepTwoForm } from "../../../schemas/stepTwoFormSchema"
import SinglePlate from "../SinglePlate/SinglePlate"
import styles from "./PlatesList.module.scss"

export interface PlatesListProps extends IStepTwoForm {
  plates: IPlan[]
  isYearly: boolean
}

const PlatesList: FC<PlatesListProps> = ({
  plates,
  selectedPlan,
  isYearly,
}) => {
  return (
    <ul className={styles["plates"]}>
      {plates.map((plate) => (
        <li key={plate.name}>
          <SinglePlate
            {...plate}
            isSelected={plate.name === selectedPlan}
            isYearly={isYearly}
          />
        </li>
      ))}
    </ul>
  )
}

export default PlatesList
