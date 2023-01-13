import { Text } from '../../../components/common/Text/style';
import Title from '../../../components/common/Title';
import ServicesSlider from '../../../components/Slider/ServicesSlider';
import useWindowSize from '../../../hooks/useWindowSize';
import CardService from './CardService';
import { GridHeader, SectionStyled } from './style';
import { services } from '../../../components-mock.json';
import { RefObject } from 'react';

const ClinicService = ({
  innerRef,
  id,
}: {
  id: string;
  innerRef: RefObject<HTMLElement>;
}) => {
  const [width] = useWindowSize();

  return (
    <SectionStyled ref={innerRef} id={id}>
      <div className='content'>
        <GridHeader>
          <div>
            <Title tag='h3' variant='title2' main_title={true}>
              Clínica Geral
            </Title>
          </div>
          <Title tag='h3' variant='title3' className='general_clinic_title'>
            Veja os nossos tratamentos
          </Title>
          <Text variant='text2' data-aos='fade-left'>
            Cuidamos da sua saúde bucal e oferecemos todos os tratamentos
            odontológicos que você precisa.
          </Text>
        </GridHeader>

        {width > 1200 ? (
          <ul className='list_servies'>
            {services.map((el) => (
              <CardService key={el.service} {...el} />
            ))}
          </ul>
        ) : (
          <ServicesSlider />
        )}
      </div>
    </SectionStyled>
  );
};
export default ClinicService;
