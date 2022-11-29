import { useEffect } from "react"
import { CategoryDto } from "../../types/CategoryDto"
import { LocationDto } from "../../types/LocationDto"
import { MileageDto } from "../../types/MileageDto"
import { ResponseDto } from "../../types/ResponseDto"

type Props = {
  getFunc: () => void
  b: ResponseDto[]
  categoryDto: CategoryDto
  mileageDto: MileageDto
  locationDto: LocationDto
}

export const KeisyoPresenter: React.FC<Props> = (props) => {
  const { getFunc, b, categoryDto, mileageDto, locationDto } = props
  useEffect(() => {
    getFunc()
  }, [categoryDto, mileageDto, locationDto])

  return (
    <ul>
      {b.map((value, i) => {
        return (
          <li key={i}>
            <img src={value.image.url} />
            <p>{value.name}</p>
          </li>
        )
      })}
    </ul>
  )
}
