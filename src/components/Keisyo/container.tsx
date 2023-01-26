import { useKeisyo } from "../../hooks/useKeisyo"
import { KeisyoPresenter } from "./presenter"

export const Keisyo: React.FC = () => {
  const {
    getList,
    filterList,
    categories,
    mileages,
    locations,
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
        switchList={switchList}
        modalFlag={modalFlag}
        closeModal={closeModal}
      />
    </>
  )
}
