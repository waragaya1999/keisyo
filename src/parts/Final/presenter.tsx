import { Final } from "./container"

type Props = React.ComponentProps<typeof Final>

export const FinalPresenter: React.FC<Props> = (props) => {
  const { storedMils, switchList } = props
  return (
    <div
      className="mileageOneEach"
      onClick={() => {
        switchList("", "final", "")
      }}
    >
      {!storedMils.includes("final") ? (
        <>
          <img src="https://uma-keisyo.com/images/mileageFinalGray.svg" />
          <p>最終</p>
        </>
      ) : (
        <>
          <img src="https://uma-keisyo.com/images/mileageFinal.svg" />
          <p style={{ color: "#F4A02F" }}>最終</p>
        </>
      )}
    </div>
  )
}
