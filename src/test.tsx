import { useEffect } from "react"
import "./App.css"
import { useKeisyo } from "./hooks/useKeisyo"
import { ResponseDto } from "./types/ResponseDto"

export const Test: React.FC = () => {
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
