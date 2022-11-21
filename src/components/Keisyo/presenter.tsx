import { useEffect } from "react"
import { useKeisyo } from "../../hooks/useKeisyo"
import { ResponseDto } from "../../types/ResponseDto"

export const KeisyoPresenter: React.FC = () => {
  const { getFunc, b } = useKeisyo()
  useEffect(() => {
    getFunc()
  }, [])

  return (
    <ul>
      {b.map((value: ResponseDto, i) => {
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
