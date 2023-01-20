import { FilterButton } from "../../parts/FilterButton/container"
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
      {innerWidth > 600 ? (
        <>
          <FilterList
            filterList={filterList}
            isLoaded={isLoaded}
            getList={getList}
          />
          <NarrowingDown
            categories={categories}
            mileages={mileages}
            locations={locations}
            switchList={switchList}
          />
        </>
      ) : (
        <>
          <FilterList
            filterList={filterList}
            isLoaded={isLoaded}
            getList={getList}
          />
          <FilterButton
            getList={getList}
            filterList={filterList}
            isLoaded={isLoaded}
            categories={categories}
            mileages={mileages}
            locations={locations}
            switchList={switchList}
          />
        </>
      )}
    </>
  )
}
