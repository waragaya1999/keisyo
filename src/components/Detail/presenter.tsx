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
  return (
    <>
      {console.log(detail)}
      <div className="wrap">
        <div className="bg">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <header className="header">
              <img src="../src/images/logo.svg" className="logo" />
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
                <div className="detailBodyBasic">
                  <p>{detail.name}</p>
                  <p>{detail.body}</p>
                </div>
                <div className="detailBodyTerms">
                  {detail.mileage == "finalStage" ? (
                    <p>終盤</p>
                  ) : detail.mileage == "final" ? (
                    <p>最終</p>
                  ) : detail.mileage == "secondHalf" ? (
                    <p>後半</p>
                  ) : (
                    <p>中盤</p>
                  )}
                  {detail.location == "straight" ? (
                    <p>直線</p>
                  ) : detail.location == "corner" ? (
                    <p>コーナー</p>
                  ) : detail.location == "unconditional" ? (
                    <p>無条件</p>
                  ) : (
                    <p>特定距離</p>
                  )}
                  <p>{detail.trigger}</p>
                  {detail.additional ? <p>{detail.additional}</p> : <p>-</p>}
                </div>
                <div className="detailBodyEffects">
                  {detail.amountOfVelocity ? (
                    <p>{detail.amountOfVelocity}m/s</p>
                  ) : (
                    <p>-</p>
                  )}
                  {detail.amountOfAcceleration ? (
                    <p>{detail.amountOfAcceleration}m/s^2</p>
                  ) : (
                    <p>-</p>
                  )}
                  <p>{detail.duration}秒</p>
                </div>
              </div>
            </div>
          </div>
          <footer>©ケイショウコユウ All Rights Reserved.</footer>
        </div>
      </div>
    </>
  )
}
