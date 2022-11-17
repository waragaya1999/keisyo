import { useEffect } from "react"
import "./App.css"
import { useKeisyo } from "./hooks/useKeisyo"

export const Test: React.FC = () => {
  const { func, b } = useKeisyo()
  useEffect(() => {
    func()
  }, [])

  return (
    <>
      {b.map((value, i) => {
        return (
          <li key={i}>
            <img src={value.image.url} />
            {value.name}
          </li>
        )
      })}
    </>
  )
}
