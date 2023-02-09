import { useLayoutEffect } from "react"
import useStore from "../../hooks/useStore"
import { KeisyoPresenter } from "../Keisyo/presenter"
import { FilterListPresenter } from "./presenter"

type Props = Pick<
  React.ComponentProps<typeof KeisyoPresenter>,
  "updateFilterList" | "filterList" | "isLoaded" | "getList"
>

export const FilterList: React.FC<Props> = (props) => {
  const { storedCats, storedMils, storedLocs } = useStore()
  const { updateFilterList, filterList, isLoaded, getList } = props

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
