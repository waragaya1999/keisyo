import { KeisyoPresenter } from "../../components/Keisyo/presenter"
import { SpecificPresenter } from "./presenter"

type Props = Pick<
  React.ComponentProps<typeof KeisyoPresenter>,
  "locations" | "switchList"
>

export const Specific: React.FC<Props> = (props) => {
  const { locations, switchList } = props
  return <SpecificPresenter locations={locations} switchList={switchList} />
}
