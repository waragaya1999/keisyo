import { CategoryDto } from "../../types/CategoryDto"
import { MileageDto } from "../../types/mileageDto"
import { SearchPresenter } from "./presenter"

type Props = {
  categoryDto: CategoryDto
  mileageDto: MileageDto
  switchCategory: (cat: string) => void
  switchMileage: (mil: string) => void
}

export const Search1: React.FC<Props> = (props) => {
  const { categoryDto, mileageDto, switchCategory, switchMileage } = props
  return (
    <SearchPresenter
      categoryDto={categoryDto}
      mileageDto={mileageDto}
      switchCategory={switchCategory}
      switchMileage={switchMileage}
    />
  )
}
