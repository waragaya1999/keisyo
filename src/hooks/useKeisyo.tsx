import axios, { AxiosResponse } from "axios"
import { useState } from "react"
import { ResponseDto } from "../types/ResponseDto"

export const useKeisyo = () => {
  const [b, setB] = useState([])
  const func = async () => {
    await axios
      .get("https://umakoyuu.microcms.io/api/v1/keisyo", {
        headers: {
          "X-MICROCMS-API-KEY": "cc666066ab2d480dad1bb809bb2c2314fc79",
        },
        params: {
          limit: 100,
        },
      })
      .then((res: AxiosResponse<ResponseDto>) => {
        const a = res.data.contents
        setB(res.data.contents)
        console.log(a)
      })
  }

  return { func, b, setB } as const
}
