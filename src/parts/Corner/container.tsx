import { KeisyoPresenter } from "../../components/Keisyo/presenter"
import { CornerPresenter } from "./presenter"

type Props = Pick<
  React.ComponentProps<typeof KeisyoPresenter>,
  "locations" | "switchList"
>

export const Corner: React.FC<Props> = (props) => {
  const { locations, switchList } = props
  return <CornerPresenter locations={locations} switchList={switchList} />
}
