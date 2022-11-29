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
        console.log(url)
      })
  }

  const changeCategory = async (cat: string) => {
    let xx = false
    if (cat === "加速") {
      xx = categoryDto.acceleration
    } else if (cat === "速度") {
      xx = categoryDto.velocity
    } else if (cat === "回復") {
      xx = categoryDto.recovery
    } else {
      xx = categoryDto.debuff
    }
    return xx
  }

  const bbb = (cat: string) => {
    let yy = categoryDto
    if (cat === "加速") {
      yy = {
        ...categoryDto,
        acceleration: !categoryDto.acceleration,
      }
    } else if (cat === "速度") {
      yy = {
        ...categoryDto,
        acceleration: !categoryDto.acceleration,
      }
    } else if (cat === "回復") {
      yy = {
        ...categoryDto,
        acceleration: !categoryDto.acceleration,
      }
    } else {
      yy = {
        ...categoryDto,
        acceleration: !categoryDto.acceleration,
      }
    }
    return yy
  }

  const aaa = (cat: string, xx: boolean) => {
    if (!xx) {
      if (/filters/.test(url)) {
        console.log("true")
        setUrl(`${url + "[and]category[contains]" + cat}`)
      } else {
        setUrl(`${url + "filters=category[contains]" + cat}`)
      }
      setCategoryDto({
        ...categoryDto,
        acceleration: true,
      })
    } else {
      console.log("false")
      if (/and/.test(url)) {
        setUrl(
          `${url
            .replace(`[and]category[contains]${cat}`, "")
            .replace(`category[contains]${cat}[and]`, "")}`,
        )
      } else {
        setUrl(`${url.replace(`filters=category[contains]${cat}`, "")}`)
      }
      setCategoryDto({
        ...categoryDto,
        acceleration: false,
      })
    }
  }

  const switchCategory = async (cat: string) => {
    await changeCategory(cat).then((xx) => {
      aaa(cat, xx)
    })
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
