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
  )
}
