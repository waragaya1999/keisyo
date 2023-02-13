import { KeisyoPresenter } from "../../components/Keisyo/presenter"
import { CornerPresenter } from "./presenter"

type Props = Pick<
  React.ComponentProps<typeof KeisyoPresenter>,
  "storedLocs" | "switchList"
>

export const Corner: React.FC<Props> = (props) => {
  const { storedLocs, switchList } = props
  return <CornerPresenter storedLocs={storedLocs} switchList={switchList} />
}
