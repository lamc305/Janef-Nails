import img1 from '../../assets/slide-img-1.png'
import './aboutMeStyles.css'

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
        <div>
          <img className='aboutMe__img' src={img1} alt="" />
        </div>
      </div>
      <div className="skewed"></div>
    </section>
  )
}

export default AboutMe