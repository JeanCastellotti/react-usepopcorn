function MoviesPanel({movies, showMovies, onShowMovies}) {
  return (
    <div className="relative w-[42rem] max-w-[42rem] overflow-hidden overflow-y-auto rounded-[0.9rem] bg-[#2b3035]">
      <button
        onClick={() => onShowMovies((s) => !s)}
        className="absolute right-[0.8rem] top-[0.8rem] z-50 aspect-square h-[2.4rem] cursor-pointer rounded-full border-none bg-[#212529] text-[1.4rem] font-bold text-[#dee2e6]"
      >
        {showMovies ? '-' : '+'}
      </button>
      {showMovies && (
        <ul className="divide-y divide-[#343a40]">
          {movies.map((movie) => (
            <li
              key={movie.imdbID}
              className="relative flex cursor-pointer items-center gap-x-10 px-[3.2rem] py-[1.6rem] text-xl transition-all hover:bg-[#343a40]"
            >
              <img
                src={movie.Poster}
                alt={`${movie.Title} poster`}
                className="row-[1/-1] w-20 object-cover"
              />
              <div className="space-y-2">
                <h3 className="text-2xl font-semibold">{movie.Title}</h3>
                <p className="flex items-center gap-2">
                  <span>🗓</span>
                  <span>{movie.Year}</span>
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default MoviesPanel
