import { useEffect, useState } from 'react'

const apiKey = import.meta.env.VITE_API_KEY
const apiUrl = `http://www.omdbapi.com/?apikey=${apiKey}`

export function useMovies(query, callback) {
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    // handleCloseSelectedMovie()
    callback?.()

    const controller = new AbortController()

    async function fetchMovies() {
      try {
        setIsLoading(true)
        setError(null)
        const res = await fetch(apiUrl + `&s=${query}`, {
          signal: controller.signal,
        })
        if (!res.ok) throw new Error('Failed to load')
        const data = await res.json()
        if (data.Response === 'False') throw new Error(data.Error)
        setMovies(data.Search)
        setError(null)
      } catch (error) {
        if (error.name !== 'AbortError') setError(error.message)
      } finally {
        setIsLoading(false)
      }
    }

    if (query.length < 3) {
      setMovies([])
      setError(null)
      return
    }

    fetchMovies()

    return () => {
      controller.abort()
    }
  }, [query])

  return [movies, isLoading, error]
}
