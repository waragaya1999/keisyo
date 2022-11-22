import { CategoryDto } from "../../types/CategoryDto"
import { SearchPresenter } from "./presenter"

type Props = {
  categoryDto: CategoryDto
  switchCategory: (cat: string) => void
}

export const Search1: React.FC<Props> = (props) => {
  const { categoryDto, switchCategory } = props
  return (
    <SearchPresenter
      categoryDto={categoryDto}
      switchCategory={switchCategory}
    />
  )
}
