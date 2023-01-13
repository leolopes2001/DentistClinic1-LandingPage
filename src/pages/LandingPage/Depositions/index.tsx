import { GridHeader, StyledSection } from './style';
import Title from '../../../components/common/Title';
import { Text } from '../../../components/common/Text/style';
import Link from '../../../components/common/Link';
import VideoSlider from '../../../components/Slider/VideoSlider';
import { IPages } from '..';

const Depositions = ({ innerRef }: IPages) => (
  <StyledSection ref={innerRef}>
    <div className='content'>
      <GridHeader className='grid'>
        <div>
          <Title tag='h3' variant='title2' main_title={true}>
            Clínica Geral
          </Title>
        </div>
        <Title tag='h3' variant='title3' className='general_title'>
          Veja nossos tratamentos
        </Title>
        <Text variant='text2' data-aos='fade-left'>
          Cuidamos da sua saúde bucal e oferecemos todos os tratamentos
          odontológicos que você precisa.
        </Text>
        <Link href='' variant='primary'>
          Eu Quero
        </Link>
      </GridHeader>

      <VideoSlider />
    </div>
  </StyledSection>
);

export default Depositions;
