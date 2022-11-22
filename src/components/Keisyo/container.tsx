import { useKeisyo } from "../../hooks/useKeisyo"
import { Search1 } from "../Search/container"
import { KeisyoPresenter } from "./presenter"

export const Keisyo: React.FC = () => {
  const { getFunc, b, categoryDto, switchCategory } = useKeisyo()
  return (
    <>
      <Search1 categoryDto={categoryDto} switchCategory={switchCategory} />
      <KeisyoPresenter getFunc={getFunc} b={b} categoryDto={categoryDto} />
    </>
  )
}
