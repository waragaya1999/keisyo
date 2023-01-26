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
            <img src={detail.image.url} className="detailImg" />
            <div>{detail.name}</div>
            <div>{detail.body}</div>
          </div>
          <footer>©ケイショウコユウ All Rights Reserved.</footer>
        </div>
      </div>
    </>
  )
}
