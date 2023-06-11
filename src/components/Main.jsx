import MoviesPanel from './MoviesPanel'
import WatchedMoviesPanel from './WatchedMoviesPanel'

function Main({
  movies,
  watchedMovies,
  showMovies,
  showWatchedMovies,
  onShowMovies,
  onShowWatchedMovies,
}) {
  return (
    <main className="mt-[2.4rem] flex h-[calc(100vh-7.2rem-3*2.4rem)] justify-center gap-[2.4rem]">
      <MoviesPanel
        movies={movies}
        showMovies={showMovies}
        onShowMovies={onShowMovies}
      />

      <WatchedMoviesPanel
        watchedMovies={watchedMovies}
        showWatchedMovies={showWatchedMovies}
        onShowWatchedMovies={onShowWatchedMovies}
      />
    </main>
  )
}

export default Main
