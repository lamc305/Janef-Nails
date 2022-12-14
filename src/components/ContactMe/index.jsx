import { AiOutlineMail } from 'react-icons/ai'
import { BsFillTelephoneFill } from 'react-icons/bs'
import './contactMeStyles.css'
import { Formik } from 'formik'

function ContactMe() {
	function UseWhatsapp(mobileNumber, message) {
		let number = mobileNumber.replace(/[^\w\s]/gi, '').replace(/ /g, '')
		let url = `https://api.whatsapp.com/send/?phone=${number}`
		url += `&text=${encodeURI(message)}&app_absent=0`

		window.open(url)
	}

	return (
		<section id='contactMe'>
			<div className='contactMe__container'>
				<div className='contactMe__form'>
					<h2>Contáctame</h2>
					<hr />
					<p>
						Puedes contactarnos de la manera que te sea más sencilla. Estamos
						disponible 24/7 vía email o de manera telefónica. También puedes
						usar el formulario de contacto debajo.
					</p>
					<Formik
						initialValues={{
							email: '',
							first: '',
							last: '',
							phone: '',
							text: '',
						}}
						validate={(values) => {
							const errors = {}
							if (!values.email) {
								errors.email = (
									<p className='text__error'>El correo es requerido</p>
								)
							} else if (
								!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
									values.email
								)
							) {
								errors.email = (
									<p className='text__error'>
										Este correo electrónico es inválido
									</p>
								)
							}
							return errors
						}}
						onSubmit={(values) => {
							let message = `${values.first && values.first} ${
								values.last && values.last
							} ${values.email && `\n✉️ - ${values.email}`} ${
								values.phone && `\n📱 - ${values.phone}`
							}\n${values.text && values.text}`
							setTimeout(() => {
								UseWhatsapp('+584246923284', message)
							}, 400)
						}}>
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
								<div className='container__1inputs'>
									<input
										type='text'
										onChange={handleChange}
										onBlur={handleBlur}
										name='first'
										value={values.first}
										placeholder='Nombre'
									/>
									<input
										type='text'
										name='last'
										value={values.last}
										onChange={handleChange}
										onBlur={handleBlur}
										placeholder='Apellido'
									/>
								</div>

								<div className='container__2inputs'>
									<input
										type='number'
										name='phone'
										id='phone'
										value={values.phone}
										onChange={handleChange}
										onBlur={handleBlur}
										placeholder='Teléfono'
									/>
									<input
										type='email'
										name='email'
										value={values.email}
										onChange={handleChange}
										onBlur={handleBlur}
										id='email'
										placeholder='Email'
									/>
								</div>
								<textarea
									name='text'
									id='text'
									cols='30'
									rows='10'
									value={values.text}
									onChange={handleChange}
									onBlur={handleBlur}
									placeholder='Hola en que puedo ayudarte?'></textarea>
								{errors.email && touched.email && errors.email}
								<button type='submit' disabled={isSubmitting}>
									Enviar Mensaje
								</button>
							</form>
						)}
					</Formik>
				</div>
				<article className='contactMe__information'>
					<div>
						<h3>Teléfono</h3>
						<div className='container__icon'>
							<BsFillTelephoneFill className='icon' />
							<a href='tel:+584246923284'>+58 424 692-3284</a>
						</div>
					</div>
					<hr />
					<div>
						<h3>E-mail</h3>
						<div className='container__icon'>
							<AiOutlineMail className='icon' />
							<a href='mailto:yanetzy.franco1@gmail.com'>Janezti Franco</a>
						</div>
					</div>
				</article>
			</div>
		</section>
	)
}

export default ContactMe
