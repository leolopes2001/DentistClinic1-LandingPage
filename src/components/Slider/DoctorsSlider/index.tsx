import { Slide, Slider, SliderProps } from '..';
import { doctors_cards_slider } from '../../../components-mock.json';
import CardService from '../../../pages/LandingPage/ClinicServices/CardService';
import { Content } from './style';
const DoctorsSlider = () => {
  const settings: SliderProps = {
    spaceBetween: 50,
    navigation: true,
    slidesPerView: 1,
    pagination: { clickable: true },
    draggable: true,
    loop: true,
    breakpoints: {
      200: {
        slidesPerView: 1,
      },
      600: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      },
    },
  };

  return (
    <Slider variant='type2' settings={settings}>
      <Slide>
        <CardService></CardService>
        <CardService></CardService>
      </Slide>
      {/* {doctors_cards_slider.map((el) => (
        <Slide  key={el.name}>
          <Content>
            <h4>{el.name}</h4>
          </Content>
        </Slide>
      ))} */}
    </Slider>
  );
};

export default DoctorsSlider;
