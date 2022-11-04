import './aboutMeStyles.css'
import Carrusel from '../Carusel'

function AboutMe() {

  return (
    <section className='aboutMe' id='aboutMe'>
      <div className="aboutMe__container">
        <div className='aboutMe__containerText'>
          <h2>Take time for yourself today</h2>
          <p>Amet justo donec enim diam vulpultate ut pharetra. Diam in arcu cursus euimod</p>
          <ul>
            <li>Toxins free</li>
            <li>Try new foundation</li>
            <li>Shine line a diamond</li>
          </ul>
        </div>
        <div className='aboutMe_containerCarrusel'>
          <Carrusel />
        </div>
      </div>
    </section>
  )
}

export default AboutMe