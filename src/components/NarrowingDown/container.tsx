import { KeisyoPresenter } from "../Keisyo/presenter"
import { NarrowingDownPresenter } from "./presenter"

type Props = Pick<
  React.ComponentProps<typeof KeisyoPresenter>,
  "storedCats" | "storedMils" | "storedLocs" | "resetFilterList" | "switchList"
>

export const NarrowingDown: React.FC<Props> = (props) => {
  const { storedCats, storedMils, storedLocs, resetFilterList, switchList } =
    props
  return (
    <NarrowingDownPresenter
      storedCats={storedCats}
      storedMils={storedMils}
      storedLocs={storedLocs}
      resetFilterList={resetFilterList}
      switchList={switchList}
    />
  )
}
