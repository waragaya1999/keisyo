import { useKeisyo } from "../../hooks/useKeisyo"
import { Search1 } from "../Search/container"
import { KeisyoPresenter } from "./presenter"

export const Keisyo: React.FC = () => {
  const {
    getList,
    filterList,
    categories,
    mileages,
    locations,
    switchList,
    isLoaded,
  } = useKeisyo()
  return (
    <>
      <Search1
        categories={categories}
        mileages={mileages}
        locations={locations}
        switchList={switchList}
      />
      <KeisyoPresenter
        getList={getList}
        filterList={filterList}
        isLoaded={isLoaded}
      />
    </>
  )
}
