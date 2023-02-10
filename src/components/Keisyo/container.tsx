import { useKeisyo } from "../../hooks/useKeisyo"
import useStore from "../../hooks/useStore"
import { KeisyoPresenter } from "./presenter"

export const Keisyo: React.FC = () => {
  const {
    getList,
    filterList,
    updateFilterList,
    switchList,
    isLoaded,
    modalFlag,
    closeModal,
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
        switchList={switchList}
        modalFlag={modalFlag}
        closeModal={closeModal}
      />
    </>
  )
}
