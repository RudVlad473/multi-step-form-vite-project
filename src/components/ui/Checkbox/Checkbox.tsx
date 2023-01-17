import React, { FC, HTMLProps } from "react"
import styles from "./Checkbox.module.scss"

const Checkbox: FC<HTMLProps<HTMLInputElement>> = ({ ...props }) => {
  return <input {...props} type="checkbox" className={styles["checkbox"]} />
}

export default Checkbox
