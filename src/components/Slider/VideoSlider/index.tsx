import { Slide, Slider, SliderProps } from '..';
import ImageSlide1 from '../../../assets/svg/slider/img1.png';
import ImageSlide2 from '../../../assets/svg/slider/img2.png';
import ImageSlide3 from '../../../assets/svg/slider/img3.webp';
import Link from '../../common/Link';


import { MdOutlineArrowForwardIos } from 'react-icons/md';
import { AiFillPlayCircle } from 'react-icons/ai';

import useWindowSize from '../../../hooks/useWindowSize';
const VideoSlider = () => {
  const [width] = useWindowSize();
  const settings: SliderProps = {
    spaceBetween: 10,
    slidesPerView: 1.4,

    slidesPerGroup: 1,
    initialSlide: 2,
    draggable: true,
    loop: true,
  };

  return (
    <Slider variant='type3' settings={settings}>
      <Slide>
        <div className='video_card'>
          <img src={ImageSlide1} alt='' />
          <Link variant='youtube'>
            <AiFillPlayCircle />
            Assista O Vídeo <MdOutlineArrowForwardIos />
          </Link>
        </div>
      </Slide>
      <Slide>
        <div className='video_card'>
          <img src={ImageSlide2} alt='' />
          <Link variant='youtube'>
            <AiFillPlayCircle />
            Assista O Vídeo <MdOutlineArrowForwardIos />
          </Link>
        </div>
      </Slide>
      <Slide>
        <div className='video_card'>
          <img src={ImageSlide3} alt='' />
          <Link variant='youtube'>
            <AiFillPlayCircle />
            Assista O Vídeo <MdOutlineArrowForwardIos />
          </Link>
        </div>
      </Slide>
    </Slider>
  );
};

export default VideoSlider;
