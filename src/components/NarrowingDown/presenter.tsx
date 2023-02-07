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
  const { categories, mileages, locations, switchList } = props
  return (
    <div className="filterArea">
      <div className="category">
        <div className="catIcon">
          <img src="https://uma-keisyo.com/images/category.svg" />
          <p>カテゴリ</p>
        </div>
        <div className="catArea">
          <Acceleration categories={categories} switchList={switchList} />
          <Velocity categories={categories} switchList={switchList} />
          <Recovery categories={categories} switchList={switchList} />
          <Debuff categories={categories} switchList={switchList} />
        </div>
      </div>
      <div className="mileage">
        <div className="milIcon">
          <img src="https://uma-keisyo.com/images/mileage.svg" />
          <p>発動距離</p>
        </div>
        <div className="milArea">
          <FinalStage mileages={mileages} switchList={switchList} />
          <Final mileages={mileages} switchList={switchList} />
          <SecondHalf mileages={mileages} switchList={switchList} />
          <Middle mileages={mileages} switchList={switchList} />
        </div>
      </div>
      <div className="location">
        <div className="locIcon">
          <img src="https://uma-keisyo.com/images/location.svg" />
          <p>発動区画</p>
        </div>
        <div className="locArea">
          <Straight locations={locations} switchList={switchList} />
          <Corner locations={locations} switchList={switchList} />
          <Specific locations={locations} switchList={switchList} />
          <Unconditional locations={locations} switchList={switchList} />
        </div>
      </div>
    </div>
  )
}
