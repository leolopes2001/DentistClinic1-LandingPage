import { Wrapper } from './style';
import Human from '.././../../../assets/svg/home_desktop/human.svg';
import ToothCare from '../../../../assets/svg/home_desktop/toothCare.svg';
import CircleIcon from '../../../../components/CircleIcon';
const HumanImage = () => {
  return (
    <Wrapper>
      <img src={Human} alt='Human image' />
      <CircleIcon
        icon='toothCare'
        size='home_desktop'
        animation={false}
        className='svg-one'
      />
      <CircleIcon
        icon='toothSpatula'
        size='home_desktop'
        animation={false}
        className='svg-two'
      />

    </Wrapper>
  );
};

export default HumanImage;
