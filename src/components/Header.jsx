import HeaderLogo from './HeaderLogo'
import HeaderSearch from './HeaderSearch'
import HeaderSearchResults from './HeaderSearchResults'

function Header({ movies }) {
  return (
    <header className="flex h-[7.2rem] items-center justify-between rounded-[0.9rem] bg-[#6741d9] px-[3.2rem]">
      <HeaderLogo />
      <HeaderSearch />
      <HeaderSearchResults movies={movies} />
    </header>
  )
}

export default Header
