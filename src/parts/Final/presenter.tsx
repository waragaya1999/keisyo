import { Final } from "./container"

type Props = React.ComponentProps<typeof Final>

export const FinalPresenter: React.FC<Props> = (props) => {
  const { mileages, switchList } = props
  return (
    <div
      className="mileageOneEach"
      onClick={() => {
        switchList("", "final", "")
      }}
    >
      {!mileages.includes("final") ? (
        <>
          <img src="./src/images/mileageFinalGray.svg" />
          <p>最終</p>
        </>
      ) : (
        <>
          <img src="./src/images/mileageFinal.svg" />
          <p style={{ color: "#F4A02F" }}>最終</p>
        </>
      )}
    </div>
  )
}