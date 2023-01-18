import React, { FC, useContext, useEffect, useState } from "react"
import styles from "./YearlyToggle.module.scss"
import "react-toggle/style.css"
import Toggle from "react-toggle"
import classNames from "classnames"
import { MainFormContext } from "../../../context/MainFormContext"
import { toggleMonthly, toggleYearly } from "../../../reducers/formsData"

const YearlyToggle: FC<{
  isInitiallyChecked: boolean
}> = ({ isInitiallyChecked }) => {
  //const [isChecked, setIsChecked] = useState(isInitiallyChecked)

  const {
    formsData: { isYearly },
    dispatchFormsData,
  } = useContext(MainFormContext)

  return (
    <div className={styles["wrapper"]}>
      <span
        className={classNames(styles["label"], {
          [styles["label--featured"]]: !isYearly,
        })}>
        Monthly
      </span>
      <Toggle
        className={styles["toggle"]}
        //defaultChecked={isYearly}
        icons={false}
        checked={isYearly}
        onChange={({ target }) => {
          dispatchFormsData(isYearly ? toggleMonthly() : toggleYearly())
        }}
      />
      <span
        className={classNames(styles["label"], {
          [styles["label--featured"]]: isYearly,
        })}>
        Yearly
      </span>
    </div>
  )
}

export default YearlyToggle
