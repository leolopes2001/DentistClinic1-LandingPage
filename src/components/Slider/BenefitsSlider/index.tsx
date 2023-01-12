import { Slide, Slider, SliderProps } from '..';
import CardBenefit, {
  ICardBenefit,
} from '../../../pages/LandingPage/Benefits/CardBenefit';
import { benefits } from '../../../../src/components-mock.json';

const BenefitsSlider = () => {
  const settings: SliderProps = {
    spaceBetween: 50,
    navigation: true,
    pagination: { clickable: true },
    centeredSlides: true,
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
      {benefits.map((el) => (
        <Slide key={el.id}>
          <CardBenefit {...(el as ICardBenefit)} />
        </Slide>
      ))}
    </Slider>
  );
};

export default BenefitsSlider;
