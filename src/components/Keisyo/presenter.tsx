import { useEffect } from "react"
import { ResponseDto } from "../../types/ResponseDto"

type Props = {
  getList: () => void
  filterList: ResponseDto[]
}

export const KeisyoPresenter: React.FC<Props> = (props) => {
  const { getList, filterList } = props
  useEffect(() => {
    getList()
  }, [])

  return (
    <ul>
      {filterList.map((value, i) => {
        return (
          <li key={i}>
            <div className="bb">
              <img src={value.image.url} />
            </div>
            <div className="aa">
              <p>{value.name}</p>
              {value.category.toString() == "acceleration" && <>加速 XXm/s^2</>}
              {value.category.toString() == "velocity" && <>速度</>}
              {value.category.toString() == "velocity,acceleration" && (
                <>加速速度</>
              )}
            </div>
          </li>
        )
      })}
    </ul>
  )
}
