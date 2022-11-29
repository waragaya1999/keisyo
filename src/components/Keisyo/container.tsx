import { useKeisyo } from "../../hooks/useKeisyo"
import { Search1 } from "../Search/container"
import { KeisyoPresenter } from "./presenter"

export const Keisyo: React.FC = () => {
  const {
    getFunc,
    b,
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
        getFunc={getFunc}
        b={b}
        categoryDto={categoryDto}
        mileageDto={mileageDto}
        locationDto={locationDto}
      />
    </>
  )
}
