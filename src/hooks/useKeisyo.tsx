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

  const switchCategory = (cat: string) => {
    switch (cat) {
      case "a":
        if (!categoryDto.acceleration) {
          if (
            !categoryDto.velocity &&
            !categoryDto.recovery &&
            !categoryDto.debuff
          ) {
            setUrl(`${url + "filters=category[contains]加速"}`)
          } else {
            setUrl(`${url + "[and]category[contains]加速"}`)
          }
          setCategoryDto({
            ...categoryDto,
            acceleration: true,
          })
        } else {
          if (
            !categoryDto.velocity &&
            !categoryDto.recovery &&
            !categoryDto.debuff
          ) {
            setUrl(`${url.replace("filters=category[contains]加速", "")}`)
          } else {
            setUrl(
              `${url
                .replace("[and]category[contains]加速", "")
                .replace("category[contains]加速[and]", "")}`,
            )
          }
          setCategoryDto({
            ...categoryDto,
            acceleration: false,
          })
        }
        break
      case "v":
        if (!categoryDto.velocity) {
          if (
            !categoryDto.acceleration &&
            !categoryDto.recovery &&
            !categoryDto.debuff
          ) {
            setUrl(`${url + "filters=category[contains]速度"}`)
          } else {
            setUrl(`${url + "[and]category[contains]速度"}`)
          }
          setCategoryDto({
            ...categoryDto,
            velocity: true,
          })
        } else {
          if (
            !categoryDto.acceleration &&
            !categoryDto.recovery &&
            !categoryDto.debuff
          ) {
            setUrl(`${url.replace("filters=category[contains]速度", "")}`)
          } else {
            setUrl(
              `${url
                .replace("[and]category[contains]速度", "")
                .replace("category[contains]速度[and]", "")}`,
            )
          }
          setCategoryDto({
            ...categoryDto,
            velocity: false,
          })
        }
        break
      case "r":
        if (!categoryDto.recovery) {
          if (
            !categoryDto.acceleration &&
            !categoryDto.velocity &&
            !categoryDto.debuff
          ) {
            setUrl(`${url + "filters=category[contains]回復"}`)
          } else {
            setUrl(`${url + "[and]category[contains]回復"}`)
          }
          setCategoryDto({
            ...categoryDto,
            recovery: true,
          })
        } else {
          if (
            !categoryDto.acceleration &&
            !categoryDto.velocity &&
            !categoryDto.debuff
          ) {
            setUrl(`${url.replace("filters=category[contains]回復", "")}`)
          } else {
            setUrl(
              `${url
                .replace("[and]category[contains]回復", "")
                .replace("category[contains]回復[and]", "")}`,
            )
          }
          setCategoryDto({
            ...categoryDto,
            recovery: false,
          })
        }
        break
      case "d":
        if (!categoryDto.debuff) {
          if (
            !categoryDto.acceleration &&
            !categoryDto.velocity &&
            !categoryDto.recovery
          ) {
            setUrl(`${url + "filters=category[contains]デバフ"}`)
          } else {
            setUrl(`${url + "[and]category[contains]デバフ"}`)
          }
          setCategoryDto({
            ...categoryDto,
            debuff: true,
          })
        } else {
          if (
            !categoryDto.acceleration &&
            !categoryDto.velocity &&
            !categoryDto.recovery
          ) {
            setUrl(`${url.replace("filters=category[contains]デバフ", "")}`)
          } else {
            setUrl(
              `${url
                .replace("[and]category[contains]デバフ", "")
                .replace("category[contains]デバフ[and]", "")}`,
            )
          }
          setCategoryDto({
            ...categoryDto,
            debuff: false,
          })
        }
        break
      default:
        break
    }
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
