import { useEffect, useRef } from 'react'

const useUpdateEffect: typeof useEffect = (effect, deps) => {
  const isFirstMount = useRef(true)

  useEffect(() => {
    if (isFirstMount.current) {
      isFirstMount.current = false
    } else {
      return effect()
    }
  }, deps)
}

export default useUpdateEffect
