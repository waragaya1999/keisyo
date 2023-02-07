import { SecondHalf } from "./container"

type Props = React.ComponentProps<typeof SecondHalf>

export const SecondHalfPresenter: React.FC<Props> = (props) => {
  const { mileages, switchList } = props
  return (
    <div
      className="mileageOneEach"
      onClick={() => {
        switchList("", "secondHalf", "")
      }}
    >
      {!mileages.includes("secondHalf") ? (
        <>
          <img src="https://uma-keisyo.com/images/mileageSecondHalfGray.svg" />
          <p>後半</p>
        </>
      ) : (
        <>
          <img src="https://uma-keisyo.com/images/mileageSecondHalf.svg" />
          <p style={{ color: "#F4A02F" }}>後半</p>
        </>
      )}
    </div>
  )
}
