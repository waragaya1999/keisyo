import { Acceleration } from "./container"

type Props = React.ComponentProps<typeof Acceleration>

export const AccelerationPresenter: React.FC<Props> = (props) => {
  const { storedCats, switchList } = props
  return (
    <div
      className="categoryOneEach"
      onClick={() => {
        switchList("acceleration", "", "")
      }}
    >
      {!storedCats.includes("acceleration") ? (
        <>
          <img src="https://uma-keisyo.com/images/categoryAccelerationGray.svg" />
          <p>加速</p>
        </>
      ) : (
        <>
          <img src="https://uma-keisyo.com/images/categoryAcceleration.svg" />
          <p style={{ color: "#F4A02F" }}>加速</p>
        </>
      )}
    </div>
  )
}
