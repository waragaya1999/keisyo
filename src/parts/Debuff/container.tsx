import { KeisyoPresenter } from "../../components/Keisyo/presenter"
import { DebuffPresenter } from "./presenter"

type Props = Pick<
  React.ComponentProps<typeof KeisyoPresenter>,
  "storedCats" | "switchList"
>

export const Debuff: React.FC<Props> = (props) => {
  const { storedCats, switchList } = props
  return <DebuffPresenter storedCats={storedCats} switchList={switchList} />
}
