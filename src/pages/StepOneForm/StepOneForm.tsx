import { Formik } from "formik"
import React, { FC, useContext } from "react"
import InputWithLabel from "../../components/ui/InputWithLabel/InputWithLabel"
import { MainFormContext } from "../../context/MainFormContext"
import { useFocus } from "../../hooks/useFocus"
import { stepOneFormInitialState, stepOneFormSchema } from "../../schemas/stepOneFormSchema"

import styles from "./StepOneForm.module.scss"

const StepOneForm: FC = () => {
  const { formsData, dispatchFormsData } = useContext(MainFormContext)

  const nameInputRef = useFocus()

  return (
    <Formik
      initialValues={{ ...stepOneFormInitialState, ...formsData }}
      onSubmit={(values, actions) => {}}
      validationSchema={stepOneFormSchema}>
      {(formProps) => (
        <form className={styles["form"]}>
          <InputWithLabel
            type="text"
            label="Name"
            name="name"
            placeholder="e.g. Stephen King"
            ref={nameInputRef as React.RefObject<HTMLInputElement>}
          />
          <InputWithLabel
            type="email"
            label="Email Address"
            name="email"
            placeholder="e.g. stephenking@lorem.com"
          />
          <InputWithLabel
            type="text"
            label="Phone Number"
            name="phoneNumber"
            placeholder="e.g. +1 234 567 890"
          />
        </form>
      )}
    </Formik>
  )
}

export default StepOneForm
