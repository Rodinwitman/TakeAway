import Logo from './Logo'
import LinkDropdown from './LinkDropdown'
import Menu from './Menu'

const Navbar = () => {
    return (
        <nav>
            <div className='container flex flex-col sm:flex-row sm:justify-between sm:items-center flex-wrap gap-8 py-5'>
                <Logo />
                <div className='flex items-center'>
                    <Menu />
                    <LinkDropdown />
                </div>
            </div>
        </nav>
    )
}

export default Navbar