import { GridHeader, StyledSection } from './style';
import DoctorMobile from '../../../assets/svg/common/doctor.svg';
import Title from '../../../components/common/Title';
import { Text } from '../../../components/common/Text/style';
import Button from '../../../components/common/Button';
import Link from '../../../components/common/Link';
import CircleIcon from '../../../components/CircleIcon';
import VideoSlider from '../../../components/Slider/VideoSlider';
import ProfessionalSlider from '../../../components/Slider/ProfessionalsSlider';

const Professionals = () => {
  return (
    <StyledSection>
      <div className='content'>
        <GridHeader>
          <div>
            <Title tag='h3' variant='title2' main_title={true}>
              Profissionais
            </Title>
          </div>
          <Title tag='h3' variant='title3' className='general_clinic_title'>
            Vejas os seus dentistas
          </Title>
          <Text variant='text2' data-aos='fade-left'>
            Time formado por especialistas e profissionais experientesa.
          </Text>
          <Link href='' variant='primary'>
            Eu Quero
          </Link>
        </GridHeader>

        <ProfessionalSlider></ProfessionalSlider>
      </div>
    </StyledSection>
  );
};

export default Professionals;
