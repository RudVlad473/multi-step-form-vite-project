import { useEffect, useRef } from "react"

export const useFocus = () => {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    ref.current?.focus()
  }, [ref])

  return ref
}
