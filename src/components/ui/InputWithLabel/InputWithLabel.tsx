import classNames from "classnames"
import { useField } from "formik"
import { forwardRef, HTMLProps, useContext, useState } from "react"
import { StepsTypes } from "../../../App"
import { MainFormContext } from "../../../context/MainFormContext"
import { useDelayedError } from "../../../hooks/useDelayedError"
import { updateFormsData } from "../../../reducers/formsData"
import styles from "./InputWithLabel.module.scss"

interface InputWithLabelProps extends HTMLProps<HTMLInputElement> {
  label: string
}

const InputWithLabel = forwardRef<HTMLInputElement, InputWithLabelProps>(
  ({ label, ...props }, ref) => {
    const [{ onBlur, ...field }, { error, touched }] = useField(
      props.name as string
    )

    const [isFocused, setIsFocused] = useState(false)
    const isError = error !== "" && error && touched && !isFocused

    const [shouldShowError] = useDelayedError(!!isError, 1500)

    const { currentStep, dispatchFormsData, setError } =
      useContext(MainFormContext)

    return (
      <div className={styles["wrapper"]}>
        <label htmlFor={props.id} className={styles["label"]}>
          {label}
        </label>
        {shouldShowError && (
          <span
            className={classNames(styles["error-msg"], "ellipsis-overflow")}
            title={error}>
            {error}
          </span>
        )}
        <input
          {...props}
          {...field}
          onFocus={() => {
            setIsFocused(true)
          }}
          onBlur={(e) => {
            onBlur(e)

            ///if (!error) {
            dispatchFormsData(
              updateFormsData({
                [props.name as string]: field.value,
              } as StepsTypes)
            )
            //}
            setIsFocused(false)
            // if (isError) {
            //   setError({
            //     step: currentStep,
            //     message: `There is error in ${props.name} field`,
            //   })
            // }
          }}
          ref={ref}
          className={classNames(styles["input"], {
            [styles["input--error"]]: shouldShowError,
          })}
        />
      </div>
    )
  }
)

export default InputWithLabel
