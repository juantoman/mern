import Logo from './Logo'
import Links from './Links'

function NavBar() {
    return (
        <div className='container-fluid'>
            <nav className='navbar fixed-top navbar-expand-lg navbar-dark bg-dark'>
                <Logo />
                <Links />
            </nav>
        </div>

    )
}

export default NavBar
