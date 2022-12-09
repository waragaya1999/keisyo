import { SearchPresenter } from "./presenter"

type Props = {
  categories: string[]
  mileages: string[]
  locations: string[]
  switchList: (cat: string, mil: string, pos: string) => void
}

export const Search1: React.FC<Props> = (props) => {
  const { categories, mileages, locations, switchList } = props
  return (
    <SearchPresenter
      categories={categories}
      mileages={mileages}
      locations={locations}
      switchList={switchList}
    />
  )
}
