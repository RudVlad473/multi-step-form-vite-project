import { FormsData } from "./../App"
import { StepsTypes } from "../App"

type FormsDataTypes = "UPDATE"

export interface FormsDataAction {
  type: FormsDataTypes
  payload: StepsTypes
}

function formsDataReducer(
  formsData: FormsData,
  { type, payload }: FormsDataAction
): FormsData {
  switch (type) {
    case "UPDATE": {
      return { ...formsData, ...payload }
      break
    }
  }
}

export const updateFormsData = (newFormsData: StepsTypes): FormsDataAction => ({
  type: "UPDATE",
  payload: newFormsData,
})

export { formsDataReducer }
