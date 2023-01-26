import { Middle } from "./container"

type Props = React.ComponentProps<typeof Middle>

export const MiddlePresenter: React.FC<Props> = (props) => {
  const { mileages, switchList } = props
  return (
    <div
      className="mileageOneEach"
      onClick={() => {
        switchList("", "middle", "")
      }}
    >
      {!mileages.includes("middle") ? (
        <>
          <img
            src="./src/images/mileageMiddleGray.svg"
            className="escCloseModal"
          />
          <p className="escCloseModal">中盤</p>
        </>
      ) : (
        <>
          <img src="./src/images/mileageMiddle.svg" className="escCloseModal" />
          <p className="escCloseModal" style={{ color: "#F4A02F" }}>
            中盤
          </p>
        </>
      )}
    </div>
  )
}
