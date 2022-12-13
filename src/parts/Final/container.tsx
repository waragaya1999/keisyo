import { KeisyoPresenter } from "../../components/Keisyo/presenter"
import { FinalPresenter } from "./presenter"

type Props = Pick<
  React.ComponentProps<typeof KeisyoPresenter>,
  "mileages" | "switchList"
>

export const Final: React.FC<Props> = (props) => {
  const { mileages, switchList } = props
  return <FinalPresenter mileages={mileages} switchList={switchList} />
}
