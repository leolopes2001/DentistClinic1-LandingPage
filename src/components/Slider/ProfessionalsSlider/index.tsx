import { Slide, Slider, SliderProps } from '..';
import Prof1 from '../../../assets/svg/slider/professionals/prof1.svg';
import Prof2 from '../../../assets/svg/slider/professionals/prof2.svg';
import Prof3 from '../../../assets/svg/slider/professionals/prof3.svg';

const ProfessionalSlider = () => {
  const settings: SliderProps = {
    spaceBetween: 80,
    slidesPerView: 1.5,
    pagination: {clickable: true},
    slidesPerGroup: 1,
    centeredSlides:true,
    initialSlide: 1,
    draggable: true,
    loop: true,
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
