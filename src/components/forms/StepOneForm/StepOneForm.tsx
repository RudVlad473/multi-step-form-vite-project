import { Formik, useField } from "formik"
import React, { FC, useContext, useRef } from "react"
import { MainFormContext } from "../../../context/MainFormContext"
import { useFocus } from "../../../hooks/useFocus"
import {
  IStepOneForm,
  stepOneFormSchema,
} from "../../../schemas/stepOneFormSchema"
import InputWithLabel from "../../ui/InputWithLabel/InputWithLabel"
import styles from "./StepOneForm.module.scss"

const StepOneForm: FC<IStepOneForm> = (props) => {
  const { dispatchFormsData } = useContext(MainFormContext)

  const nameInputRef = useFocus()

  return (
    <Formik
      initialValues={{ ...props }}
      onSubmit={(values, actions) => {}}
      validationSchema={stepOneFormSchema}>
      {(formProps) => (
        <form className={styles["form"]}>
          <InputWithLabel
            type="text"
            label="Name"
            name="name"
            placeholder="e.g. Stephen King"
            //error={formProps.errors.name as string}
            ref={nameInputRef as React.RefObject<HTMLInputElement>}
          />
          <InputWithLabel
            type="email"
            label="Email Address"
            name="email"
            placeholder="e.g. stephenking@lorem.com"

            //error={formProps.errors.email as string}
          />
          <InputWithLabel
            type="text"
            label="Phone Number"
            name="phoneNumber"
            placeholder="e.g. +1 234 567 890"

            //error={formProps.errors.phoneNumber as string}
          />
        </form>
      )}
    </Formik>
  )
}

export default StepOneForm
