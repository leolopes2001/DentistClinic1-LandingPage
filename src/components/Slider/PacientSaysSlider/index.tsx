import { Slide, Slider, SliderProps } from '..';
import { patients_opinion } from '../../../components-mock.json';
import CardPatient from './CardPatient';

const PacientSaysSlider = () => {
  const settings: SliderProps = {
    spaceBetween: 80,

    navigation: true,
    pagination: { type: 'progressbar' },
    loop: true,
    slidesPerView: 1,
    slidesPerGroup: 1,
    breakpoints: {
      900: {
        slidesPerView: 1.8,
      },
      1150: {
        slidesPerView: 2.3,
      },
      1350: {
        slidesPerView: 2.3,
      },
    },
  };

  return (
    <Slider variant='type5' settings={settings}>
      {patients_opinion.map((user) => (
        <Slide key={user.id}>
          <CardPatient {...user}/>
        </Slide>
      ))}
    </Slider>
  );
};

export default PacientSaysSlider;
