import { GridHeader, StyledSection } from './style';
import Title from '../../../components/common/Title';
import { Text } from '../../../components/common/Text/style';
import PacientSaysSlider from '../../../components/Slider/PacientSaysSlider';

const PatientSay = () => (
    <StyledSection>
      <div className='content'>
        <GridHeader>
          <div>
            <Title tag='h3' variant='title2' main_title={true}>
              Opiniões de pacientes
            </Title>
          </div>
          <Title tag='h3' variant='title3' className='general_title'>
            Nosso serviços aos olhos dos pacientes
          </Title>
          <Text variant='text2' data-aos='fade-left' >
            Opiniões de nossos pacientes que passaram por serviços de saúde em
            nossa clínica.
          </Text>
        </GridHeader>

        <PacientSaysSlider />
      </div>
    </StyledSection>
  );


export default PatientSay;
