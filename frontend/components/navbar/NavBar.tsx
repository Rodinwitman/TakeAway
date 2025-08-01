import LinkDropdown from "./LinksDropdown"
import Logo from "./Logo"
import Menu from "./Menu"

const NavBar = () => {
  return (
    <nav>
        <div className="container flex flex-col flex-wrap sm:flex-row sm:justify-between sm:items-center gap-8 py-5">
            <Logo />
            <div className="flex item-center gap-4">
                <Menu />
                <LinkDropdown />
            </div>
        </div>
    </nav>
  )
}

export default NavBar