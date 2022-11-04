import img2 from '../../assets/second.webp'
import img3 from '../../assets/tercero.webp'
import img4 from '../../assets/cuarto.webp'
import img5 from '../../assets/quinta.webp'
import img6 from '../../assets/sexta.webp'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
function Carrusel() {
  return (
    <Carousel
      showArrows={true}
      showThumbs={true}
      infiniteLoop={true}
      interval={2000}
      autoPlay={true}
      emulateTouch={true}
      animationHandler={true}
      showIndicators={false}
      width={350}
      showStatus={false}
      swipeable={true}
      thumbWidth={50}
    >
      <div>
        <img
          src={img2}
          alt=""
          className='img__carrusel'
        />
      </div>
      <div>
        <img
          src={img3}
          alt=""
          className='img__carrusel'
        />
      </div>
      <div>
        <img
          src={img4}
          alt=""
          className='img__carrusel'
        />
      </div>
      <div>
        <img
          src={img5}
          alt=""
          className='img__carrusel'
        />
      </div>
      <div>
        <img
          src={img6}
          alt=""
          className='img__carrusel'
        />
      </div>
    </Carousel>
  );
}

export default Carrusel;