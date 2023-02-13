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
  } = props
  const navigate = useNavigate()

  return (
    <div className="wrap" onClick={closeModal}>
      <div className="bg">
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
        <footer>©ケイショウチェッカー All Rights Reserved.</footer>
      </div>
    </div>
  )
}
