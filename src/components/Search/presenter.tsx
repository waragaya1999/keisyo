import { Search1 } from "./container"

type Props = React.ComponentProps<typeof Search1>

export const SearchPresenter: React.FC<Props> = (props) => {
  const { categories, mileages, locations, switchList } = props
  return (
    <div className="filterArea">
      <div className="category">
        <div
          className="categoryOneEach"
          onClick={() => {
            switchList("acceleration", "", "")
          }}
        >
          {!categories.includes("acceleration") ? (
            <>
              <img src="./src/images/categoryAccelerationGray.svg" />
              <p>加速</p>
            </>
          ) : (
            <>
              <img src="./src/images/categoryAcceleration.svg" />
              <p style={{ color: "#F4A02F" }}>加速</p>
            </>
          )}
        </div>
        <div
          className="categoryOneEach"
          onClick={() => {
            switchList("velocity", "", "")
          }}
        >
          {!categories.includes("velocity") ? (
            <>
              <img src="./src/images/categoryVelocityGray.svg" />
              <p>速度</p>
            </>
          ) : (
            <>
              <img src="./src/images/categoryVelocity.svg" />
              <p style={{ color: "#F4A02F" }}>速度</p>
            </>
          )}
        </div>
        <div
          className="categoryOneEach"
          onClick={() => {
            switchList("recovery", "", "")
          }}
        >
          {!categories.includes("recovery") ? (
            <>
              <img src="./src/images/categoryRecoveryGray.svg" />
              <p>回復</p>
            </>
          ) : (
            <>
              <img src="./src/images/categoryRecovery.svg" />
              <p style={{ color: "#F4A02F" }}>回復</p>
            </>
          )}
        </div>
        <div
          className="categoryOneEach"
          onClick={() => {
            switchList("debuff", "", "")
          }}
        >
          {!categories.includes("debuff") ? (
            <>
              <img src="./src/images/categoryDebuffGray.svg" />
              <p>デバフ</p>
            </>
          ) : (
            <>
              <img src="./src/images/categoryDebuff.svg" />
              <p style={{ color: "#F4A02F" }}>デバフ</p>
            </>
          )}
        </div>
      </div>
      <div className="mileage">
        <div
          className="mileageOneEach"
          onClick={() => {
            switchList("", "finalStage", "")
          }}
        >
          {!mileages.includes("finalStage") ? (
            <>
              <img src="./src/images/mileageFinalStageGray.svg" />
              <p>終盤</p>
            </>
          ) : (
            <>
              <img src="./src/images/mileageFinalStage.svg" />
              <p style={{ color: "#F4A02F" }}>終盤</p>
            </>
          )}
        </div>
        <div
          className="mileageOneEach"
          onClick={() => {
            switchList("", "final", "")
          }}
        >
          {!mileages.includes("final") ? (
            <>
              <img src="./src/images/mileageFinalGray.svg" />
              <p>最終</p>
            </>
          ) : (
            <>
              <img src="./src/images/mileageFinal.svg" />
              <p style={{ color: "#F4A02F" }}>最終</p>
            </>
          )}
        </div>
        <div
          className="mileageOneEach"
          onClick={() => {
            switchList("", "secondHalf", "")
          }}
        >
          {!mileages.includes("secondHalf") ? (
            <>
              <img src="./src/images/mileageSecondHalfGray.svg" />
              <p>後半</p>
            </>
          ) : (
            <>
              <img src="./src/images/mileageSecondHalf.svg" />
              <p style={{ color: "#F4A02F" }}>後半</p>
            </>
          )}
        </div>
        <div
          className="mileageOneEach"
          onClick={() => {
            switchList("", "middle", "")
          }}
        >
          {!mileages.includes("middle") ? (
            <>
              <img src="./src/images/mileageMiddleGray.svg" />
              <p>中盤</p>
            </>
          ) : (
            <>
              <img src="./src/images/mileageMiddle.svg" />
              <p style={{ color: "#F4A02F" }}>中盤</p>
            </>
          )}
        </div>
      </div>
      <div className="location">
        <div
          className="locationOneEach"
          onClick={() => {
            switchList("", "", "straight")
          }}
        >
          {!locations.includes("straight") ? (
            <>
              <img src="./src/images/locationStraightGray.svg" />
              <p>直線</p>
            </>
          ) : (
            <>
              <img src="./src/images/locationStraight.svg" />
              <p style={{ color: "#F4A02F" }}>直線</p>
            </>
          )}
        </div>
        <div
          className="locationOneEach"
          onClick={() => {
            switchList("", "", "corner")
          }}
        >
          {!locations.includes("corner") ? (
            <>
              <img src="./src/images/locationCornerGray.svg" />
              <p>コーナー</p>
            </>
          ) : (
            <>
              <img src="./src/images/locationCorner.svg" />
              <p style={{ color: "#F4A02F" }}>コーナー</p>
            </>
          )}
        </div>
        <div
          className="locationOneEach"
          onClick={() => {
            switchList("", "", "specific")
          }}
        >
          {!locations.includes("specific") ? (
            <>
              <img src="./src/images/locationSpecificGray.svg" />
              <p>距離</p>
            </>
          ) : (
            <>
              <img src="./src/images/locationSpecific.svg" />
              <p style={{ color: "#F4A02F" }}>距離</p>
            </>
          )}
        </div>
        <div
          className="locationOneEach"
          onClick={() => {
            switchList("", "", "unconditional")
          }}
        >
          {!locations.includes("unconditional") ? (
            <>
              <img src="./src/images/locationUnconditionalGray.svg" />
              <p>無条件</p>
            </>
          ) : (
            <>
              <img src="./src/images/locationUnconditional.svg" />
              <p style={{ color: "#F4A02F" }}>無条件</p>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
