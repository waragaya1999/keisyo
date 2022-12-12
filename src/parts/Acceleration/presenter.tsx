import { Acceleration } from "./container"

type Props = React.ComponentProps<typeof Acceleration>

export const AccelerationPresenter: React.FC<Props> = (props) => {
  const { categories, switchList } = props
  return (
    <div
      className="categoryOneEach"
      onClick={() => {
        switchList("acceleration", "", "")
      }}
    >
      {!categories.includes("acceleration") ? (
        <>
          <img src="./src/images/categoryAccelerationGray.svg" />
          <p>加速</p>
        </>
      ) : (
        <>
          <img src="./src/images/categoryAcceleration.svg" />
          <p style={{ color: "#F4A02F" }}>加速</p>
        </>
      )}
    </div>
  )
}