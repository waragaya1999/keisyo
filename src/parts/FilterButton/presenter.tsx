import React from "react"
import { KeisyoPresenter } from "../../components/Keisyo/presenter"
import { NarrowingDown } from "../../components/NarrowingDown/container"

type Props = React.ComponentProps<typeof KeisyoPresenter> & {
  flag: boolean
  setFlag: React.Dispatch<React.SetStateAction<boolean>>
}

export const FilterButtonPresenter: React.FC<Props> = (props) => {
  const {
    getList,
    filterList,
    isLoaded,
    categories,
    mileages,
    locations,
    switchList,
    flag,
    setFlag,
  } = props

  return (
    <>
      <div className="filter" onClick={() => setFlag(!flag)}>
        絞り込み:OFF
      </div>
      <div className={flag ? "filterModal" : "hide"}>
        <NarrowingDown
          categories={categories}
          mileages={mileages}
          locations={locations}
          switchList={switchList}
        />
      </div>
    </>
  )
}
