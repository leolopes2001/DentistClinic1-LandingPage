import { Slide, Slider, SliderProps } from '..';
import { pacients_cards_slider } from '../../../components-mock.json';
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
      <Slide>
        <CardService></CardService>
      </Slide>
      <Slide>
        <CardService></CardService>
      </Slide>
      <Slide>
        <CardService></CardService>
      </Slide>
      {/* {pacients_cards_slider.map((el: { name: string }) => (
        <Slide key={el.name}>{el.name}</Slide>
      ))} */}
    </Slider>
  );
};

export default ServicesSlider;
