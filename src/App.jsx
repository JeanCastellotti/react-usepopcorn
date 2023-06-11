import { useState } from 'react'

const tempMovieData = [
  {
    imdbID: 'tt1375666',
    Title: 'Inception',
    Year: '2010',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg',
  },
  {
    imdbID: 'tt0133093',
    Title: 'The Matrix',
    Year: '1999',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg',
  },
  {
    imdbID: 'tt6751668',
    Title: 'Parasite',
    Year: '2019',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg',
  },
]

const tempWatchedData = [
  {
    imdbID: 'tt1375666',
    Title: 'Inception',
    Year: '2010',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg',
    runtime: 148,
    imdbRating: 8.8,
    userRating: 10,
  },
  {
    imdbID: 'tt0088763',
    Title: 'Back to the Future',
    Year: '1985',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
    runtime: 116,
    imdbRating: 8.5,
    userRating: 9,
  },
]

const average = (arr) =>
  arr.reduce((acc, curr, i, arr) => acc + curr / arr.length, 0)

function App() {
  const [query, setQuery] = useState('')
  const [movies, setMovies] = useState(tempMovieData)
  const [watchedMovies, setWatchedMovies] = useState(tempWatchedData)
  const [showMovies, setShowMovies] = useState(true)
  const [showWatchedMovies, setShowWatchedMovies] = useState(true)

  const avgImdbRating = average(watchedMovies.map((movie) => movie.imdbRating))
  const avgUserRating = average(watchedMovies.map((movie) => movie.userRating))
  const avgRuntime = average(watchedMovies.map((movie) => movie.runtime))

  return (
    <div className="bg-[#212529] p-[2.4rem] text-[#dee2e6]">
      <header className="flex h-[7.2rem] items-center justify-between rounded-[0.9rem] bg-[#6741d9] px-[3.2rem]">
        <div className="flex items-center gap-[0.8rem]">
          <span role="img" className=" text-4xl">
            🍿
          </span>
          <h1 className="text-2xl font-semibold text-white">usePopCorn</h1>
        </div>
        <input
          type="text"
          placeholder="Search movies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-[40rem] self-center rounded-[0.7rem] border-none bg-[#7950f2] px-[1.6rem] py-[1.1rem] text-xl text-[#dee2e6] transition-all placeholder:text-[#adb5bd] focus:-translate-y-[2px] focus:shadow-[0_2.4rem_2.4rem_rgba(0,0,0,0.1)] focus:outline-none"
        />
        <p className="text-xl">
          Found <strong>{movies.length}</strong> results
        </p>
      </header>

      <main className="mt-[2.4rem] flex h-[calc(100vh-7.2rem-3*2.4rem)] justify-center gap-[2.4rem]">
        <div className="relative w-[42rem] max-w-[42rem] overflow-hidden overflow-y-auto rounded-[0.9rem] bg-[#2b3035]">
          <button
            onClick={() => setShowMovies((s) => !s)}
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

        <div className="relative w-[42rem] max-w-[42rem] overflow-y-auto rounded-[0.9rem] bg-[#2b3035]">
          <button
            onClick={() => setShowWatchedMovies((o) => !o)}
            className="absolute right-[0.8rem] top-[0.8rem] z-50 aspect-square h-[2.4rem] cursor-pointer rounded-full border-none bg-[#212529] text-[1.4rem] font-bold text-[#dee2e6]"
          >
            {showWatchedMovies ? '-' : '+'}
          </button>
          {showWatchedMovies && (
            <>
              <div className="rounded-[0.9rem] bg-[#343a40] p-[2.2rem_3.2rem_1.8rem_3.2rem] shadow-[0_1.2rem_2.4rem_rgba(0,0,0,0.2)]">
                <h2 className="mb-[0.6rem] text-2xl font-semibold uppercase">
                  Movies you watched
                </h2>
                <div className="flex items-center gap-[2.4rem] text-xl">
                  <p className="flex items-center gap-2">
                    <span>#️⃣</span>
                    <span>{watchedMovies.length} movies</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span>⭐️</span>
                    <span>{avgImdbRating}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span>🌟</span>
                    <span>{avgUserRating}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span>⏳</span>
                    <span>{avgRuntime} min</span>
                  </p>
                </div>
              </div>

              <ul className="divide-y divide-[#343a40] py-[0.8rem]">
                {watchedMovies.map((movie) => (
                  <li
                    key={movie.imdbID}
                    className="relative flex cursor-pointer items-center gap-x-10 px-[3.2rem] py-[1.6rem] text-xl transition-all hover:bg-[#343a40]"
                  >
                    <img
                      src={movie.Poster}
                      alt={`${movie.Title} Poster`}
                      className="row-[1/-1] w-20 object-cover"
                    />
                    <div className="space-y-3">
                      <h3 className="text-2xl font-semibold">{movie.Title}</h3>
                      <div className="flex items-center gap-[2.4rem]">
                        <p className="flex items-center gap-2">
                          <span>⭐️</span>
                          <span>{movie.imdbRating}</span>
                        </p>
                        <p className="flex items-center gap-2">
                          <span>🌟</span>
                          <span>{movie.userRating}</span>
                        </p>
                        <p className="flex items-center gap-2">
                          <span>⏳</span>
                          <span>{movie.runtime} min</span>
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </main>
    </div>
  )
}

export default App
