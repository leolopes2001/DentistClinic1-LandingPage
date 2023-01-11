import { GridHeader, StyledSection } from './style';
import DoctorMobile from '../../../assets/svg/common/doctor.svg';
import Title from '../../../components/common/Title';
import { Text } from '../../../components/common/Text/style';
import Button from '../../../components/common/Button';
import Link from '../../../components/common/Link';
import CircleIcon from '../../../components/CircleIcon';
import VideoSlider from '../../../components/Slider/VideoSlider';
import ProfessionalSlider from '../../../components/Slider/ProfessionalsSlider';
import PacientSaysSlider from '../../../components/Slider/PacientSaysSlider';

const PatientSay = () => {
  return (
    <StyledSection>
      <div className='content'>
        <GridHeader>
          <div>
            <Title tag='h3' variant='title2' main_title={true}>
              Opiniões de pacientes
            </Title>
          </div>
          <Title tag='h3' variant='title3' className='general_clinic_title'>
            Nosso serviços aos olhos dos pacientes
          </Title>
          <Text variant='text2' data-aos='fade-left'>
            Opiniões de nossos pacientes que passaram por serviços de saúde em
            nossa clínica.
          </Text>
        </GridHeader>

        <PacientSaysSlider />
      </div>
    </StyledSection>
  );
};

export default PatientSay;
