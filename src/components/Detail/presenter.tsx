import { Detail } from "./container"

type Props = React.ComponentProps<typeof Detail>

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
