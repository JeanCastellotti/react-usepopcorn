import Movie from './Movie'

function MovieList({ movies }) {
  return (
    <ul className="divide-y divide-[#343a40]">
      {movies.map((movie) => (
        <Movie key={movie.imdbID} movie={movie} />
      ))}
    </ul>
  )
}

export default MovieList
