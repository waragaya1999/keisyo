import axios, { AxiosResponse } from "axios"
import { useState } from "react"
import "./App.css"
import { ResponseDto } from "./types/ResponseDto"

export const Test: React.FC = () => {
  const [b, setB] = useState([""])
  const c = [1, 2, 3]
  axios
    .get("https://umakoyuu.microcms.io/api/v1/keisyo", {
      headers: {
        "X-MICROCMS-API-KEY": "cc666066ab2d480dad1bb809bb2c2314fc79",
      },
      params: {
        key: 0,
      },
    })
    .then((res: AxiosResponse<ResponseDto>) => {
      const a = res.data.contents
      setB(a)
      console.log(a)
    })
  return (
    <ul>
      {b.map((value, i) => (
        <li key={i}>
          <img src={value.image.url} />
          {value.name}
          {/* {console.log(value.image.url)} */}
        </li>
      ))}
    </ul>
  )
}
