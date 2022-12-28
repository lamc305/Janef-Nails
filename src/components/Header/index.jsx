import { useEffect } from 'react'
import { useState } from 'react'
import './headerStyles.css'

function Header() {
	const [show, setShow] = useState(true)
	const transtionNavBar = () => {
		if (window.scrollY < 100) {
			setShow(true)
		} else {
			setShow(false)
		}
	}

	useEffect(() => {
		window.addEventListener('scroll', transtionNavBar)
		return () => window.removeEventListener('scroll', transtionNavBar)
	}, [])

	return (
		<header className={`header ${show && 'hidden'}`}>
			<nav className='navigation'>
				<a href='#home'>Janef Nails</a>
				<div>
					<a href='#aboutMe'>Servicios</a>
					<a href='#contactMe'>Contacto</a>
				</div>
			</nav>
		</header>
	)
}

export default Header
