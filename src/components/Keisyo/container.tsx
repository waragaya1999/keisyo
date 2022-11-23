import { useKeisyo } from "../../hooks/useKeisyo"
import { Search1 } from "../Search/container"
import { KeisyoPresenter } from "./presenter"

export const Keisyo: React.FC = () => {
  const { getFunc, b, categoryDto, mileageDto, switchCategory, switchMileage } =
    useKeisyo()
  return (
    <>
      <Search1
        categoryDto={categoryDto}
        mileageDto={mileageDto}
        switchCategory={switchCategory}
        switchMileage={switchMileage}
      />
      <KeisyoPresenter
        getFunc={getFunc}
        b={b}
        categoryDto={categoryDto}
        mileageDto={mileageDto}
      />
    </>
  )
}
