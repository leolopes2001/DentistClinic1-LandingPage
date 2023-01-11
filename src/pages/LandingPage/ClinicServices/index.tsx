import { Text } from '../../../components/common/Text/style';
import Title from '../../../components/common/Title';
import ServicesSlider from '../../../components/Slider/ServicesSlider';
import useWindowSize from '../../../hooks/useWindowSize';
import CardService from './CardService';
import { GridHeader, SectionStyled } from './style';

const ClinicServices = () => {
  const [width] = useWindowSize();

  return (
    <SectionStyled>
      <div className='content'>
        <GridHeader>
          <div>
            <Title tag='h3' variant='title2' main_title={true}>
              Clínica Geral
            </Title>
          </div>
          <Title tag='h3' variant='title3' className='general_clinic_title'>
            Veja nossos tratamentos
          </Title>
          <Text variant='text2' data-aos='fade-left'>
            Cuidamos da sua saúde bucal e oferecemos todos os tratamentos
            odontológicos que você precisa.
          </Text>
        </GridHeader>

        {width > 1200 ? (
          <ul className='list_servies'>
            <CardService></CardService>
            <CardService></CardService>
            <CardService></CardService>
            <CardService></CardService>
            <CardService></CardService>
            <CardService></CardService>
  
          </ul>
        ) : (
          <ServicesSlider />
        )}
      </div>
    </SectionStyled>
  );
};
export default ClinicServices;
