import { KeisyoPresenter } from "../../components/Keisyo/presenter"
import { SecondHalfPresenter } from "./presenter"

type Props = Pick<
  React.ComponentProps<typeof KeisyoPresenter>,
  "mileages" | "switchList"
>

export const SecondHalf: React.FC<Props> = (props) => {
  const { mileages, switchList } = props
  return <SecondHalfPresenter mileages={mileages} switchList={switchList} />
}
