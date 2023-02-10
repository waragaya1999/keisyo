import { KeisyoPresenter } from "../../components/Keisyo/presenter"
import { SecondHalfPresenter } from "./presenter"

type Props = Pick<
  React.ComponentProps<typeof KeisyoPresenter>,
  "storedMils" | "switchList"
>

export const SecondHalf: React.FC<Props> = (props) => {
  const { storedMils, switchList } = props
  return <SecondHalfPresenter storedMils={storedMils} switchList={switchList} />
}
