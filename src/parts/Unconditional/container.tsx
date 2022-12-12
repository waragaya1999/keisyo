import { KeisyoPresenter } from "../../components/Keisyo/presenter"
import { UnconditionalPresenter } from "./presenter"

type Props = Pick<
  React.ComponentProps<typeof KeisyoPresenter>,
  "locations" | "switchList"
>

export const Unconditional: React.FC<Props> = (props) => {
  const { locations, switchList } = props
  return (
    <UnconditionalPresenter locations={locations} switchList={switchList} />
  )
}
