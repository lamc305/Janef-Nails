import { AiOutlineMail } from 'react-icons/ai'
import { BiTimeFive } from 'react-icons/bi'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { ImLocation2 } from 'react-icons/im'
import './contactMeStyles.css'
import { Formik } from 'formik'
function ContactMe() {

  return (
    <section id="contactMe">
      <div className="contactMe__container">
        <div className='contactMe__form'>
          <h2>Contact Me</h2>
          <hr />
          <p>You can contact us any way that is convenient for you. We are available 24/7 via fax or email.
            You can also use a quick contact form below or visit our salon personally.</p>
          <Formik
            initialValues={{
              email: '',
              first: '',
              last: '',
              phone: '',
              text: ''
            }}
            validate={values => {
              const errors = {};
              if (!values.email) {
                errors.email = <p className='text__error'>The email is required</p>;
              } else if (
                !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email)
              ) {
                errors.email = <p styles={{ color: red }}>This email address is invalid</p>;
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
              <form onSubmit={handleSubmit}>
                <div>
                  <input
                    type="text"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="first"
                    value={values.first}
                    placeholder="First name"
                  />
                  <input
                    type="text"
                    name="last"
                    value={values.last}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Last name"
                  />
                </div>

                <div>
                  <input
                    type="number"
                    name="phone"
                    id="phone"
                    value={values.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Phone"
                  />
                  <input
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    id="email"
                    placeholder='Email'
                  />

                </div>
                <textarea
                  name="text"
                  id="text"
                  cols="30"
                  rows="10"
                  value={values.text}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                </textarea>
                <button type="submit" disabled={isSubmitting}>
                  Send Message
                </button>
                <div className='container__errors'>

                  {errors.email && touched.email && errors.email}
                </div>
              </form>
            )}
          </Formik>
        </div>
        <article className='contactMe__information'>
          <div>
            <h3>Address</h3>
            <div className='container__icon'>
              <ImLocation2 className='icon' />
              <p>Washington, USA 6036 Richmond hwy., Alexandria, VA, 2230</p>
            </div>
          </div>
          <hr />
          <div>
            <h3>Phones</h3>
            <div className='container__icon'>
              <BsFillTelephoneFill className='icon' />
              <p>+1(409)987-5874</p>
            </div>
          </div>
          <hr />
          <div>
            <h3>E-mail</h3>
            <div className='container__icon'>
              <AiOutlineMail className='icon' />
              <p>info@demolink.org</p>
            </div>
          </div>
          <hr />
          <div>
            <h3>Opening Hours</h3>
            <div className='container__icon'>
              <BiTimeFive className='icon' />
              <div>
                <p>Mon - Fri: 9 am - 6 pm </p>
                <p>Saturday: 9 am - 4 pm</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>

        </article>
      </div>
    </section>
  )
}

export default ContactMe