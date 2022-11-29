import { CategoryDto } from "../../types/CategoryDto"
import { LocationDto } from "../../types/LocationDto"
import { MileageDto } from "../../types/MileageDto"
import { SearchPresenter } from "./presenter"

type Props = {
  categoryDto: CategoryDto
  mileageDto: MileageDto
  locationDto: LocationDto
  switchCategory: (cat: string) => void
  switchMileage: (mil: string) => void
  switchLocation: (loc: string) => void
}

export const Search1: React.FC<Props> = (props) => {
  const {
    categoryDto,
    mileageDto,
    locationDto,
    switchCategory,
    switchMileage,
    switchLocation,
  } = props
  return (
    <SearchPresenter
      categoryDto={categoryDto}
      mileageDto={mileageDto}
      locationDto={locationDto}
      switchCategory={switchCategory}
      switchMileage={switchMileage}
      switchLocation={switchLocation}
    />
  )
}
