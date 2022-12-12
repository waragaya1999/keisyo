import { KeisyoPresenter } from "../../components/Keisyo/presenter"
import { AccelerationPresenter } from "./presenter"

type Props = Pick<
  React.ComponentProps<typeof KeisyoPresenter>,
  "categories" | "switchList"
>

export const Acceleration: React.FC<Props> = (props) => {
  const { categories, switchList } = props
  return (
    <AccelerationPresenter categories={categories} switchList={switchList} />
  )
}
