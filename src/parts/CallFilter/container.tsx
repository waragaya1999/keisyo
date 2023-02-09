import { KeisyoPresenter } from "../../components/Keisyo/presenter"
import { CallFilterPresenter } from "./presenter"

type Props = Omit<
  React.ComponentProps<typeof KeisyoPresenter>,
  "storedCats" | "updateFilterList" | "closeModal"
>

export const CallFilter: React.FC<Props> = (props) => {
  const {
    getList,
    filterList,
    isLoaded,
    categories,
    mileages,
    locations,
    switchList,
    modalFlag,
  } = props

  return (
    <CallFilterPresenter
      getList={getList}
      filterList={filterList}
      isLoaded={isLoaded}
      categories={categories}
      mileages={mileages}
      locations={locations}
      switchList={switchList}
      modalFlag={modalFlag}
    />
  )
}
