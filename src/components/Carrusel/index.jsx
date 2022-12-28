import img2 from '../../assets/second.webp'
import img3 from '../../assets/tercero.webp'
import img4 from '../../assets/cuarto.webp'
import img5 from '../../assets/quinta.webp'
import img6 from '../../assets/sexta.webp'
import img7 from '../../assets/septima.webp'
import img8 from '../../assets/octava.webp'
import img9 from '../../assets/novena.webp'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCube, Pagination } from 'swiper'
import './carrusel.css'
import 'swiper/css'
import 'swiper/css'
import 'swiper/css/effect-cube'
import 'swiper/css/pagination'

function Carrusel() {
	return (
		<Swiper
			spaceBetween={20}
			slidesPerView={1}
			className='carrusel'
			effect={'cube'}
			grabCursor={true}
			cubeEffect={{
				shadow: true,
				slideShadows: true,
				shadowOffset: 20,
				shadowScale: 1.2,
			}}
			pagination={true}
			modules={[EffectCube, Pagination]}>
			<SwiperSlide>
				<img src={img2} alt='img 2' className='img__carrusel' />
			</SwiperSlide>
			<SwiperSlide>
				<img src={img3} alt='img 3' className='img__carrusel' />
			</SwiperSlide>
			<SwiperSlide>
				<img src={img4} alt='img 4' className='img__carrusel' />
			</SwiperSlide>
			<SwiperSlide>
				<img src={img5} alt='img 5' className='img__carrusel' />
			</SwiperSlide>
			<SwiperSlide>
				<img src={img6} alt='img 6' className='img__carrusel' />
			</SwiperSlide>
			<SwiperSlide>
				<img src={img7} alt='img 6' className='img__carrusel' />
			</SwiperSlide>
			<SwiperSlide>
				<img src={img8} alt='img 6' className='img__carrusel' />
			</SwiperSlide>
			<SwiperSlide>
				<img src={img9} alt='img 6' className='img__carrusel' />
			</SwiperSlide>
		</Swiper>
	)
}

export default Carrusel
