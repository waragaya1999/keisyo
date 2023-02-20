import { useNavigate } from "react-router-dom"
import { FilterList } from "./container"

type Props = Omit<
  React.ComponentProps<typeof FilterList>,
  "storedCats" | "storedMils" | "storedLocs" | "determineScrollBar"
>

export const FilterListPresenter: React.FC<Props> = (props) => {
  const {
    filterList,
    isLoaded,
    scrollBarMargin,
    scrollBarHeight,
    scrollHandler,
    offset,
    scrollBarActive,
    mouseDownScrollBar,
    mouseUpScrollBar,
    moveThumb,
    scrollBarThumbY,
  } = props
  const navigate = useNavigate()

  return (
    <div className="filteredList">
      <div
        className="scrollable"
        style={{
          marginRight: `-${scrollBarMargin}px`,
          paddingRight: `${scrollBarMargin}px`,
        }}
        onScroll={scrollHandler}
      >
        <ul className="filteredUl">
          {isLoaded === false ? (
            <h1>読み込み中・・・</h1>
          ) : filterList.length === 0 ? (
            <h1>見つかりませんでした</h1>
          ) : (
            filterList.map((value, i) => {
              return (
                <li
                  key={i}
                  onClick={() =>
                    navigate(`/detail/${value.id}`, {
                      state: { detail: value },
                    })
                  }
                >
                  <div className="listImg">
                    <img src={value.image.url} />
                  </div>
                  <div className="listText">
                    <p className="skillName">{value.name}</p>
                    <hr />
                    <div className="effectQuantity">
                      {value.amountOfVelocity && (
                        <p>速度&nbsp;{value.amountOfVelocity}m/s</p>
                      )}
                      {value.amountOfAcceleration &&
                        (value.amountOfVelocity ? (
                          <p>&nbsp;加速&nbsp;{value.amountOfAcceleration}m/s</p>
                        ) : (
                          <p>加速&nbsp;{value.amountOfAcceleration}m/s</p>
                        ))}
                      {value.amountOfDeVelocity &&
                        (value.amountOfVelocity ||
                        value.amountOfAcceleration ? (
                          <p>
                            &nbsp;速度減衰&nbsp;{value.amountOfDeVelocity}m/s
                          </p>
                        ) : (
                          <p>速度減衰&nbsp;{value.amountOfDeVelocity}m/s</p>
                        ))}
                      {value.amountOfStamina &&
                        (value.amountOfVelocity ||
                        value.amountOfAcceleration ||
                        value.amountOfDeVelocity ? (
                          value.amountOfStamina > 0 ? (
                            <p>
                              &nbsp;持久力&nbsp;{value.amountOfStamina}
                              %回復
                            </p>
                          ) : (
                            <p>
                              &nbsp;持久力&nbsp;{value.amountOfStamina}
                              m/s減少
                            </p>
                          )
                        ) : value.amountOfStamina > 0 ? (
                          <p>持久力&nbsp;{value.amountOfStamina}%回復</p>
                        ) : (
                          <p>持久力&nbsp;{value.amountOfStamina}m/s減少</p>
                        ))}
                      {(value.amountOfVelocity || value.amountOfAcceleration) &&
                        value.duration && <p>&nbsp;×&nbsp;{value.duration}s</p>}
                    </div>
                  </div>
                </li>
              )
            })
          )}
        </ul>
      </div>
      <div className="scrollBar">
        <div
          className="scrollBarThumb"
          style={{
            height: scrollBarHeight,
            maxHeight: document.querySelector(".scrollBar")?.clientHeight,
            transform: `translateY(${offset}px)`,
          }}
        ></div>
      </div>
    </div>
  )
}
