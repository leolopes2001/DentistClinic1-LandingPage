import { Slide, Slider, SliderProps } from '..';
import { doctors_cards_slider } from '../../../components-mock.json';
import CardService from '../../../pages/LandingPage/ClinicServices/CardService';

import ImageSlide1 from '../../../assets/svg/slider/img1.png';
import ImageSlide2 from '../../../assets/svg/slider/img2.png';
import ImageSlide3 from '../../../assets/svg/slider/img3.webp';

const VideoSlider = () => {
  const settings: SliderProps = {
    spaceBetween: 40,
    slidesPerView: 1.5,
    slidesPerGroup: 1,
    initialSlide: 2,
    draggable: true,
    
    loop: true,
    
  };

  return (
    <Slider variant='type3' settings={settings}>
      <Slide>
        <div className='video_card'>
          <img src={ImageSlide2} alt='' />
        </div>
      </Slide>
      <Slide>
        <div className='video_card'>
          <img src={ImageSlide3} alt='' />
        </div>
      </Slide>
      <Slide>
        <div className='video_card'>
          <img src={ImageSlide1} alt='' />
        </div>
      </Slide>
    </Slider>
  );
};

export default VideoSlider;
