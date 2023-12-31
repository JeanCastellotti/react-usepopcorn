import { useState } from 'react'

function Panel({ children }) {
  const [showMovies, setShowMovies] = useState(true)

  return (
    <div className="relative w-[42rem] max-w-[42rem] overflow-hidden overflow-y-auto rounded-[0.9rem] bg-[#2b3035]">
      <button
        onClick={() => setShowMovies((s) => !s)}
        className="absolute right-[0.8rem] top-[0.8rem] z-50 aspect-square h-[2.4rem] cursor-pointer rounded-full border-none bg-[#212529] text-[1.4rem] font-bold text-[#dee2e6]"
      >
        {showMovies ? '-' : '+'}
      </button>
      {showMovies && children}
    </div>
  )
}

export default Panel
