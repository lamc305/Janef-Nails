import './portadaStyles.css'
import hero from '../../assets/LogoJanef.webp'

function Portada() {
  return (
    <section className="Portada" id='home'>
      <div className='portada__container'>
        <div className='portada__containerText'>
          <h1>Janetzi Franco</h1>
          <h2>Nail's Art</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti ea dolor doloremque cumque nostrum, magni esse. Nostrum, dicta necessitatibus ex sapiente quos animi impedit odit earum cupiditate ad suscipit? Dolore!</p>
          <button>
            <p>Join now</p>
          </button>
        </div>
        <div>
          <img className='portada__hero' src={hero} alt="logo-hero" />
        </div>
      </div>
      <div className="wave"></div>
    </section>
  )
}

export default Portada