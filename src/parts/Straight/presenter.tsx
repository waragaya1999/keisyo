import { Straight } from "./container"

type Props = React.ComponentProps<typeof Straight>

export const StraightPresenter: React.FC<Props> = (props) => {
  const { locations, switchList } = props
  return (
    <div
      className="locationOneEach"
      onClick={() => {
        switchList("", "", "straight")
      }}
    >
      {!locations.includes("straight") ? (
        <>
          <img
            src="./src/images/locationStraightGray.svg"
            className="escCloseModal"
          />
          <p className="escCloseModal">直線</p>
        </>
      ) : (
        <>
          <img
            src="./src/images/locationStraight.svg"
            className="escCloseModal"
          />
          <p className="escCloseModal" style={{ color: "#F4A02F" }}>
            直線
          </p>
        </>
      )}
    </div>
  )
}
