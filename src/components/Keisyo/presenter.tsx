import { useEffect } from "react"
import { CategoryDto } from "../../types/CategoryDto"
import { LocationDto } from "../../types/LocationDto"
import { MileageDto } from "../../types/MileageDto"
import { ResponseDto } from "../../types/ResponseDto"

type Props = {
  getList: () => void
  list: ResponseDto[]
  categoryDto: CategoryDto
  mileageDto: MileageDto
  locationDto: LocationDto
}

export const KeisyoPresenter: React.FC<Props> = (props) => {
  const { getList, list, categoryDto, mileageDto, locationDto } = props
  useEffect(() => {
    getList()
  }, [categoryDto, mileageDto, locationDto])

  return (
    <ul>
      {list.map((value, i) => {
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
