import { KeisyoPresenter } from "../../components/Keisyo/presenter"
import { RecoveryPresenter } from "./presenter"

type Props = Pick<
  React.ComponentProps<typeof KeisyoPresenter>,
  "storedCats" | "switchList"
>

export const Recovery: React.FC<Props> = (props) => {
  const { storedCats, switchList } = props
  return <RecoveryPresenter storedCats={storedCats} switchList={switchList} />
}
