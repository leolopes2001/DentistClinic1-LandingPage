import { Slide, Slider, SliderProps } from '..';
import CardBenefit from '../../../pages/LandingPage/Benefits/CardBenefit';
const BenefitsSlider = () => {
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
    // <Slider variant='type1' settings={settings}>
    //   <Slide>
    //     <CardBenefit />
    //   </Slide>
    //   <Slide>
    //     <CardBenefit />
    //   </Slide>
    //   <Slide>
    //     <CardBenefit />
    //   </Slide>
    // </Slider>
    <></>
  );
};

export default BenefitsSlider;
