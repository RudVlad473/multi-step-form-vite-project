import classNames from "classnames"
import React, { FC, useContext, useState } from "react"
import { MainFormContext } from "../../../context/MainFormContext"
import { updateFormsData } from "../../../reducers/formsData"
import { IAddon } from "../../../schemas/stepThreeFormSchema"
import { getFee } from "../../../utils/getFee"
import Checkbox from "../Checkbox/Checkbox"
import styles from "./SingleAddon.module.scss"

const SingleAddon: FC<IAddon & { isChecked: boolean }> = ({
  name,
  descr,
  monthlyFee,
  isChecked,
}) => {
  const {
    formsData: { isYearly, selectedAddons },
    dispatchFormsData,
  } = useContext(MainFormContext)

  //const [isSelected, setIsSelected] = useState(false)

  return (
    <article
      className={classNames(styles["addon"], {
        [styles["addon--selected"]]: isChecked,
      })}>
      <Checkbox
        checked={isChecked}
        onChange={({ currentTarget: { checked } }) => {
          const newSelectedAddons = checked
            ? selectedAddons.concat(name)
            : selectedAddons.filter((addonName) => addonName !== name)

          dispatchFormsData(
            updateFormsData({
              selectedAddons: newSelectedAddons,
            })
          )
        }}
      />
      <header className={styles["header"]}>{name}</header>
      <footer className={styles["footer"]}>{descr}</footer>
      <aside className={styles["aside"]}>{`+${getFee(
        monthlyFee,
        isYearly
      )}`}</aside>
    </article>
  )
}

export default SingleAddon
