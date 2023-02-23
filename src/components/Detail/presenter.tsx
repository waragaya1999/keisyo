import { useNavigate } from "react-router-dom"

type Props = {
  detail: {
    id: string
    name: string
    body: string
    image: {
      url: string
    }
    mileage: string
    category: string[]
    location: string
    trigger: string
    additional: string
    amountOfVelocity: number
    amountOfDeVelocity: number
    amountOfAcceleration: number
    amountOfStamina: number
    duration: number
    contents: []
  }
}

export const DetailPresenter: React.FC<Props> = (props) => {
  const { detail } = props
  const navigate = useNavigate()
  return (
    <>
      <div className="wrap">
        <div className="bg" style={{ minHeight: window.innerHeight }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <header className="header">
              <img
                src="https://uma-keisyo.com/images/logo.svg"
                className="logo"
                onClick={() => navigate("/")}
              />
            </header>
            <div className="detail">
              <div className="detailCard">
                <img src={detail.image.url} className="detailCardImg" />
                <div className="detailCardText">
                  <p>{detail.name}</p>
                  <hr />
                  <p className="detailCardBody">{detail.body}</p>
                </div>
              </div>
              <div className="detailBody">
                <div className="detailBodyLowerRow">
                  <div className="detailBodyTerms">
                    <h3>発動条件</h3>
                    <hr />
                    <div className="detailBodyMileage detailBodyFlex">
                      <p className="detailBodyLabel">発動距離</p>
                      {detail.mileage == "finalStage" ? (
                        <p className="detailBodyText">終盤</p>
                      ) : detail.mileage == "final" ? (
                        <p className="detailBodyText">最終</p>
                      ) : detail.mileage == "secondHalf" ? (
                        <p className="detailBodyText">後半</p>
                      ) : (
                        <p className="detailBodyText">中盤</p>
                      )}
                    </div>
                    <div className="detailBodyLocation detailBodyFlex">
                      <p className="detailBodyLabel">発動区画</p>
                      {detail.location == "straight" ? (
                        <p className="detailBodyText">直線</p>
                      ) : detail.location == "corner" ? (
                        <p className="detailBodyText">コーナー</p>
                      ) : detail.location == "unconditional" ? (
                        <p className="detailBodyText">無条件</p>
                      ) : (
                        <p className="detailBodyText">特定距離</p>
                      )}
                    </div>
                    <div className="detailBodyTrigger detailBodyFlex">
                      <p className="detailBodyLabel">発動順位</p>
                      {detail.trigger.length == 1 ? (
                        <p className="detailBodyText">{detail.trigger}</p>
                      ) : detail.trigger.length == 2 ? (
                        <p className="detailBodyText">
                          {detail.trigger[0]}、{detail.trigger[1]}
                        </p>
                      ) : (
                        <p className="detailBodyText">
                          {detail.trigger[0]}〜
                          {detail.trigger[detail.trigger.length - 1]}
                        </p>
                      )}
                    </div>
                    <div className="detailBodyAdditional detailBodyFlex">
                      <p className="detailBodyLabel">追加条件</p>
                      {detail.additional ? (
                        <p className="detailBodyText">{detail.additional}</p>
                      ) : (
                        <p className="detailBodyText">-</p>
                      )}
                    </div>
                  </div>
                  <div className="detailBodyEffects">
                    <h3>効果量</h3>
                    <hr />
                    <div className="detailBodyAmountOfVelocity detailBodyFlex">
                      <p className="detailBodyLabel">速度効果量</p>
                      {detail.amountOfVelocity ? (
                        <p className="detailBodyText">
                          {detail.amountOfVelocity}m/s
                        </p>
                      ) : (
                        <p className="detailBodyText">-</p>
                      )}
                    </div>
                    <div className="detailBodyAmountOfAcceleration detailBodyFlex">
                      <p className="detailBodyLabel">加速効果量</p>
                      {detail.amountOfAcceleration ? (
                        <p className="detailBodyText">
                          {detail.amountOfAcceleration}m/s^2
                        </p>
                      ) : (
                        <p className="detailBodyText">-</p>
                      )}
                    </div>
                    {detail.amountOfDeVelocity && (
                      <div className="detailBodyAmountOfDeVelocity detailBodyFlex">
                        <p className="detailBodyLabel">速度減衰</p>
                        <p className="detailBodyText">
                          {detail.amountOfDeVelocity}m/s
                        </p>
                      </div>
                    )}
                    {detail.amountOfStamina &&
                      (detail.amountOfStamina > 0 ? (
                        <div className="detailBodyAmountOfStamina detailBodyFlex">
                          <p className="detailBodyLabel">持久力回復</p>
                          <p className="detailBodyText">
                            {detail.amountOfStamina}%
                          </p>
                        </div>
                      ) : (
                        <div className="detailBodyAmountOfStamina detailBodyFlex">
                          <p className="detailBodyLabel">持久力減衰</p>
                          <p className="detailBodyText">
                            {detail.amountOfStamina}%
                          </p>
                        </div>
                      ))}
                    <div className="detailBodyDuration detailBodyFlex">
                      <p className="detailBodyLabel">効果時間</p>
                      <p className="detailBodyText">{detail.duration}秒</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <img
                  src="https://uma-keisyo.com/images/back.svg"
                  className="buttonBack"
                  onClick={() => navigate("/")}
                />
              </div>
            </div>
          </div>
          <footer>©ケイショウチェッカー All Rights Reserved.</footer>
        </div>
      </div>
    </>
  )
}
