import { useEffect } from 'react'
import { useState } from 'react'
import './headerStyles.css'

function Header() {
	const [show, setShow] = useState(true)
	const transtionNavBar = () => {
		if (window.scrollY < 150) {
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
					<a href='#aboutMe'>About</a>
					<a href='#contactMe'>Contact</a>
				</div>
			</nav>
		</header>
	)
}

export default Header
