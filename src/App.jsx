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
import { useMovies } from './hooks/useMovies'
import { useLocalStorage } from './hooks/useLocalStorage'

function App() {
  const [query, setQuery] = useState('')
  const [selectedMovieID, setSelectedMovieID] = useState(null)

  const [watchedMovies, setWatchedMovies] = useLocalStorage([], 'watchedMovies')
  const [movies, isLoading, error] = useMovies(query, handleCloseSelectedMovie)

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
