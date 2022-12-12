import { Debuff } from "./container"

type Props = React.ComponentProps<typeof Debuff>

export const DebuffPresenter: React.FC<Props> = (props) => {
  const { categories, switchList } = props
  return (
    <div
      className="categoryOneEach"
      onClick={() => {
        switchList("debuff", "", "")
      }}
    >
      {!categories.includes("debuff") ? (
        <>
          <img src="./src/images/categoryDebuffGray.svg" />
          <p>デバフ</p>
        </>
      ) : (
        <>
          <img src="./src/images/categoryDebuff.svg" />
          <p style={{ color: "#F4A02F" }}>デバフ</p>
        </>
      )}
    </div>
  )
}