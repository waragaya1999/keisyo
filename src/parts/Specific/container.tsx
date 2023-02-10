import { KeisyoPresenter } from "../../components/Keisyo/presenter"
import { SpecificPresenter } from "./presenter"

type Props = Pick<
  React.ComponentProps<typeof KeisyoPresenter>,
  "storedLocs" | "switchList"
>

export const Specific: React.FC<Props> = (props) => {
  const { storedLocs, switchList } = props
  return <SpecificPresenter storedLocs={storedLocs} switchList={switchList} />
}
