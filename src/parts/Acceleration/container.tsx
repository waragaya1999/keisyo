import { KeisyoPresenter } from "../../components/Keisyo/presenter"
import { AccelerationPresenter } from "./presenter"

type Props = Pick<
  React.ComponentProps<typeof KeisyoPresenter>,
  "storedCats" | "switchList"
>

export const Acceleration: React.FC<Props> = (props) => {
  const { storedCats, switchList } = props
  return (
    <AccelerationPresenter storedCats={storedCats} switchList={switchList} />
  )
}
