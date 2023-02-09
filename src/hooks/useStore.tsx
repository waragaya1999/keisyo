import { create } from "zustand"

type state = {
  count: number
  storedCats: string[]
  storedMils: string[]
  storedLocs: string[]
  updateCats: (cats: string[]) => void
  updateMils: (mils: string[]) => void
  updateLocs: (locs: string[]) => void
}

const useStore = create<state>((set) => ({
  count: 1,
  increase: () => set((state) => ({ count: state.count + 1 })),
  decrease: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),
  storedCats: [],
  updateCats: (cats: string[]) => set((state) => ({ storedCats: cats })),
  storedMils: [],
  updateMils: (mils: string[]) => set((state) => ({ storedMils: mils })),
  storedLocs: [],
  updateLocs: (locs: string[]) => set((state) => ({ storedLocs: locs })),
}))

export default useStore
