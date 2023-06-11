import { useState } from 'react'

function HeaderSearch() {
  const [query, setQuery] = useState('')

  return (
    <input
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      className="w-[40rem] self-center rounded-[0.7rem] border-none bg-[#7950f2] px-[1.6rem] py-[1.1rem] text-xl text-[#dee2e6] transition-all placeholder:text-[#adb5bd] focus:-translate-y-[2px] focus:shadow-[0_2.4rem_2.4rem_rgba(0,0,0,0.1)] focus:outline-none"
    />
  )
}

export default HeaderSearch
