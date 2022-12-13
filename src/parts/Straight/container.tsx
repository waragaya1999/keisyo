import { KeisyoPresenter } from "../../components/Keisyo/presenter"
import { StraightPresenter } from "./presenter"

type Props = Pick<
  React.ComponentProps<typeof KeisyoPresenter>,
  "locations" | "switchList"
>

export const Straight: React.FC<Props> = (props) => {
  const { locations, switchList } = props
  return <StraightPresenter locations={locations} switchList={switchList} />
}
