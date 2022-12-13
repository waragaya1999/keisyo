import React from "react"
import { FilterList } from "./container"

type Props = Omit<React.ComponentProps<typeof FilterList>, "getList">

export const FilterListPresenter: React.FC<Props> = (props) => {
  const { filterList, isLoaded } = props

  return (
    <ul>
      {isLoaded === false ? (
        <h1>読み込み中・・・</h1>
      ) : filterList.length === 0 ? (
        <h1>見つかりませんでした</h1>
      ) : (
        filterList.map((value, i) => {
          return (
            <li key={i}>
              <div className="bb">
                <img src={value.image.url} />
              </div>
              <div className="aa">
                <p>{value.name}</p>
                {value.amountOfVelocity && (
                  <> 速度 {value.amountOfVelocity}m/s</>
                )}
                {value.amountOfAcceleration && (
                  <> 加速 {value.amountOfAcceleration}m/s</>
                )}
                {(value.amountOfVelocity || value.amountOfAcceleration) &&
                  value.duration && <> × {value.duration}s</>}
                {value.amountOfStamina &&
                  (value.amountOfStamina > 0 ? (
                    <> 持久力 {value.amountOfStamina}m/s 回復</>
                  ) : (
                    <> 持久力 {value.amountOfStamina}m/s 減少</>
                  ))}
              </div>
            </li>
          )
        })
      )}
    </ul>
  )
}
