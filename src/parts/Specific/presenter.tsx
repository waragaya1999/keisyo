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
            src="https://uma-keisyo.com/images/locationSpecificGray.svg"
            className="escCloseModal"
          />
          <p className="escCloseModal">距離</p>
        </>
      ) : (
        <>
          <img
            src="https://uma-keisyo.com/images/locationSpecific.svg"
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
