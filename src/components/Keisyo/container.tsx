import { useKeisyo } from "../../hooks/useKeisyo"
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
      <KeisyoPresenter
        getList={getList}
        filterList={filterList}
        isLoaded={isLoaded}
        categories={categories}
        mileages={mileages}
        locations={locations}
        switchList={switchList}
      />
    </>
  )
}
