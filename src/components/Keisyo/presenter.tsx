import { useEffect } from "react"
import { CategoryDto } from "../../types/CategoryDto"
import { ResponseDto } from "../../types/ResponseDto"

type Props = {
  getFunc: () => void
  b: ResponseDto[]
  categoryDto: CategoryDto
}

export const KeisyoPresenter: React.FC<Props> = (props) => {
  const { getFunc, b, categoryDto } = props
  useEffect(() => {
    getFunc()
  }, [categoryDto])

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
