import { useNavigate } from "react-router-dom"
import { CallFilter } from "../../parts/CallFilter/container"
import { ResponseDto } from "../../types/ResponseDto"
import { FilterList } from "../FilterList/container"
import { NarrowingDown } from "../NarrowingDown/container"

type Props = {
  getList: () => void
  filterList: ResponseDto[]
  categories: string[]
  mileages: string[]
  locations: string[]
  updateFilterList: (
    cats: string[],
    mils: string[],
    locs: string[],
  ) => Promise<void>
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
    categories,
    mileages,
    locations,
    updateFilterList,
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
                  isLoaded={isLoaded}
                  getList={getList}
                  updateFilterList={updateFilterList}
                />
                <NarrowingDown
                  categories={categories}
                  mileages={mileages}
                  locations={locations}
                  switchList={switchList}
                />
              </div>
            </>
          ) : (
            <>
              <FilterList
                filterList={filterList}
                isLoaded={isLoaded}
                getList={getList}
                updateFilterList={updateFilterList}
              />
              <CallFilter
                getList={getList}
                filterList={filterList}
                isLoaded={isLoaded}
                categories={categories}
                mileages={mileages}
                locations={locations}
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
