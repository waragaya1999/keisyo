import { useEffect } from "react"
import { KeisyoPresenter } from "../Keisyo/presenter"
import { FilterListPresenter } from "./presenter"

type Props = Pick<
  React.ComponentProps<typeof KeisyoPresenter>,
  "filterList" | "isLoaded" | "getList"
>

export const FilterList: React.FC<Props> = (props) => {
  const { filterList, isLoaded, getList } = props

  useEffect(() => {
    getList()
  }, [])

  return <FilterListPresenter filterList={filterList} isLoaded={isLoaded} />
}
