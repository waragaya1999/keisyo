import { Debuff } from "./container"

type Props = React.ComponentProps<typeof Debuff>

export const DebuffPresenter: React.FC<Props> = (props) => {
  const { storedCats, switchList } = props
  return (
    <div
      className="categoryOneEach"
      onClick={() => {
        switchList("debuff", "", "")
      }}
    >
      {!storedCats.includes("debuff") ? (
        <>
          <img src="https://uma-keisyo.com/images/categoryDebuffGray.svg" />
          <p>デバフ</p>
        </>
      ) : (
        <>
          <img src="https://uma-keisyo.com/images/categoryDebuff.svg" />
          <p style={{ color: "#F4A02F" }}>デバフ</p>
        </>
      )}
    </div>
  )
}
