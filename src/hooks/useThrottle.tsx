import { useRef, useCallback } from "react"

export function useThrottle<T>(fn: (args?: T) => void, durationMS: number) {
  const scrollingTimer = useRef<undefined | NodeJS.Timeout>()
  return useCallback(
    (args?: T) => {
      if (scrollingTimer.current) return
      scrollingTimer.current = setTimeout(() => {
        fn(args)
        scrollingTimer.current = undefined
      }, durationMS)
    },
    [scrollingTimer, fn, durationMS],
  )
}
