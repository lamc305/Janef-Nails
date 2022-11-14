import './headerStyles.css'

function Header() {
  return (
    <header className='header'>
      <nav className='navigation'>
        <a href="#home">Janef Nails</a>
        <div>
          <a href="#aboutMe">About</a>
          <a href="#contactMe">Contact</a>
        </div>
      </nav>
    </header>
  )
}

export default Header 