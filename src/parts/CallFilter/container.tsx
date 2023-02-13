import { KeisyoPresenter } from "../../components/Keisyo/presenter"
import { CallFilterPresenter } from "./presenter"

type Props = Omit<
  React.ComponentProps<typeof KeisyoPresenter>,
  "categories" | "mileages" | "locations" | "updateFilterList" | "closeModal"
>

export const CallFilter: React.FC<Props> = (props) => {
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

  return (
    <CallFilterPresenter
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
  )
}
