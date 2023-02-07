import React from "react"
import { NarrowingDown } from "../../components/NarrowingDown/container"
import { CallFilter } from "./container"

type Props = React.ComponentProps<typeof CallFilter>

export const CallFilterPresenter: React.FC<Props> = (props) => {
  const {
    getList,
    filterList,
    isLoaded,
    categories,
    mileages,
    locations,
    switchList,
    modalFlag,
  } = props
  const isfiltered = () => {
    if (
      categories.length != 0 ||
      mileages.length != 0 ||
      locations.length != 0
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
            categories={categories}
            mileages={mileages}
            locations={locations}
            switchList={switchList}
          />
          <div className="closeModalButton">OK</div>
        </div>
      </div>
    </>
  )
}
