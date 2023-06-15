import { useEffect, useState } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import HeaderSearch from './components/HeaderSearch'
import HeaderSearchResults from './components/HeaderSearchResults'
import Panel from './components/Panel'
import MovieList from './components/MovieList'
import WatchedMoviesSummary from './components/WatchedMoviesSummary'
import WatchedMovieList from './components/WatchedMovieList'
import Loader from './components/Loader'
import ErrorMessage from './components/ErrorMessage'
import SelectedMovie from './components/SelectedMovie'

const apiKey = import.meta.env.VITE_API_KEY
const apiUrl = `http://www.omdbapi.com/?apikey=${apiKey}`

function App() {
  const [movies, setMovies] = useState([])
  const [watchedMovies, setWatchedMovies] = useState(() =>
    JSON.parse(localStorage.getItem('watchedMovies'))
  )
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [query, setQuery] = useState('')
  const [selectedMovieID, setSelectedMovieID] = useState(null)

  function handleSelectMovie(id) {
    setSelectedMovieID((selectedMovieID) =>
      selectedMovieID === id ? null : id
    )
  }

  function handleCloseSelectedMovie() {
    setSelectedMovieID(null)
  }

  function handleAddWatchedMovie(movie) {
    setWatchedMovies((movies) => [...movies, movie])
  }

  function handleDeleteWatchedMovie(id) {
    setWatchedMovies((movies) => movies.filter((movie) => movie.imdbID !== id))
  }

  useEffect(() => {
    localStorage.setItem('watchedMovies', JSON.stringify(watchedMovies))
  }, [watchedMovies])

  useEffect(() => {
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

    handleCloseSelectedMovie()
    fetchMovies()

    return () => {
      controller.abort()
    }
  }, [query])

  return (
    <div className="bg-[#212529] p-[2.4rem] text-[#dee2e6]">
      <Header>
        <HeaderSearch query={query} onSearch={setQuery} />
        <HeaderSearchResults movies={movies} />
      </Header>
      <Main>
        <Panel>
          {isLoading && <Loader />}
          {error && <ErrorMessage message={error} />}
          {!isLoading && !error && (
            <MovieList movies={movies} onSelectMovie={handleSelectMovie} />
          )}
        </Panel>
        <Panel>
          {selectedMovieID ? (
            <SelectedMovie
              selectedMovieID={selectedMovieID}
              onCloseSelectedMovie={handleCloseSelectedMovie}
              onAddWatchedMovie={handleAddWatchedMovie}
              watchedMovies={watchedMovies}
            />
          ) : (
            <>
              <WatchedMoviesSummary watchedMovies={watchedMovies} />
              <WatchedMovieList
                watchedMovies={watchedMovies}
                onDeleteWatchedMovie={handleDeleteWatchedMovie}
              />
            </>
          )}
        </Panel>
      </Main>
    </div>
  )
}

export default App
