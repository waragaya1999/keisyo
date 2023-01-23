import { FinalStage } from "./container"

type Props = React.ComponentProps<typeof FinalStage>

export const FinalStagePresenter: React.FC<Props> = (props) => {
  const { mileages, switchList } = props
  return (
    <div
      className="mileageOneEach"
      onClick={() => {
        switchList("", "finalStage", "")
      }}
    >
      {!mileages.includes("finalStage") ? (
        <>
          <img
            src="./src/images/mileageFinalStageGray.svg"
            className="escCloseModal"
          />
          <p className="escCloseModal">終盤</p>
        </>
      ) : (
        <>
          <img
            src="./src/images/mileageFinalStage.svg"
            className="escCloseModal"
          />
          <p className="escCloseModal" style={{ color: "#F4A02F" }}>
            終盤
          </p>
        </>
      )}
    </div>
  )
}
