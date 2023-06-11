import HeaderLogo from './HeaderLogo'

function Header({ children }) {
  return (
    <header className="flex h-[7.2rem] items-center justify-between rounded-[0.9rem] bg-[#6741d9] px-[3.2rem]">
      <HeaderLogo />
      {children}
    </header>
  )
}

export default Header
