import React from "react"
import { KeisyoPresenter } from "../../components/Keisyo/presenter"
import { NarrowingDown } from "../../components/NarrowingDown/container"

type Props = Omit<React.ComponentProps<typeof KeisyoPresenter>, "closeModal">

export const FilterButtonPresenter: React.FC<Props> = (props) => {
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
      <div className={modalFlag ? "filterModal" : "hide"}>
        <NarrowingDown
          categories={categories}
          mileages={mileages}
          locations={locations}
          switchList={switchList}
        />
        <div className="closeModalButton">OK</div>
      </div>
    </>
  )
}
