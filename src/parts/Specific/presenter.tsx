import { Specific } from "./container"

type Props = React.ComponentProps<typeof Specific>

export const SpecificPresenter: React.FC<Props> = (props) => {
  const { storedLocs, switchList } = props
  return (
    <div
      className="locationOneEach"
      onClick={() => {
        switchList("", "", "specific")
      }}
    >
      {!storedLocs.includes("specific") ? (
        <>
          <img src="https://uma-keisyo.com/images/locationSpecificGray.svg" />
          <p>距離</p>
        </>
      ) : (
        <>
          <img src="https://uma-keisyo.com/images/locationSpecific.svg" />
          <p style={{ color: "#F4A02F" }}>距離</p>
        </>
      )}
    </div>
  )
}
