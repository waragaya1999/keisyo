import React from "react"
import { NarrowingDown } from "../../components/NarrowingDown/container"
import { CallFilter } from "./container"

type Props = React.ComponentProps<typeof CallFilter>

export const CallFilterPresenter: React.FC<Props> = (props) => {
  const {
    getList,
    filterList,
    isLoaded,
    storedCats,
    storedMils,
    storedLocs,
    resetFilterList,
    switchList,
    modalFlag,
  } = props
  const isfiltered = () => {
    if (
      storedCats.length != 0 ||
      storedMils.length != 0 ||
      storedLocs.length != 0
    ) {
      return true
    } else {
      return false
    }
  }

  return (
    <>
      <div className="filter">
        {isfiltered() ? (
          <img
            src="https://uma-keisyo.com/images/filter_on.svg"
            className="buttonFilter"
          />
        ) : (
          <img
            src="https://uma-keisyo.com/images/filter_off.svg"
            className="buttonFilter"
          />
        )}
      </div>
      <div className={modalFlag ? "modalBg" : "hide"}>
        <div className={modalFlag ? "filterModal" : "hide"}>
          <NarrowingDown
            storedCats={storedCats}
            storedMils={storedMils}
            storedLocs={storedLocs}
            switchList={switchList}
          />
          <div className="closeModalButton">
            <img
              src="https://uma-keisyo.com/images/ok.svg"
              className="closeModalButtonImg"
            />
            <div className="closeModalReset">
              <img
                src="https://uma-keisyo.com/images/reset.svg"
                className="closeModalResetImg"
                onClick={resetFilterList}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
