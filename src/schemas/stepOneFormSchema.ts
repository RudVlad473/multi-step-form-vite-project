import { object, SchemaOf, string } from "yup"

const minNameLen = 3

const ValidationMessages = {
  NAME: `Your name is too short. Min length: ${minNameLen}`,
  EMAIL: "This is not a valid email",
  PHONE_NUMBER: {
    SHORT: "This phone number is too short",
    INVALID: "This is not a valid phone number",
  },
  REQUIRED: "This field is required",
}

// export interface DiscriminatedType {
//   type: StepType
// }

export interface IStepOneForm {
  name: string
  email: string
  phoneNumber: string
}

const stepOneFormSchema: SchemaOf<IStepOneForm> = object().shape({
  name: string()
    .min(minNameLen, ValidationMessages.NAME)
    .required(ValidationMessages.REQUIRED),
  email: string()
    .email(ValidationMessages.EMAIL)
    .required(ValidationMessages.REQUIRED),
  phoneNumber: string()
    .min(5, ValidationMessages.PHONE_NUMBER.SHORT)
    .matches(
      /^[a-zA-Z0-9\-().\s]{10,15}$/,
      ValidationMessages.PHONE_NUMBER.INVALID
    )
    .required(ValidationMessages.REQUIRED),
})

export const stepOneFormInitialState: IStepOneForm = {
  name: "",
  email: "",
  phoneNumber: "",
}

export { stepOneFormSchema }
