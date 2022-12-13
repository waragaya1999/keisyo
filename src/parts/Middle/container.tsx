import { KeisyoPresenter } from "../../components/Keisyo/presenter"
import { MiddlePresenter } from "./presenter"

type Props = Pick<
  React.ComponentProps<typeof KeisyoPresenter>,
  "mileages" | "switchList"
>

export const Middle: React.FC<Props> = (props) => {
  const { mileages, switchList } = props
  return <MiddlePresenter mileages={mileages} switchList={switchList} />
}
