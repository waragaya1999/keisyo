import { useLayoutEffect } from "react"
import { KeisyoPresenter } from "../Keisyo/presenter"
import { FilterListPresenter } from "./presenter"

type Props = Pick<
  React.ComponentProps<typeof KeisyoPresenter>,
  | "filterList"
  | "storedCats"
  | "storedMils"
  | "storedLocs"
  | "updateFilterList"
  | "isLoaded"
>

export const FilterList: React.FC<Props> = (props) => {
  const {
    filterList,
    storedCats,
    storedMils,
    storedLocs,
    updateFilterList,
    isLoaded,
  } = props

  useLayoutEffect(() => {
    updateFilterList(storedCats, storedMils, storedLocs)
  }, [])

  return (
    <FilterListPresenter
      updateFilterList={updateFilterList}
      filterList={filterList}
      isLoaded={isLoaded}
    />
  )
}
