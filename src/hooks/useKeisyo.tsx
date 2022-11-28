import { useState } from "react"
import axios from "axios"
import { CategoryDto } from "../types/CategoryDto"
import { MileageDto } from "../types/mileageDto"

export const useKeisyo = () => {
  const [b, setB] = useState([])
  const [categoryDto, setCategoryDto] = useState<CategoryDto>({
    acceleration: false,
    velocity: false,
    recovery: false,
    debuff: false,
  })
  const [mileageDto, setMileageDto] = useState<MileageDto>({
    finalStage: false,
    final: false,
    middle: false,
    other: false,
  })
  const [locationStraight, setLocationStraight] = useState<boolean>(false)
  const [locationCorner, setLocationCorner] = useState<boolean>(false)
  const [locationUnconditional, setLocationUnconditional] =
    useState<boolean>(false)
  const [url, setUrl] = useState("https://umakoyuu.microcms.io/api/v1/keisyo?")
  const [categoryName, setCategoryName] = useState<boolean>()
  const [categoryValue, setCategoryValue] = useState<string>()

  const getFunc = async () => {
    await axios
      .get(url, {
        headers: {
          "X-MICROCMS-API-KEY": "cc666066ab2d480dad1bb809bb2c2314fc79",
        },
        params: {
          limit: 100,
        },
      })
      .then((res) => {
        setB(res.data.contents)
        console.log(/and/.test(url))
        console.log(url)
      })
  }

  const changeCategory = (cat: string) => {
    if (cat === "a") {
      setCategoryName(() => categoryDto.acceleration)
      setCategoryValue(() => "加速")
    }
  }

  const aaa = () => {
    if (!categoryName) {
      if (/filters/.test(url)) {
        setUrl(`${url + "[and]category[contains]" + categoryValue}`)
      } else {
        setUrl(`${url + "filters=category[contains]" + categoryValue}`)
      }
      setCategoryDto({
        ...categoryDto,
        acceleration: true,
      })
    } else {
      if (/and/.test(url)) {
        setUrl(
          `${url
            .replace(`[and]category[contains]${categoryValue}`, "")
            .replace(`category[contains]${categoryValue}[and]`, "")}`,
        )
      } else {
        setUrl(
          `${url.replace(`filters=category[contains]${categoryValue}`, "")}`,
        )
      }
      setCategoryDto({
        ...categoryDto,
        acceleration: false,
      })
    }
  }

  const switchCategory = async (cat: string) => {
    await changeCategory(cat)
    aaa()
  }

  const switchMileage = (mil: string) => {
    switch (mil) {
      case "s":
        if (!mileageDto.finalStage) {
          if (!mileageDto.final && !mileageDto.middle && !mileageDto.other) {
            setUrl(`${url + "filters=mileage[contains]終盤"}`)
          } else {
            setUrl(`${url + "[and]mileage[contains]終盤"}`)
          }
          setMileageDto({
            ...mileageDto,
            finalStage: true,
          })
        } else {
          if (!mileageDto.final && !mileageDto.middle && !mileageDto.other) {
            setUrl(`${url.replace("filters=mileage[contains]終盤", "")}`)
          } else {
            setUrl(
              `${url
                .replace("[and]mileage[contains]終盤", "")
                .replace("mileage[contains]終盤[and]", "")}`,
            )
          }
          setMileageDto({
            ...mileageDto,
            finalStage: false,
          })
        }
        break
      default:
        break
    }
  }
  return {
    getFunc,
    b,
    categoryDto,
    mileageDto,
    switchCategory,
    switchMileage,
    locationStraight,
    locationCorner,
    locationUnconditional,
  } as const
}
