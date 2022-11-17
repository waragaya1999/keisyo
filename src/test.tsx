import { useEffect } from "react"
import "./App.css"
import { useKeisyo } from "./hooks/useKeisyo"

export const Test: React.FC = () => {
  const { func, b } = useKeisyo()
  useEffect(() => {
    func()
  }, [])

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
