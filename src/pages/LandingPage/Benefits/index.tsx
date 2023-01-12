import { Text } from '../../../components/common/Text/style';
import Title from '../../../components/common/Title';
import BenefitsSlider from '../../../components/Slider/BenefitsSlider';
import useWindowSize from '../../../hooks/useWindowSize';
import CardBenefit, { ICardBenefit } from './CardBenefit';
import { GridHeader, SectionStyled } from './style';

import { benefits } from '../../../components-mock.json';

const Benefits = () => {
  const [width] = useWindowSize();

  return (
    <SectionStyled>
      <div className='content'>
        <GridHeader>
          <div>
            <Title tag='h3' variant='title2' main_title={true}>
              Na clínica Agenda Consulta
            </Title>
          </div>
          <Title tag='h3' variant='title3' className='general_clinic_title'>
            Benefícios e facilidades
          </Title>
          <Text variant='text2' data-aos='fade-left'>
            Você pode desfrutar de tratamentos em nossa clínica com vários
            recursos que vão facilitam cuidar da sua saúde bucal.
          </Text>
        </GridHeader>

        {width > 1200 ? (
          <ul className='list_servies'>
            {benefits.map((el) => (
              <CardBenefit key={el.id} {...(el as ICardBenefit)} />
            ))}
          </ul>
        ) : (
          <BenefitsSlider />
        )}
      </div>
    </SectionStyled>
  );
};
export default Benefits;
