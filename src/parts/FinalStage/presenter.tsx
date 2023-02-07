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
          <img src="https://uma-keisyo.com/images/mileageFinalStageGray.svg" />
          <p>終盤</p>
        </>
      ) : (
        <>
          <img src="https://uma-keisyo.com/images/mileageFinalStage.svg" />
          <p style={{ color: "#F4A02F" }}>終盤</p>
        </>
      )}
    </div>
  )
}
