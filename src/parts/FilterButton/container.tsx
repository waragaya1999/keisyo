import { useState } from "react"
import { KeisyoPresenter } from "../../components/Keisyo/presenter"
import { FilterButtonPresenter } from "./presenter"

type Props = React.ComponentProps<typeof KeisyoPresenter>

export const FilterButton: React.FC<Props> = (props) => {
  const [modalFlag, setModalFlag] = useState(false)
  const {
    getList,
    filterList,
    isLoaded,
    categories,
    mileages,
    locations,
    switchList,
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
      flag={modalFlag}
      setFlag={setModalFlag}
    />
  )
}
