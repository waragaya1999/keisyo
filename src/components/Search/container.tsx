import { LocationDto } from "../../types/LocationDto"
import { MileageDto } from "../../types/MileageDto"
import { SearchPresenter } from "./presenter"

type Props = {
  categories: string[]
  mileageDto: MileageDto
  locationDto: LocationDto
  switchCategory: (cat: string) => void
  switchMileage: (mil: string) => void
  switchLocation: (loc: string) => void
}

export const Search1: React.FC<Props> = (props) => {
  const {
    categories,
    mileageDto,
    locationDto,
    switchCategory,
    switchMileage,
    switchLocation,
  } = props
  return (
    <SearchPresenter
      categories={categories}
      mileageDto={mileageDto}
      locationDto={locationDto}
      switchCategory={switchCategory}
      switchMileage={switchMileage}
      switchLocation={switchLocation}
    />
  )
}
