import { Slide, Slider, SliderProps } from '..';
import { services } from '../../../components-mock.json';
import CardService from '../../../pages/LandingPage/ClinicServices/CardService';

const ServicesSlider = () => {
  const settings: SliderProps = {
    spaceBetween: 50,
    navigation: true,
    pagination: { clickable: true },
    loop: true,
    breakpoints: {
      200: {
        slidesPerView: 1,
      },
      540: {
        slidesPerView: 2,
      },
      780: {
        slidesPerView: 3,
      },
    },
  };

  return (
    <Slider variant='type1' settings={settings}>
      {services.map((el) => (
        <Slide key={el.service}>
          <CardService {...el}></CardService>
        </Slide>
      ))}
    </Slider>
  );
};

export default ServicesSlider;
