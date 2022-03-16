import logo from '../logo.svg'

function Logo() {
  return (
      <a className='navbar-brand' href="https://www.myclassgame.es">
          <img src={logo} width="50" height="50" alt="myclassgame" />
      </a>
  )
}

export default Logo
