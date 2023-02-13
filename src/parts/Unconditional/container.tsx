import { KeisyoPresenter } from "../../components/Keisyo/presenter"
import { UnconditionalPresenter } from "./presenter"

type Props = Pick<
  React.ComponentProps<typeof KeisyoPresenter>,
  "storedLocs" | "switchList"
>

export const Unconditional: React.FC<Props> = (props) => {
  const { storedLocs, switchList } = props
  return (
    <UnconditionalPresenter storedLocs={storedLocs} switchList={switchList} />
  )
}
