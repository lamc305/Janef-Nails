import './headerStyles.css'

function Header() {
  return (
    <header className='header'>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#aboutMe">About</a></li>
          <li>Janef Nails</li>
          <li>Services</li>
          <li><a href="#contactMe">Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header 