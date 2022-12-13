import { KeisyoPresenter } from "../../components/Keisyo/presenter"
import { FinalStagePresenter } from "./presenter"

type Props = Pick<
  React.ComponentProps<typeof KeisyoPresenter>,
  "mileages" | "switchList"
>

export const FinalStage: React.FC<Props> = (props) => {
  const { mileages, switchList } = props
  return <FinalStagePresenter mileages={mileages} switchList={switchList} />
}
