import { KeisyoPresenter } from "../../components/Keisyo/presenter"
import { MiddlePresenter } from "./presenter"

type Props = Pick<
  React.ComponentProps<typeof KeisyoPresenter>,
  "storedMils" | "switchList"
>

export const Middle: React.FC<Props> = (props) => {
  const { storedMils, switchList } = props
  return <MiddlePresenter storedMils={storedMils} switchList={switchList} />
}
