import { useState } from "react"
import axios from "axios"
import { CategoryDto } from "../types/CategoryDto"
import { LocationDto } from "../types/LocationDto"
import { MileageDto } from "../types/MileageDto"
import { ResponseDto } from "../types/ResponseDto"

export const useKeisyo = () => {
  const [list, setList] = useState<ResponseDto[]>([])
  const [filterList, setFilterList] = useState<ResponseDto[]>([])
  const [categories, setCategories] = useState<string[]>([])
  const [mileages, setMileages] = useState<string[]>([])
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
          limit: 1000,
        },
      })
      .then((res) => {
        setList(res.data.contents)
        setFilterList(res.data.contents)
        console.log(list)
        // console.log(JSON.stringify(mileageDto, null, 2))
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

  const updateMileages = async (mil: string) => {
    let mileages2 = mileages.slice()
    if (!mileages.includes(mil)) {
      mileages2.push(mil)
    } else {
      delete mileages2[mileages2.indexOf(mil)]
      mileages2 = mileages2.filter(() => true)
    }
    setMileages(mileages2)
    return mileages2
  }

  const updateCategories = async (cat: string) => {
    let categories2 = categories.slice()
    if (!categories.includes(cat)) {
      categories2.push(cat)
    } else {
      delete categories2[categories2.indexOf(cat)]
      categories2 = categories2.filter(() => true)
    }
    setCategories(categories2)
    return categories2
  }

  const updateFilterList = async (cats: string[]) => {
    console.log(cats)
    if (cats.length != 0) {
      setFilterList(
        list
          .filter((item: ResponseDto) => {
            switch (cats.length) {
              case 1:
                return (
                  item.category.length != 0 && item.category.includes(cats[0])
                )
              case 2:
                return (
                  item.category.length != 0 &&
                  item.category.includes(cats[0]) &&
                  item.category.includes(cats[1])
                )
              case 3:
                return (
                  item.category.length != 0 &&
                  item.category.includes(cats[0]) &&
                  item.category.includes(cats[1]) &&
                  item.category.includes(cats[2])
                )
              case 4:
                return (
                  item.category.length != 0 &&
                  item.category.includes(cats[0]) &&
                  item.category.includes(cats[1]) &&
                  item.category.includes(cats[2]) &&
                  item.category.includes(cats[3])
                )
              default:
                break
            }
          })
          .flat(),
      )
    } else {
      setFilterList(list)
    }
    console.log(filterList)
  }

  const switchCategory = async (cat: string) => {
    await updateCategories(cat).then((array) => {
      updateFilterList(array)
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
    list,
    filterList,
    categories,
    categoryDto,
    mileageDto,
    locationDto,
    switchCategory,
    switchMileage,
    switchLocation,
  } as const
}
