import { GridHeader, StyledSection } from './style';
import DoctorMobile from '../../../assets/svg/common/doctor.svg';
import DoctorDesktop from '../../../assets/svg/common/doctor_desktop.svg';
import Title from '../../../components/common/Title';
import { Text } from '../../../components/common/Text/style';
import Link from '../../../components/common/Link';
import { MdOutlineArrowForwardIos } from 'react-icons/md';
import CircleIcon from '../../../components/CircleIcon';
import useWindowSize from '../../../hooks/useWindowSize';
import CircleIconPlus from '../../../components/CircleIconPlus';
import VerifyDesktop from '../../../assets/svg//desktop/verify.svg';
import VerifyMobile from '../../../assets/svg/mobile/verify.svg';
import { IPages } from '..';

const YourTimeHasCome = ({ innerRef, id }: IPages) => {
  const [width] = useWindowSize();

  return (
    <StyledSection ref={innerRef} id={id}>
      <div className='content'>
        <div className='container_img'>
          <div className='box_img' data-aos='fade-up'>
            <CircleIconPlus
              variant='three'
              icon='addPerson'
              size={width > 1200 ? 'desktop' : 'mobile'}
              text1='Dr. Thiago'
              text2='Cirurgião dentista'
              className='icon-one'
            />
            <CircleIcon
              icon='brushing'
              size={width > 1200 ? 'home_desktop' : 'mobile'}
              className='icon-two'
            />
            <CircleIcon
              icon='mouth'
              size={width > 1200 ? 'home_desktop' : 'mobile'}
              className='icon-three'
            />

            <div className='icon-four' data-aos='fade-right'>
              <div className='img'>
                <img
                  src={width > 1200 ? VerifyDesktop : VerifyMobile}
                  alt='Verify icon'
                />
              </div>
              <div className='text'>
                <h6>100%</h6>
                <p>Garantido</p>
              </div>
            </div>

            <img
              src={width > 1200 ? DoctorDesktop : DoctorMobile}
              alt='Doctor'
              className='doctor'
            />
          </div>
        </div>

        <GridHeader>
          <div>
            <Title tag='h3' variant='title2' main_title={true}>
              A sua hora chegou!
            </Title>
          </div>
          <Title tag='h3' variant='title3'>
            Vamos Cuidar da sua Saúde Bucal
          </Title>
          <Text variant='text2' data-aos='fade-left'>
            Algumas pessoas pensam que escovar os dentes duas vezes ao dia é
            suficiente para manter os dentes e a boca saudáveis. Na verdade,
            você precisar visitar um dentista regularmente.
          </Text>
          <Link href='' variant={width > 1200 ? 'primary' : 'secondary'}>
            Eu Quero <MdOutlineArrowForwardIos />
          </Link>
        </GridHeader>
      </div>
    </StyledSection>
  );
};

export default YourTimeHasCome;
