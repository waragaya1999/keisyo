import { ResponseDto } from "../../types/ResponseDto"
import { FilterList } from "../FilterList/container"
import { NarrowingDown } from "../NarrowingDown/container"

type Props = {
  getList: () => void
  filterList: ResponseDto[]
  categories: string[]
  mileages: string[]
  locations: string[]
  switchList: (cat: string, mil: string, loc: string) => Promise<void>
  isLoaded: boolean
}

export const KeisyoPresenter: React.FC<Props> = (props) => {
  const {
    getList,
    filterList,
    isLoaded,
    categories,
    mileages,
    locations,
    switchList,
  } = props
  return (
    <>
      <NarrowingDown
        categories={categories}
        mileages={mileages}
        locations={locations}
        switchList={switchList}
      />
      <FilterList
        filterList={filterList}
        isLoaded={isLoaded}
        getList={getList}
      />
    </>
  )
}
