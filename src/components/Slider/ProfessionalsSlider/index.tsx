import { Slide, Slider, SliderProps } from '..';
import Prof1 from '../../../assets/svg/slider/professionals/prof1.svg';
import Prof2 from '../../../assets/svg/slider/professionals/prof2.svg';
import Prof3 from '../../../assets/svg/slider/professionals/prof3.svg';

const ProfessionalSlider = () => {
  const settings: SliderProps = {
    slidesPerView: 1.5,
    pagination: { clickable: true },
    slidesPerGroup: 1,
    centeredSlides: true,
    initialSlide: 1,
    draggable: true,
    loop: true,
    breakpoints: {
      200: {
        spaceBetween: 50,
        slidesPerView: 1,
      },
      420: {
        spaceBetween: 50,
        slidesPerView: 1.5,
      },
      590: {
        slidesPerView: 1.8,
      },
      800: {
        slidesPerView: 2,
      },
      1000: {
        slidesPerView: 3,
      },
    },
  };

  return (
    <Slider variant='type4' settings={settings}>
      <Slide>
        <div>
          <img src={Prof1} alt='' />
        </div>
      </Slide>
      <Slide>
        <div>
          <img src={Prof2} alt='' />
        </div>
      </Slide>
      <Slide>
        <div>
          <img src={Prof3} alt='' />
        </div>
      </Slide>
    </Slider>
  );
};

export default ProfessionalSlider;
