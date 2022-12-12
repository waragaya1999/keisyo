import { KeisyoPresenter } from "../Keisyo/presenter"
import { NarrowingDownPresenter } from "./presenter"

type Props = Pick<
  React.ComponentProps<typeof KeisyoPresenter>,
  "categories" | "mileages" | "locations" | "switchList"
>

export const NarrowingDown: React.FC<Props> = (props) => {
  const { categories, mileages, locations, switchList } = props
  return (
    <NarrowingDownPresenter
      categories={categories}
      mileages={mileages}
      locations={locations}
      switchList={switchList}
    />
  )
}
