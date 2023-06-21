import { useRef } from 'react'
import { useKey } from '../hooks/useKey'

function HeaderSearch({ query, onSearch }) {
  const input = useRef(null)

  useKey('Enter', () => {
    if (document.activeElement === input.current) return
    onSearch('')
    input.current.focus()
  })

  return (
    <input
      ref={input}
      value={query}
      onChange={(e) => onSearch(e.target.value)}
      type="text"
      placeholder="Search movies..."
      className="w-[40rem] self-center rounded-[0.7rem] bg-[#7950f2] px-[1.6rem] py-[1.1rem] text-xl text-[#dee2e6] transition-all placeholder:text-[#adb5bd] focus:-translate-y-[2px]  focus:shadow-[0_2.4rem_2.4rem_rgba(0,0,0,0.1)] focus:outline-0"
    />
  )
}

export default HeaderSearch
