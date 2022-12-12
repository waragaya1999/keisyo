import { KeisyoPresenter } from "../../components/Keisyo/presenter"
import { DebuffPresenter } from "./presenter"

type Props = Pick<
  React.ComponentProps<typeof KeisyoPresenter>,
  "categories" | "switchList"
>

export const Debuff: React.FC<Props> = (props) => {
  const { categories, switchList } = props
  return <DebuffPresenter categories={categories} switchList={switchList} />
}
