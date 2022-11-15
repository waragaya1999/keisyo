import axios from "axios"
import { useState } from "react"
import "./App.css"

export const Test: React.FC = () => {
  const [b, setB] = useState()
  axios
    .get("https://umakoyuu.microcms.io/api/v1/keisyo", {
      headers: {
        "X-MICROCMS-API-KEY": "cc666066ab2d480dad1bb809bb2c2314fc79",
      },
      params: {
        key: 0,
      },
    })
    .then((response) => {
      const a = { ...response.data.contents }
      setB(a[0].name)
      console.log(a[0].name)
    })
  return <h1>{b}</h1>
}
