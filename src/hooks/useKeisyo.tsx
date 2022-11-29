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
    secondHalf: false,
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
        console.log(JSON.stringify(mileageDto, null, 2))
      })
  }

  const handleCategory = async (cat: string) => {
    let xx = false
    switch (cat) {
      case "acceleration":
        xx = categoryDto.acceleration
        break
      case "velocity":
        xx = categoryDto.velocity
        break
      case "recovery":
        xx = categoryDto.recovery
        break
      case "debuff":
        xx = categoryDto.debuff
        break
      default:
        break
    }
    return xx
  }

  const handleMileage = async (mil: string) => {
    let xx = false
    switch (mil) {
      case "finalStage":
        xx = mileageDto.finalStage
        break
      case "final":
        xx = mileageDto.final
        break
      case "secondHalf":
        xx = mileageDto.secondHalf
        break
      case "other":
        xx = mileageDto.other
        break
      default:
        break
    }
    return xx
  }

  const handleUrlCategory = (cat: string, xx: boolean) => {
    if (!xx) {
      if (/filters/.test(url)) {
        setUrl(`${url + "[and]category[contains]" + cat}`)
      } else {
        setUrl(`${url + "filters=category[contains]" + cat}`)
      }
      setCategoryDto({
        ...categoryDto,
        [cat]: true,
      })
    } else {
      if (/\[and\]/.test(url)) {
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
        [cat]: false,
      })
    }
  }

  const handleUrlMileage = (mil: string, xx: boolean) => {
    if (!xx) {
      if (/filters/.test(url)) {
        setUrl(`${url + "[and]mileage[contains]" + mil}`)
      } else {
        setUrl(`${url + "filters=mileage[contains]" + mil}`)
      }
      setMileageDto({
        ...mileageDto,
        [mil]: true,
      })
    } else {
      if (/\[and\]/.test(url)) {
        setUrl(
          `${url
            .replace(`[and]mileage[contains]${mil}`, "")
            .replace(`mileage[contains]${mil}[and]`, "")}`,
        )
      } else {
        setUrl(`${url.replace(`filters=mileage[contains]${mil}`, "")}`)
      }
      setMileageDto({
        ...mileageDto,
        [mil]: false,
      })
    }
  }

  const switchCategory = async (cat: string) => {
    await handleCategory(cat).then((xx) => {
      handleUrlCategory(cat, xx)
    })
  }

  const switchMileage = async (mil: string) => {
    await handleMileage(mil).then((xx) => {
      handleUrlMileage(mil, xx)
    })
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
