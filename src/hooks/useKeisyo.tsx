import { useState } from "react"
import axios from "axios"
import { ResponseDto } from "../types/ResponseDto"

export const useKeisyo = () => {
  const [list, setList] = useState<ResponseDto[]>([])
  const [filterList, setFilterList] = useState<ResponseDto[]>([])
  const [categories, setCategories] = useState<string[]>([])
  const [mileages, setMileages] = useState<string[]>([])
  const [locations, setLocations] = useState<string[]>([])
  const [isLoaded, setIsLoaded] = useState<boolean>(false)

  const getList = async () => {
    await axios
      .get("https://umakoyuu.microcms.io/api/v1/keisyo?", {
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
        setIsLoaded(true)
        // console.log(JSON.stringify(mileageDto, null, 2))
      })
  }

  const updateCategories = async (cat: string) => {
    let tempArray = categories.slice()
    if (!categories.includes(cat)) {
      tempArray.push(cat)
    } else {
      delete tempArray[tempArray.indexOf(cat)]
    }
    tempArray = tempArray.filter((v) => v)
    setCategories(tempArray)
    return tempArray
  }

  const updateMileages = async (mil: string) => {
    let tempArray = mileages.slice()
    if (!mileages.includes(mil)) {
      tempArray.push(mil)
    } else {
      delete tempArray[tempArray.indexOf(mil)]
    }
    tempArray = tempArray.filter((v) => v)
    setMileages(tempArray)
    return tempArray
  }

  const updatePositions = async (loc: string) => {
    let tempArray = locations.slice()
    if (!locations.includes(loc)) {
      tempArray.push(loc)
    } else {
      delete tempArray[tempArray.indexOf(loc)]
    }
    tempArray = tempArray.filter((v) => v)
    setLocations(tempArray)
    return tempArray
  }

  const updateFilterList = async (
    cats: string[],
    mils: string[],
    locs: string[],
  ) => {
    console.log(cats)
    console.log(mils)
    console.log(locs)
    let tempList: ResponseDto[] = list
    if (cats.length != 0 || mils.length != 0 || locs.length != 0) {
      if (cats.length != 0) {
        tempList = tempList
          .filter((item: ResponseDto) => {
            const isIncludes = cats
              .slice()
              .map((v) => item.category.includes(v))
              .every((ele) => ele)
            return item.category.length != 0 && isIncludes
          })
          .flat()
      }
      if (mils.length != 0) {
        tempList = tempList
          .filter((item: ResponseDto) => {
            const isIncludes = mils
              .slice()
              .map((v) => item.mileage.includes(v))
              .every((ele) => ele)
            return item.mileage.length != 0 && isIncludes
          })
          .flat()
      }
      if (locs.length != 0) {
        tempList = tempList
          .filter((item: ResponseDto) => {
            const isIncludes = locs
              .slice()
              .map((v) => item.location.includes(v))
              .every((ele) => ele)
            return item.location.length != 0 && isIncludes
          })
          .flat()
      }
    } else {
      tempList = list
    }
    setFilterList(tempList)
    console.log(tempList)
  }

  const switchList = async (cat: string, mil: string, loc: string) => {
    const array1 = await updateCategories(cat)
    const array2 = await updateMileages(mil)
    const array3 = await updatePositions(loc)
    updateFilterList(array1, array2, array3)
  }

  return {
    getList,
    filterList,
    categories,
    mileages,
    locations,
    switchList,
    isLoaded,
  } as const
}
