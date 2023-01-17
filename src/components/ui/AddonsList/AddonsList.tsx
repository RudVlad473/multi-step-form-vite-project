import { FC } from "react"
import { IAddon, IStepThreeForm } from "../../../schemas/stepThreeFormSchema"
import SingleAddon from "../SingleAddon/SingleAddon"
import styles from "./AddonsList.module.scss"

const AddonsList: FC<{ addons: IAddon[] } & IStepThreeForm> = ({
  addons,
  selectedAddons,
}) => {
  return (
    <ul className={styles["addons-list"]}>
      {addons.map((addon) => (
        <li key={addon.name}>
          <SingleAddon
            {...addon}
            isChecked={
              !!selectedAddons.find(
                (selectedAddon) => selectedAddon === addon.name
              )
            }
          />
        </li>
      ))}
    </ul>
  )
}

export default AddonsList
