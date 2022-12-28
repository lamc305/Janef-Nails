import './aboutMeStyles.css'
import Carrusel from '../Carrusel'

function AboutMe() {
	return (
		<section className='aboutMe' id='aboutMe'>
			<div className='aboutMe__container'>
				<div className='aboutMe__containerText'>
					<h2>Toma tiempo para ti misma con nuestros servicios</h2>
					<div className='services'>
						<p>Manicura Russa:</p>
						<ul>
							<li>Manicura con esmaltado semipermanente.</li>
							<li>Manicura con base rubber.</li>
						</ul>
					</div>
					<div className='services'>
						<p>Pedicura:</p>
						<ul>
							<li>Pedicura con esmaltado semipermanente.</li>
						</ul>
					</div>
					<div className='services'>
						<p>Sistemas:</p>
						<ul>
							<li>Sistema acrílico.</li>
						</ul>
					</div>
				</div>
				<div className='aboutMe_containerCarrusel'>
					<Carrusel />
				</div>
			</div>
		</section>
	)
}

export default AboutMe
