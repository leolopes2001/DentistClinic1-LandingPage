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
            Depoimentos
          </Title>
        </div>
        <Title tag='h3' variant='title3' className='general_title'>
          Assista a depoimentos de clientes
        </Title>
        <Text variant='text2' data-aos='fade-left'>
          Gostamos de mostrar a alegria e felicidade dos pacientes que realizam
          tratamentos em nossa clínica. Queremos que você faça parte desta
          história.
        </Text>
        <Link href='' variant='primary'>
          Nosso YouTube
        </Link>
      </GridHeader>

      <VideoSlider />
    </div>
  </StyledSection>
);

export default Depositions;
