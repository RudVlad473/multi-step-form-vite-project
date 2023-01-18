import { useEffect, useState } from "react"

export const useDelayedError = (isError: boolean, delayMs: number) => {
  const [shouldShowError, setShouldShowError] = useState<boolean>(false)

  useEffect(() => {
    let timeout = 0

    if (isError) {
      timeout = setTimeout(() => {
        setShouldShowError(true)
      }, delayMs)
    } else {
      setShouldShowError(false)
    }

    // return () => {
    //   timeout && clearTimeout(timeout)
    // }
  }, [isError])

  return [shouldShowError] as const
}
