import { KeisyoPresenter } from "../../components/Keisyo/presenter"
import { FinalStagePresenter } from "./presenter"

type Props = Pick<
  React.ComponentProps<typeof KeisyoPresenter>,
  "storedMils" | "switchList"
>

export const FinalStage: React.FC<Props> = (props) => {
  const { storedMils, switchList } = props
  return <FinalStagePresenter storedMils={storedMils} switchList={switchList} />
}
