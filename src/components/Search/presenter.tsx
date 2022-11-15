export const SearchPresenter: React.FC = () => {
  return (
    <>
      <div className="category">
        <div className="categoryOneEach">
          <img src="./src/images/categoryAcceleration.svg" />
          <p>加速</p>
        </div>
        <div className="categoryOneEach">
          <img src="./src/images/categoryVelocity.svg" />
          <p>速度</p>
        </div>
        <div className="categoryOneEach">
          <img src="./src/images/categoryRecovery.svg" />
          <p>回復</p>
        </div>
        <div className="categoryOneEach">
          <img src="./src/images/categoryDebuff.svg" />
          <p>デバフ</p>
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
