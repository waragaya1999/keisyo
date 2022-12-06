import { useKeisyo } from "../../hooks/useKeisyo"
import { Search1 } from "../Search/container"
import { KeisyoPresenter } from "./presenter"

export const Keisyo: React.FC = () => {
  const {
    getList,
    list,
    categoryDto,
    mileageDto,
    locationDto,
    switchCategory,
    switchMileage,
    switchLocation,
  } = useKeisyo()
  return (
    <>
      <Search1
        categoryDto={categoryDto}
        mileageDto={mileageDto}
        locationDto={locationDto}
        switchCategory={switchCategory}
        switchMileage={switchMileage}
        switchLocation={switchLocation}
      />
      <KeisyoPresenter
        getList={getList}
        list={list}
        categoryDto={categoryDto}
        mileageDto={mileageDto}
        locationDto={locationDto}
      />
    </>
  )
}
