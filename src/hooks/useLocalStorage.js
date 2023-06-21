import { useEffect, useState } from 'react'

export function useLocalStorage(initialValue, key) {
  const [state, setState] = useState(
    () => JSON.parse(localStorage.getItem(key)) || initialValue
  )

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state))
  }, [state, key])

  return [state, setState]
}
