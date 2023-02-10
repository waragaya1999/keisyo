import { Acceleration } from "../../parts/Acceleration/container"
import { Corner } from "../../parts/Corner/container"
import { Debuff } from "../../parts/Debuff/container"
import { Final } from "../../parts/Final/container"
import { FinalStage } from "../../parts/FinalStage/container"
import { Middle } from "../../parts/Middle/container"
import { Recovery } from "../../parts/Recovery/container"
import { SecondHalf } from "../../parts/SecondHalf/container"
import { Specific } from "../../parts/Specific/container"
import { Straight } from "../../parts/Straight/container"
import { Unconditional } from "../../parts/Unconditional/container"
import { Velocity } from "../../parts/Velocity/container"
import { NarrowingDown } from "./container"

type Props = React.ComponentProps<typeof NarrowingDown>

export const NarrowingDownPresenter: React.FC<Props> = (props) => {
  const { storedCats, storedMils, storedLocs, switchList } = props
  return (
    <div className="filterArea">
      <div className="category">
        <div className="catIcon">
          <img src="https://uma-keisyo.com/images/category.svg" />
          <p>カテゴリ</p>
        </div>
        <div className="catArea">
          <Acceleration storedCats={storedCats} switchList={switchList} />
          <Velocity storedCats={storedCats} switchList={switchList} />
          <Recovery storedCats={storedCats} switchList={switchList} />
          <Debuff storedCats={storedCats} switchList={switchList} />
        </div>
      </div>
      <div className="mileage">
        <div className="milIcon">
          <img src="https://uma-keisyo.com/images/mileage.svg" />
          <p>発動距離</p>
        </div>
        <div className="milArea">
          <FinalStage storedMils={storedMils} switchList={switchList} />
          <Final storedMils={storedMils} switchList={switchList} />
          <SecondHalf storedMils={storedMils} switchList={switchList} />
          <Middle storedMils={storedMils} switchList={switchList} />
        </div>
      </div>
      <div className="location">
        <div className="locIcon">
          <img src="https://uma-keisyo.com/images/location.svg" />
          <p>発動区画</p>
        </div>
        <div className="locArea">
          <Straight storedLocs={storedLocs} switchList={switchList} />
          <Corner storedLocs={storedLocs} switchList={switchList} />
          <Specific storedLocs={storedLocs} switchList={switchList} />
          <Unconditional storedLocs={storedLocs} switchList={switchList} />
        </div>
      </div>
    </div>
  )
}
