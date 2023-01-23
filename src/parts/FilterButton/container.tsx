import { KeisyoPresenter } from "../../components/Keisyo/presenter"
import { FilterButtonPresenter } from "./presenter"

type Props = Omit<React.ComponentProps<typeof KeisyoPresenter>, "closeModal">

export const FilterButton: React.FC<Props> = (props) => {
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
    <FilterButtonPresenter
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
