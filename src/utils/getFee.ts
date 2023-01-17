import { yearlyPriceMultiplier } from "../reducers/formsData"

function getFee(monthlyFee: number, isYearly: boolean): string {
  return `$${
    isYearly ? `${monthlyFee * yearlyPriceMultiplier}/yr` : `${monthlyFee}/mo`
  }`
}

export { getFee }
