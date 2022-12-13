import { KeisyoPresenter } from "../../components/Keisyo/presenter"
import { RecoveryPresenter } from "./presenter"

type Props = Pick<
  React.ComponentProps<typeof KeisyoPresenter>,
  "categories" | "switchList"
>

export const Recovery: React.FC<Props> = (props) => {
  const { categories, switchList } = props
  return <RecoveryPresenter categories={categories} switchList={switchList} />
}
