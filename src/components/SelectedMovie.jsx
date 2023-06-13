import { useEffect, useState } from 'react'
import Rating from './Rating'
import Loader from './Loader'

const apiKey = import.meta.env.VITE_API_KEY
const apiUrl = `http://www.omdbapi.com/?apikey=${apiKey}`

function SelectedMovie({
  selectedMovieID,
  onCloseSelectedMovie,
  onAddWatchedMovie,
}) {
  const [selectedMovie, setSelectedMovie] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  const {
    Title: title,
    Year: year,
    Poster: poster,
    Runtime: runtime,
    imdbRating,
    Plot: plot,
    Released: released,
    Actors: actors,
    Director: director,
    Genre: genre,
  } = selectedMovie

  function handleAddWatchedMovie() {
    onAddWatchedMovie({
      imdbID: selectedMovieID,
      title,
      year,
      poster,
      imdbRating: Number(imdbRating),
      runtime: Number(runtime.split(' ').at(0)),
    })
  }

  useEffect(() => {
    async function fetchMovieDetails() {
      setIsLoading(true)
      const res = await fetch(apiUrl + `&i=${selectedMovieID}`)
      const data = await res.json()
      setSelectedMovie(data)
      setIsLoading(false)
    }

    fetchMovieDetails()
  }, [selectedMovieID])

  return (
    <div className="relative h-full">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <button
            onClick={onCloseSelectedMovie}
            className="absolute left-2 top-2 z-50 flex aspect-square h-12 cursor-pointer items-center justify-center rounded-full bg-white text-[#2b3035] shadow-[0_8px_20px_rgba(0,0,0,0.8)]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-6 w-6"
            >
              <path
                fillRule="evenodd"
                d="M7.28 7.72a.75.75 0 010 1.06l-2.47 2.47H21a.75.75 0 010 1.5H4.81l2.47 2.47a.75.75 0 11-1.06 1.06l-3.75-3.75a.75.75 0 010-1.06l3.75-3.75a.75.75 0 011.06 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <header className="flex">
            <img
              src={poster}
              alt={`Poster of ${title}`}
              className="w-1/3 object-cover"
            />
            <div className="w-full space-y-2 bg-[#343a40] px-12 py-10">
              <h2 className="mb-2 text-2xl font-bold">{title}</h2>
              <p>
                {released} &bull; {runtime}
              </p>
              <p>{genre}</p>
              <p className="flex items-center gap-1">
                <span>⭐</span>
                <span>{imdbRating} IMDb rating</span>
              </p>
            </div>
          </header>
          <section className="space-y-5 p-16 text-lg">
            <div className="mb-3 flex flex-col justify-center space-y-3 rounded bg-[#343a40] px-5 py-4 font-semibold">
              <Rating maxRating={10} size={32} className={'justify-between'} />
              <button
                onClick={handleAddWatchedMovie}
                className="cursor-pointer rounded bg-[#6741d9] px-3 py-1 font-bold text-[#dee2e6] transition hover:bg-[#7950f2]"
              >
                Add to list
              </button>
            </div>
            <p>
              <em>{plot}</em>
            </p>
            <p>Starring {actors}</p>
            <p>Directed by {director}</p>
          </section>
        </>
      )}
    </div>
  )
}

export default SelectedMovie
