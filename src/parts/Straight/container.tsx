import { KeisyoPresenter } from "../../components/Keisyo/presenter"
import { StraightPresenter } from "./presenter"

type Props = Pick<
  React.ComponentProps<typeof KeisyoPresenter>,
  "storedLocs" | "switchList"
>

export const Straight: React.FC<Props> = (props) => {
  const { storedLocs, switchList } = props
  return <StraightPresenter storedLocs={storedLocs} switchList={switchList} />
}
