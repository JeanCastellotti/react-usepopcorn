import { useEffect } from 'react'

export function useKey(key, action) {
  useEffect(() => {
    const handler = (e) => {
      if (e.code.toLowerCase() === key.toLowerCase()) action()
    }

    document.addEventListener('keydown', handler)

    return () => {
      document.removeEventListener('keydown', handler)
    }
  }, [action, key])
}
