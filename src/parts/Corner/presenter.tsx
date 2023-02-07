import { Corner } from "./container"

type Props = React.ComponentProps<typeof Corner>

export const CornerPresenter: React.FC<Props> = (props) => {
  const { locations, switchList } = props
  return (
    <div
      className="locationOneEach"
      onClick={() => {
        switchList("", "", "corner")
      }}
    >
      {!locations.includes("corner") ? (
        <>
          <img
            src="https://uma-keisyo.com/images/locationCornerGray.svg"
            className="escCloseModal"
          />
          <p className="escCloseModal">コーナー</p>
        </>
      ) : (
        <>
          <img
            src="https://uma-keisyo.com/images/locationCorner.svg"
            className="escCloseModal"
          />
          <p className="escCloseModal" style={{ color: "#F4A02F" }}>
            コーナー
          </p>
        </>
      )}
    </div>
  )
}
