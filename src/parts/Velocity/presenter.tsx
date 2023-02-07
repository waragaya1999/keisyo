import { Velocity } from "./container"

type Props = React.ComponentProps<typeof Velocity>

export const VelocityPresenter: React.FC<Props> = (props) => {
  const { categories, switchList } = props
  return (
    <div
      className="categoryOneEach"
      onClick={() => {
        switchList("velocity", "", "")
      }}
    >
      {!categories.includes("velocity") ? (
        <>
          <img src="https://uma-keisyo.com/images/categoryVelocityGray.svg" />
          <p>速度</p>
        </>
      ) : (
        <>
          <img src="https://uma-keisyo.com/images/categoryVelocity.svg" />
          <p style={{ color: "#F4A02F" }}>速度</p>
        </>
      )}
    </div>
  )
}
