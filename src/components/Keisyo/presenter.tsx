import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { CallFilter } from "../../parts/CallFilter/container"
import { ResponseDto } from "../../types/ResponseDto"
import { FilterList } from "../FilterList/container"
import { NarrowingDown } from "../NarrowingDown/container"

type Props = {
  getList: () => void
  filterList: ResponseDto[]
  storedCats: string[]
  storedMils: string[]
  storedLocs: string[]
  updateFilterList: (
    cats: string[],
    mils: string[],
    locs: string[],
  ) => Promise<void>
  resetFilterList: () => Promise<void>
  switchList: (cat: string, mil: string, loc: string) => Promise<void>
  isLoaded: boolean
  modalFlag: boolean
  closeModal: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
  scrollBarMargin: number
  scrollBarHeight: number
  determineScrollBar: () => void
  scrollHandler: () => void
  offset: number
  scrollBarActive: boolean
  mouseDownScrollBar: (e: React.DragEvent<HTMLDivElement>) => void
  mouseUpScrollBar: (e: React.DragEvent<HTMLDivElement>) => void
  moveThumb: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
  scrollBarThumbY: number
}

export const KeisyoPresenter: React.FC<Props> = (props) => {
  const {
    getList,
    filterList,
    isLoaded,
    storedCats,
    storedMils,
    storedLocs,
    updateFilterList,
    resetFilterList,
    switchList,
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
  } = props
  const navigate = useNavigate()
  const [width, setWidth] = useState(0)
  const ref = React.useRef<HTMLDivElement | null>(null)
  React.useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      entries.forEach((el) => {
        setWidth(el.contentRect.width)
      })
    })
    if (ref.current) {
      observer.observe(ref.current)
    }
    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <div className="wrap" onClick={closeModal} ref={ref}>
      <div className="bg" style={{ height: window.innerHeight }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <header className="header">
            <img
              src="https://uma-keisyo.com/images/logo.svg"
              className="logo"
              onClick={() => navigate("/")}
            />
          </header>
          {innerWidth > 600 ? (
            <>
              <div style={{ display: "flex" }}>
                <FilterList
                  filterList={filterList}
                  storedCats={storedCats}
                  storedMils={storedMils}
                  storedLocs={storedLocs}
                  updateFilterList={updateFilterList}
                  isLoaded={isLoaded}
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
                <NarrowingDown
                  storedCats={storedCats}
                  storedMils={storedMils}
                  storedLocs={storedLocs}
                  resetFilterList={resetFilterList}
                  switchList={switchList}
                />
              </div>
            </>
          ) : (
            <>
              <FilterList
                filterList={filterList}
                storedCats={storedCats}
                storedMils={storedMils}
                storedLocs={storedLocs}
                updateFilterList={updateFilterList}
                isLoaded={isLoaded}
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
              <CallFilter
                getList={getList}
                filterList={filterList}
                isLoaded={isLoaded}
                storedCats={storedCats}
                storedMils={storedMils}
                storedLocs={storedLocs}
                resetFilterList={resetFilterList}
                switchList={switchList}
                modalFlag={modalFlag}
              />
            </>
          )}
        </div>
        <footer>©2023 ケイショウチェッカー All Rights Reserved.</footer>
      </div>
    </div>
  )
}
