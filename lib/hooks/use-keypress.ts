import { useEffect, useRef } from "react";

export function useKeypress(key: string, callback: () => void) {
  const callbackRef = useRef(callback)

  useEffect(() => {
    callbackRef.current = callback
  })

  useEffect(() => {
    const handleKeypress = (ev: KeyboardEvent) => {
      if (ev.code === key) {
        callbackRef.current()
      }
    }
    document.addEventListener("keydown", handleKeypress)
    return () => document.removeEventListener("keydown", handleKeypress)
  }, [key])

}