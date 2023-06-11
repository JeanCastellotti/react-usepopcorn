import { useState } from 'react'

import WatchedMoviesSummary from './WatchedMoviesSummary'
import WatchedMovies from './WatchedMovies'

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

function WatchedMoviesPanel() {
  const [showWatchedMovies, setShowWatchedMovies] = useState(true)
  const [watchedMovies, setWatchedMovies] = useState(tempWatchedData)

  return (
    <div className="relative w-[42rem] max-w-[42rem] overflow-y-auto rounded-[0.9rem] bg-[#2b3035]">
      <button
        onClick={() => setShowWatchedMovies((o) => !o)}
        className="absolute right-[0.8rem] top-[0.8rem] z-50 aspect-square h-[2.4rem] cursor-pointer rounded-full border-none bg-[#212529] text-[1.4rem] font-bold text-[#dee2e6]"
      >
        {showWatchedMovies ? '-' : '+'}
      </button>
      {showWatchedMovies && (
        <>
          <WatchedMoviesSummary watchedMovies={watchedMovies} />
          <WatchedMovies watchedMovies={watchedMovies} />
        </>
      )}
    </div>
  )
}

export default WatchedMoviesPanel
