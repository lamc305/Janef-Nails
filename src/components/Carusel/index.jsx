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
      showStatus={false}
      showIndicators={false}
      infiniteLoop={true}
      showThumbs={true}
      useKeyboardArrows={false}
      autoPlay={true}
      stopOnHover={true}
      swipeable={true}
      interval={2000}
      dynamicHeight={false}
      emulateTouch={true}
      animationHandler={true}
      width={300}
      thumbWidth={45}
    >
      <div>
        <img
          src={img2}
          alt="img 2"
          className='img__carrusel'
        />
      </div>
      <div>
        <img
          src={img3}
          alt="img 3"
          className='img__carrusel'
        />
      </div>
      <div>
        <img
          src={img4}
          alt="img 4"
          className='img__carrusel'
        />
      </div>
      <div>
        <img
          src={img5}
          alt="img 5"
          className='img__carrusel'
        />
      </div>
      <div>
        <img
          src={img6}
          alt="img 6"
          className='img__carrusel'
        />
      </div>
    </Carousel>
  );
}

export default Carrusel;