import { useState } from "react"
import axios from "axios"
import { ResponseDto } from "../types/ResponseDto"
import useStore from "./useStore"

export const useKeisyo = () => {
  const {
    list,
    storedCats,
    storedMils,
    storedLocs,
    updateList,
    updateCats,
    updateMils,
    updateLocs,
  } = useStore()
  const [filterList, setFilterList] = useState<ResponseDto[]>([])
  const [isLoaded, setIsLoaded] = useState<boolean>(false)
  const [modalFlag, setModalFlag] = useState(false)

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
        updateList(
          res.data.contents.reduceRight(
            (p: string[], c: string[]) => [...p, c],
            [],
          ),
        )
        setFilterList(
          res.data.contents.reduceRight(
            (p: string[], c: string[]) => [...p, c],
            [],
          ),
        )
        setIsLoaded(true)
      })
  }

  const updateCategories = async (cat: string) => {
    let tempArray = storedCats.slice()
    if (!storedCats.includes(cat)) {
      tempArray.push(cat)
    } else {
      delete tempArray[tempArray.indexOf(cat)]
    }
    tempArray = tempArray.filter((v) => v)
    updateCats(tempArray)
    return tempArray
  }

  const updateMileages = async (mil: string) => {
    let tempArray = storedMils.slice()
    if (!storedMils.includes(mil)) {
      tempArray.push(mil)
    } else {
      delete tempArray[tempArray.indexOf(mil)]
    }
    tempArray = tempArray.filter((v) => v)
    updateMils(tempArray)
    return tempArray
  }

  const updateLocations = async (loc: string) => {
    let tempArray = storedLocs.slice()
    if (!storedLocs.includes(loc)) {
      tempArray.push(loc)
    } else {
      delete tempArray[tempArray.indexOf(loc)]
    }
    tempArray = tempArray.filter((v) => v)
    updateLocs(tempArray)
    return tempArray
  }

  const updateFilterList = async (
    cats: string[],
    mils: string[],
    locs: string[],
  ) => {
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
        updateCats(cats)
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
        updateMils(mils)
      }
      if (locs.length != 0) {
        tempList = tempList
          .filter((item: ResponseDto) => {
            const isIncludes = locs
              .slice()
              .map((v) => item.location.includes(v))
              .every((e) => e)
            return item.location.length != 0 && isIncludes
          })
          .flat()
        updateLocs(locs)
      }
      setIsLoaded(true)
    } else {
      getList()
      tempList = list
    }
    setFilterList(tempList)
  }

  const switchList = async (cat: string, mil: string, loc: string) => {
    const array1 = await updateCategories(cat)
    const array2 = await updateMileages(mil)
    const array3 = await updateLocations(loc)
    updateFilterList(array1, array2, array3)
  }

  const closeModal = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (
      (e.target as Element).className == "filter" ||
      (e.target as Element).className == "buttonFilter"
    ) {
      setModalFlag(true)
    } else if (
      (e.target as Element).className == "modalBg" ||
      (e.target as Element).className == "closeModalButtonImg"
    ) {
      setModalFlag(false)
    }
  }

  return {
    getList,
    filterList,
    updateFilterList,
    switchList,
    isLoaded,
    modalFlag,
    setModalFlag,
    closeModal,
  } as const
}
