import { FormsData } from "../App"
import { StepsTypes } from "./../App"

export const yearlyPriceMultiplier = 10

type FormsDataTypes = "UPDATE_STEPS" | "TOGGLE_MONTHLY" | "TOGGLE_YEARLY"

export type FormsDataPayload = Partial<StepsTypes> | undefined

export interface FormsDataAction {
  type: FormsDataTypes
  payload: FormsDataPayload
}

function formsDataReducer(
  formsData: FormsData,
  { type, payload }: FormsDataAction
): FormsData {
  switch (type) {
    case "UPDATE_STEPS": {
      return { ...formsData, ...(payload as Partial<StepsTypes>) }
    }
    case "TOGGLE_MONTHLY": {
      return { ...formsData, isYearly: false }
    }
    case "TOGGLE_YEARLY": {
      return { ...formsData, isYearly: true }
    }
  }
}

export const updateFormsData = (
  newFormsData: NonNullable<FormsDataPayload>
): FormsDataAction => ({
  type: "UPDATE_STEPS",
  payload: newFormsData,
})
export const toggleMonthly = (): FormsDataAction => ({
  type: "TOGGLE_MONTHLY",
  payload: undefined,
})
export const toggleYearly = (): FormsDataAction => ({
  type: "TOGGLE_YEARLY",
  payload: undefined,
})

export { formsDataReducer }
