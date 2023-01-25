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

  return (
    <>
      <div className="filter">絞り込み:OFF</div>
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
