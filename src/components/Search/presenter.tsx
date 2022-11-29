import { Search1 } from "./container"

type Props = React.ComponentProps<typeof Search1>

export const SearchPresenter: React.FC<Props> = (props) => {
  const { categoryDto, mileageDto, switchCategory, switchMileage } = props

  return (
    <>
      <div className="category">
        <div
          className="categoryOneEach"
          onClick={() => {
            switchCategory("acceleration")
          }}
        >
          {!categoryDto.acceleration ? (
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
            switchCategory("velocity")
          }}
        >
          {!categoryDto.velocity ? (
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
            switchCategory("recovery")
          }}
        >
          {!categoryDto.recovery ? (
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
            switchCategory("debuff")
          }}
        >
          {!categoryDto.debuff ? (
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
            switchMileage("finalStage")
          }}
        >
          {!mileageDto.finalStage ? (
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
            switchMileage("final")
          }}
        >
          {!mileageDto.final ? (
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
            switchMileage("secondHalf")
          }}
        >
          {!mileageDto.secondHalf ? (
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
            switchMileage("other")
          }}
        >
          {!mileageDto.other ? (
            <>
              <img src="./src/images/mileageOtherGray.svg" />
              <p>その他</p>
            </>
          ) : (
            <>
              <img src="./src/images/mileageOther.svg" />
              <p style={{ color: "#F4A02F" }}>その他</p>
            </>
          )}
        </div>
      </div>
      <div className="location">
        <div className="locationOneEach">
          <img src="./src/images/locationStraight.svg" />
          <p>直線</p>
        </div>
        <div className="locationOneEach">
          <img src="./src/images/locationCorner.svg" />
          <p>コーナー</p>
        </div>
        <div className="locationOneEach">
          <img src="./src/images/locationUnconditional.svg" />
          <p>無条件</p>
        </div>
        <div className="locationOneEach">
          <img src="./src/images/none.svg" />
          <p></p>
        </div>
      </div>
    </>
  )
}
