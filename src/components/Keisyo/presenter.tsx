import { useEffect } from "react"
import { CategoryDto } from "../../types/CategoryDto"
import { MileageDto } from "../../types/mileageDto"
import { ResponseDto } from "../../types/ResponseDto"

type Props = {
  getFunc: () => void
  b: ResponseDto[]
  categoryDto: CategoryDto
  mileageDto: MileageDto
}

export const KeisyoPresenter: React.FC<Props> = (props) => {
  const { getFunc, b, categoryDto, mileageDto } = props
  useEffect(() => {
    getFunc()
  }, [categoryDto, mileageDto])

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
