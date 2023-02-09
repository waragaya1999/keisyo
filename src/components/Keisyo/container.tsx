import { useKeisyo } from "../../hooks/useKeisyo"
import { KeisyoPresenter } from "./presenter"

export const Keisyo: React.FC = () => {
  const {
    getList,
    filterList,
    categories,
    mileages,
    locations,
    updateFilterList,
    switchList,
    isLoaded,
    modalFlag,
    closeModal,
  } = useKeisyo()

  return (
    <>
      <KeisyoPresenter
        getList={getList}
        filterList={filterList}
        isLoaded={isLoaded}
        categories={categories}
        mileages={mileages}
        locations={locations}
        updateFilterList={updateFilterList}
        switchList={switchList}
        modalFlag={modalFlag}
        closeModal={closeModal}
      />
    </>
  )
}
