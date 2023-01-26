import { Unconditional } from "./container"

type Props = React.ComponentProps<typeof Unconditional>

export const UnconditionalPresenter: React.FC<Props> = (props) => {
  const { locations, switchList } = props
  return (
    <div
      className="locationOneEach"
      onClick={() => {
        switchList("", "", "unconditional")
      }}
    >
      {!locations.includes("unconditional") ? (
        <>
          <img
            src="./src/images/locationUnconditionalGray.svg"
            className="escCloseModal"
          />
          <p className="escCloseModal">無条件</p>
        </>
      ) : (
        <>
          <img
            src="./src/images/locationUnconditional.svg"
            className="escCloseModal"
          />
          <p className="escCloseModal" style={{ color: "#F4A02F" }}>
            無条件
          </p>
        </>
      )}
    </div>
  )
}
