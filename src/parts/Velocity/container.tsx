import { KeisyoPresenter } from "../../components/Keisyo/presenter"
import { VelocityPresenter } from "./presenter"

type Props = Pick<
  React.ComponentProps<typeof KeisyoPresenter>,
  "storedCats" | "switchList"
>

export const Velocity: React.FC<Props> = (props) => {
  const { storedCats, switchList } = props
  return <VelocityPresenter storedCats={storedCats} switchList={switchList} />
}
