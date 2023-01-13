import { Swiper } from 'swiper/react';
import { ReactNode } from 'react';
import { A11y, Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { SliderWrap } from './style';
import { SliderProps } from '.';

interface ISliderProps {
  settings: SliderProps;
  children: ReactNode;
  variant: 'type1' | 'type3' | 'type4' | 'type5';
}

const Slider = ({ variant, settings, children }: ISliderProps) => {
  return (
    <SliderWrap variant={variant} data-aos='fade-up'>
      <Swiper modules={[Navigation, Pagination, A11y]} {...settings}>
        {children}
      </Swiper>
    </SliderWrap>
  );
};

export default Slider;
