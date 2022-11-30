import { useEffect } from "react"
import { CategoryDto } from "../../types/CategoryDto"
import { LocationDto } from "../../types/LocationDto"
import { MileageDto } from "../../types/MileageDto"
import { ResponseDto } from "../../types/ResponseDto"

type Props = {
  getList: () => void
  b: ResponseDto[]
  categoryDto: CategoryDto
  mileageDto: MileageDto
  locationDto: LocationDto
}

export const KeisyoPresenter: React.FC<Props> = (props) => {
  const { getList, b, categoryDto, mileageDto, locationDto } = props
  useEffect(() => {
    getList()
  }, [categoryDto, mileageDto, locationDto])

  return (
    <ul>
      {b.map((value, i) => {
        return (
          <li key={i}>
            <div>
              <img src={value.image.url} />
            </div>
            <p>{value.name}</p>
          </li>
        )
      })}
    </ul>
  )
}
