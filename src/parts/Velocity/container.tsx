import { KeisyoPresenter } from "../../components/Keisyo/presenter"
import { VelocityPresenter } from "./presenter"

type Props = Pick<
  React.ComponentProps<typeof KeisyoPresenter>,
  "categories" | "switchList"
>

export const Velocity: React.FC<Props> = (props) => {
  const { categories, switchList } = props
  return <VelocityPresenter categories={categories} switchList={switchList} />
}
