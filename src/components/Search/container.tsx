import { useKeisyo } from "../../hooks/useKeisyo"
import { SearchPresenter } from "./presenter"

export const Search1: React.FC = () => {
  const {
    categoryAcceleration,
    categoryVelocity,
    categoryRecovery,
    categoryDebuff,
    switchCategoryAcceleration,
    switchCategoryVelocity,
    switchCategoryRecovery,
    switchCategoryDebuff,
  } = useKeisyo()
  return (
    <SearchPresenter
      categoryAcceleration={categoryAcceleration}
      categoryVelocity={categoryVelocity}
      categoryRecovery={categoryRecovery}
      categoryDebuff={categoryDebuff}
      switchCategoryAcceleration={switchCategoryAcceleration}
      switchCategoryVelocity={switchCategoryVelocity}
      switchCategoryRecovery={switchCategoryRecovery}
      switchCategoryDebuff={switchCategoryDebuff}
    />
  )
}
