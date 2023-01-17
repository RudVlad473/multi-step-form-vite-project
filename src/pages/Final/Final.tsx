import classNames from "classnames"
import React from "react"
import icon from "../../assets/icon-thank-you.svg"
import styles from "./Final.module.scss"

const Final = () => {
  return (
    <section className={styles["section"]}>
      <picture>
        <img src={icon} alt="icon" />
      </picture>
      <h1 className={styles["header"]}>Thank you!</h1>
      <article className={classNames(styles["article"], "muted-text")}>
        Thanks for confirming your subscribtion! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </article>
    </section>
  )
}

export default Final
