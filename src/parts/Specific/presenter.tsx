import { Specific } from "./container"

type Props = React.ComponentProps<typeof Specific>

export const SpecificPresenter: React.FC<Props> = (props) => {
  const { locations, switchList } = props
  return (
    <div
      className="locationOneEach"
      onClick={() => {
        switchList("", "", "specific")
      }}
    >
      {!locations.includes("specific") ? (
        <>
          <img
            src="./src/images/locationSpecificGray.svg"
            className="escCloseModal"
          />
          <p className="escCloseModal">距離</p>
        </>
      ) : (
        <>
          <img
            src="./src/images/locationSpecific.svg"
            className="escCloseModal"
          />
          <p className="escCloseModal" style={{ color: "#F4A02F" }}>
            距離
          </p>
        </>
      )}
    </div>
  )
}
