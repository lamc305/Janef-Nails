import './portadaStyles.css'
import hero from '../../assets/LogoJanef.webp'

function Portada() {
	return (
		<section className='Portada' id='home'>
			<div className='portada__container'>
				<div className='portada__containerText'>
					<h1>Janetzi Franco</h1>
					<h2>Nail's Art</h2>
					<p>
						Janef Nails tiene como propósito resaltar la belleza de tus uñas
						convirtiéndolas en arte.
					</p>
					<p>
						Recuerda: ¡Cuidar de ti misma no es un gasto, es una inversión!
						Aprovecha las oportunidades, consiéntete, amáte y comienza el día
						con una linda manicura
					</p>
					<a
						href='https://api.whatsapp.com/send/?phone=584246923284'
						target='_blank'>
						<p>Join now</p>
					</a>
				</div>
				<div className='container__hero'>
					<img className='portada__hero' src={hero} alt='logo-hero' />
				</div>
			</div>
			<div className='wave'></div>
		</section>
	)
}

export default Portada
