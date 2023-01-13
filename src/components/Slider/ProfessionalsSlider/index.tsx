import { SwiperOptions } from 'swiper';
import { Slide, Slider, SliderProps } from '..';
import Prof1 from '../../../assets/svg/slider/professionals/prof1.svg';
import Prof2 from '../../../assets/svg/slider/professionals/prof2.svg';
import Prof3 from '../../../assets/svg/slider/professionals/prof3.svg';
import Prof4 from '../../../assets/svg/slider/professionals/prof3.svg';
import { doctors_cards_slider } from '../../../components-mock.json';

const DoctorsImages = {
  0: Prof1,
  1: Prof2,
  2: Prof3,
  3: Prof4,
};

interface IGetSettins {
  breakpoints: SliderProps['breakpoints'];
  slidesPerView: SliderProps['slidesPerView'];
}

const getSettins = (): IGetSettins => {
  switch (doctors_cards_slider.length) {
    case 1:
      return { slidesPerView: 1, breakpoints: {} };
    case 2:
      return {
        slidesPerView: 1,
        breakpoints: {
          200: {
            spaceBetween: 50,
            slidesPerView: 1,
          },
          590: {
            centeredSlides: false,
            slidesPerView: 2,
          },
        },
      };
    case 3:
      return {
        slidesPerView: 1,
        breakpoints: {
          200: {
            spaceBetween: 50,
            slidesPerView: 1,
          },
          400: {
            spaceBetween: 50,
            slidesPerView: 1.5,
          },
          520: {
            spaceBetween: 30,
            slidesPerView: 1.8,
          },
          820: {
            spaceBetween: 50,
            slidesPerView: 3,
          },
        },
      };
    default:
      return {
        slidesPerView: 1.5,
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
  }
};

const ProfessionalSlider = () => {
  const settings: SliderProps = {
    pagination: { clickable: true },
    centeredSlides: true,
    initialSlide: 1,
    draggable: true,
    loop: true,
    slidesPerGroup: 1,
    ...getSettins(),
  };

  return (
    <Slider variant='type4' settings={settings}>
      {doctors_cards_slider.map(({ id, name }) => (
        <Slide key={id}>
          <div>
            <img src={DoctorsImages[id as 0 | 1 | 2 | 3]} alt='Doctor image' />
            {/* <p>{name}</p> */}
          </div>
        </Slide>
      ))}
    </Slider>
  );
};

export default ProfessionalSlider;
