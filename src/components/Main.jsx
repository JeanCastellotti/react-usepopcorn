import MoviesPanel from './MoviesPanel'
import WatchedMoviesPanel from './WatchedMoviesPanel'

function Main({ movies }) {
  return (
    <main className="mt-[2.4rem] flex h-[calc(100vh-7.2rem-3*2.4rem)] justify-center gap-[2.4rem]">
      <MoviesPanel movies={movies} />
      <WatchedMoviesPanel />
    </main>
  )
}

export default Main
