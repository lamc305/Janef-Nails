import './contactMeStyles.css'
import { ImLocation2 } from 'react-icons/im'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'
import { BiTimeFive } from 'react-icons/bi'

function ContactMe() {

  const handleSubmit = (e) => {
    e.preventDefault()
    const name = e.target.first.value
    const last = e.target.last.value
    return { name, last }
  }
  return (
    <section id="contactMe">
      <div className="contactMe__container">
        <div className='contactMe__form'>
          <h2>Contact Me</h2>
          <hr />
          <p>You can contact us any way that is convenient for you. We are available 24/7 via fax or email.
            You can also use a quick contact form below or visit our salon personally.</p>
          <form onSubmit={handleSubmit}>
            <div>
              <input type="text" name="first" id="first" placeholder="First name" />
              <input type="text" name="last" id="last" placeholder="Last name" />
            </div>
            <div>
              <input type="number" name="phone" id="phone" placeholder="Phone" />
              <input type="email" name="email" id="email" placeholder='Email' />
            </div>
            <textarea name="text" id="text" cols="30" rows="10"></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
        <article className='contactMe__information'>
          <div>
            <h3>Address</h3>
            <div>
              <ImLocation2 className='icon' />
              <p>Washington, USA 6036 Richmond hwy., Alexandria, VA, 2230</p>
            </div>
          </div>
          <hr />
          <div>
            <h3>Phones</h3>
            <div>
              <BsFillTelephoneFill />
              <p>+1(409)987-5874</p>
            </div>
          </div>
          <hr />
          <div>
            <h3>E-mail</h3>
            <div>
              <AiOutlineMail />
              <p>info@demolink.org</p>
            </div>
          </div>
          <hr />
          <div>
            <h3>Opening Hours</h3>
            <div>
              <BiTimeFive />
              <p></p>
            </div>
          </div>

        </article>
      </div>
    </section>
  )
}

export default ContactMe