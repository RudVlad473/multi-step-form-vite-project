import React, { FC, useContext } from "react"
import { MainFormContext } from "../../../context/MainFormContext"
import { updateFormsData } from "../../../reducers/formsData"
import { IPlan } from "../../../schemas/stepTwoFormSchema"
import styles from "./SinglePlate.module.scss"
import classNames from "classnames"
import { getFee } from "../../../utils/getFee"

const SinglePlate: FC<IPlan & { isSelected: boolean; isYearly: boolean }> = ({
  name,
  monthlyFee,
  imgSrc,
  isSelected,
  isYearly,
}) => {
  const { dispatchFormsData } = useContext(MainFormContext)

  return (
    <article
      className={classNames(styles["plate"], {
        [styles["plate--selected"]]: isSelected,
      })}
      onClick={() => {
        if (!isSelected) {
          dispatchFormsData(updateFormsData({ selectedPlan: name }))
        }
      }}>
      <picture>
        <img src={imgSrc} alt={`${name} image`} width="40px" />
      </picture>
      <div className={styles["body"]}>
        <header className={styles["header"]}>{name}</header>
        <footer className={styles["footer"]}>
          <span>{getFee(monthlyFee, isYearly)}</span>
          <span className={styles["yearly-discount"]}>
            {isYearly && "2 months free"}
          </span>
        </footer>
      </div>
    </article>
  )
}

export default SinglePlate
