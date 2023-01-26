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
          <img
            src="./src/images/categoryRecoveryGray.svg"
            className="escCloseModal"
          />
          <p className="escCloseModal">回復</p>
        </>
      ) : (
        <>
          <img
            src="./src/images/categoryRecovery.svg"
            className="escCloseModal"
          />
          <p className="escCloseModal" style={{ color: "#F4A02F" }}>
            回復
          </p>
        </>
      )}
    </div>
  )
}
