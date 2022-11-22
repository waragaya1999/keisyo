import { CategoryDto } from "../../types/CategoryDto"

type Props = {
  categoryDto: CategoryDto
  switchCategory: (cat: string) => void
}

export const SearchPresenter: React.FC<Props> = (props) => {
  const { categoryDto, switchCategory } = props

  return (
    <>
      <div className="category">
        <div
          className="categoryOneEach"
          onClick={() => {
            switchCategory("a")
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
            switchCategory("v")
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
            switchCategory("r")
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
            switchCategory("d")
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
        <div className="mileageOneEach">
          <img src="./src/images/mileageFinalStage.svg" />
          <p>終盤</p>
        </div>
        <div className="mileageOneEach">
          <img src="./src/images/mileageFinal.svg" />
          <p>最終</p>
        </div>
        <div className="mileageOneEach">
          <img src="./src/images/mileageMiddle.svg" />
          <p>中盤</p>
        </div>
        <div className="mileageOneEach">
          <img src="./src/images/mileageOther.svg" />
          <p>その他</p>
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
