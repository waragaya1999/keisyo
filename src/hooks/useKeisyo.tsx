import { useState } from "react"
import axios from "axios"
import { CategoryDto } from "../types/CategoryDto"
import { LocationDto } from "../types/LocationDto"
import { MileageDto } from "../types/MileageDto"

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
    middle: false,
  })
  const [locationDto, setLocationDto] = useState<LocationDto>({
    straight: false,
    corner: false,
    specific: false,
    unconditional: false,
  })
  const [url, setUrl] = useState("https://umakoyuu.microcms.io/api/v1/keisyo?")

  const getList = async () => {
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
      case "middle":
        xx = mileageDto.middle
        break
      default:
        break
    }
    return xx
  }

  const handleLocation = async (loc: string) => {
    let xx = false
    switch (loc) {
      case "straight":
        xx = locationDto.straight
        break
      case "corner":
        xx = locationDto.corner
        break
      case "specific":
        xx = locationDto.specific
        break
      case "unconditional":
        xx = locationDto.unconditional
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

  const handleUrlLocation = (loc: string, xx: boolean) => {
    if (!xx) {
      if (/filters/.test(url)) {
        setUrl(`${url + "[and]location[contains]" + loc}`)
      } else {
        setUrl(`${url + "filters=location[contains]" + loc}`)
      }
      setLocationDto({
        ...locationDto,
        [loc]: true,
      })
    } else {
      if (/\[and\]/.test(url)) {
        setUrl(
          `${url
            .replace(`[and]location[contains]${loc}`, "")
            .replace(`location[contains]${loc}[and]`, "")}`,
        )
      } else {
        setUrl(`${url.replace(`filters=location[contains]${loc}`, "")}`)
      }
      setLocationDto({
        ...locationDto,
        [loc]: false,
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

  const switchLocation = async (loc: string) => {
    await handleLocation(loc).then((xx) => {
      handleUrlLocation(loc, xx)
    })
  }

  return {
    getList,
    b,
    categoryDto,
    mileageDto,
    locationDto,
    switchCategory,
    switchMileage,
    switchLocation,
  } as const
}
