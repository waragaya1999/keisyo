import { Recovery } from "./container"

type Props = React.ComponentProps<typeof Recovery>

export const RecoveryPresenter: React.FC<Props> = (props) => {
  const { categories, switchList } = props
  return (
    <div
      className="categoryOneEach"
      onClick={() => {
        switchList("recovery", "", "")
      }}
    >
      {!categories.includes("recovery") ? (
        <>
          <img src="https://uma-keisyo.com/images/categoryRecoveryGray.svg" />
          <p>回復</p>
        </>
      ) : (
        <>
          <img src="https://uma-keisyo.com/images/categoryRecovery.svg" />
          <p style={{ color: "#F4A02F" }}>回復</p>
        </>
      )}
    </div>
  )
}
