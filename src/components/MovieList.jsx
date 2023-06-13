import Movie from './Movie'

function MovieList({ movies, onSelectMovie }) {
  return (
    <ul className="divide-y divide-[#343a40]">
      {movies.map((movie) => (
        <Movie key={movie.imdbID} movie={movie} onSelectMovie={onSelectMovie} />
      ))}
    </ul>
  )
}

export default MovieList
