import { Unconditional } from "./container"

type Props = React.ComponentProps<typeof Unconditional>

export const UnconditionalPresenter: React.FC<Props> = (props) => {
  const { storedLocs, switchList } = props
  return (
    <div
      className="locationOneEach"
      onClick={() => {
        switchList("", "", "unconditional")
      }}
    >
      {!storedLocs.includes("unconditional") ? (
        <>
          <img src="https://uma-keisyo.com/images/locationUnconditionalGray.svg" />
          <p>無条件</p>
        </>
      ) : (
        <>
          <img src="https://uma-keisyo.com/images/locationUnconditional.svg" />
          <p style={{ color: "#F4A02F" }}>無条件</p>
        </>
      )}
    </div>
  )
}
