import { useEffect, useLayoutEffect } from "react"
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
  | "scrollBarMargin"
  | "scrollBarHeight"
  | "determineScrollBar"
  | "scrollHandler"
  | "offset"
  | "scrollBarActive"
  | "mouseDownScrollBar"
  | "mouseUpScrollBar"
  | "moveThumb"
  | "scrollBarThumbY"
>

export const FilterList: React.FC<Props> = (props) => {
  const {
    filterList,
    storedCats,
    storedMils,
    storedLocs,
    updateFilterList,
    isLoaded,
    scrollBarMargin,
    scrollBarHeight,
    determineScrollBar,
    scrollHandler,
    offset,
    scrollBarActive,
    mouseDownScrollBar,
    mouseUpScrollBar,
    moveThumb,
    scrollBarThumbY,
  } = props

  useLayoutEffect(() => {
    updateFilterList(storedCats, storedMils, storedLocs)
  }, [])

  useEffect(() => {
    determineScrollBar()
  }, [filterList])

  return (
    <FilterListPresenter
      updateFilterList={updateFilterList}
      filterList={filterList}
      isLoaded={isLoaded}
      scrollBarMargin={scrollBarMargin}
      scrollBarHeight={scrollBarHeight}
      scrollHandler={scrollHandler}
      offset={offset}
      scrollBarActive={scrollBarActive}
      mouseDownScrollBar={mouseDownScrollBar}
      mouseUpScrollBar={mouseUpScrollBar}
      moveThumb={moveThumb}
      scrollBarThumbY={scrollBarThumbY}
    />
  )
}
