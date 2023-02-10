import { Middle } from "./container"

type Props = React.ComponentProps<typeof Middle>

export const MiddlePresenter: React.FC<Props> = (props) => {
  const { storedMils, switchList } = props
  return (
    <div
      className="mileageOneEach"
      onClick={() => {
        switchList("", "middle", "")
      }}
    >
      {!storedMils.includes("middle") ? (
        <>
          <img src="https://uma-keisyo.com/images/mileageMiddleGray.svg" />
          <p>中盤</p>
        </>
      ) : (
        <>
          <img src="https://uma-keisyo.com/images/mileageMiddle.svg" />
          <p style={{ color: "#F4A02F" }}>中盤</p>
        </>
      )}
    </div>
  )
}
