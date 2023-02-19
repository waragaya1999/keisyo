import { useKeisyo } from "../../hooks/useKeisyo"
import useStore from "../../hooks/useStore"
import { KeisyoPresenter } from "./presenter"

export const Keisyo: React.FC = () => {
  const {
    getList,
    filterList,
    updateFilterList,
    resetFilterList,
    switchList,
    isLoaded,
    modalFlag,
    closeModal,
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
  } = useKeisyo()
  const { storedCats, storedMils, storedLocs } = useStore()

  return (
    <>
      <KeisyoPresenter
        getList={getList}
        filterList={filterList}
        isLoaded={isLoaded}
        storedCats={storedCats}
        storedMils={storedMils}
        storedLocs={storedLocs}
        updateFilterList={updateFilterList}
        resetFilterList={resetFilterList}
        switchList={switchList}
        modalFlag={modalFlag}
        closeModal={closeModal}
        scrollBarMargin={scrollBarMargin}
        scrollBarHeight={scrollBarHeight}
        determineScrollBar={determineScrollBar}
        scrollHandler={scrollHandler}
        offset={offset}
        scrollBarActive={scrollBarActive}
        mouseDownScrollBar={mouseDownScrollBar}
        mouseUpScrollBar={mouseUpScrollBar}
        moveThumb={moveThumb}
        scrollBarThumbY={scrollBarThumbY}
      />
    </>
  )
}
