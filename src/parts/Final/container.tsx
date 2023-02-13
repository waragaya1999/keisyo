import { KeisyoPresenter } from "../../components/Keisyo/presenter"
import { FinalPresenter } from "./presenter"

type Props = Pick<
  React.ComponentProps<typeof KeisyoPresenter>,
  "storedMils" | "switchList"
>

export const Final: React.FC<Props> = (props) => {
  const { storedMils, switchList } = props
  return <FinalPresenter storedMils={storedMils} switchList={switchList} />
}
