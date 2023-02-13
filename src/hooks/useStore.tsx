import { create } from "zustand"
import { ResponseDto } from "../types/ResponseDto"

type state = {
  list: ResponseDto[]
  storedCats: string[]
  storedMils: string[]
  storedLocs: string[]
  updateList: (lists: ResponseDto[]) => void
  updateCats: (cats: string[]) => void
  updateMils: (mils: string[]) => void
  updateLocs: (locs: string[]) => void
}

const useStore = create<state>((set) => ({
  list: [],
  updateList: (lists: ResponseDto[]) => set((state) => ({ list: lists })),
  storedCats: [],
  updateCats: (cats: string[]) => set((state) => ({ storedCats: cats })),
  storedMils: [],
  updateMils: (mils: string[]) => set((state) => ({ storedMils: mils })),
  storedLocs: [],
  updateLocs: (locs: string[]) => set((state) => ({ storedLocs: locs })),
}))

export default useStore
