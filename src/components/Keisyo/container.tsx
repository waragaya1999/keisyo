import { useKeisyo } from "../../hooks/useKeisyo"
import { Search1 } from "../Search/container"
import { KeisyoPresenter } from "./presenter"

export const Keisyo: React.FC = () => {
  const {
    getList,
    filterList,
    categories,
    mileageDto,
    locationDto,
    switchCategory,
    switchMileage,
    switchLocation,
  } = useKeisyo()
  return (
    <>
      <Search1
        categories={categories}
        mileageDto={mileageDto}
        locationDto={locationDto}
        switchCategory={switchCategory}
        switchMileage={switchMileage}
        switchLocation={switchLocation}
      />
      <KeisyoPresenter getList={getList} filterList={filterList} />
    </>
  )
}
