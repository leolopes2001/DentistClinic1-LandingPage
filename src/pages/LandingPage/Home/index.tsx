import { AsideDiv, Container, HomeStyled } from './style';
import { Text } from '../../../components/common/Text/style';
import Link from '../../../components/common/Link';
import CircleIcon from '../../../components/CircleIcon';
import CircleIconPlus from '../../../components/CircleIconPlus';
import { MdOutlineArrowForwardIos } from 'react-icons/md';
import HumanImage from './HumanImage';
import Title from '../../../components/common/Title';
import { Logo } from '../Header/style';
import CompanyLogo from '../../../assets/svg/agendaConsultaLogo.svg';
import useWindowSize from '../../../hooks/useWindowSize';
import { IPages } from '..';

const Home = ({ innerRef, id }: IPages) => {
  const [width] = useWindowSize();
  return (
    <HomeStyled ref={innerRef} id={id}>
      <Container className='content'>
        {width > 1200 && (
          <Logo data-aos='fade-right' style={{ paddingTop: '4rem' }}>
            <img
              src={CompanyLogo}
              alt='Company Logo'
              style={{ width: '45px' }}
            />
            <Title variant='logo' tag='h1'>
              Agenda
              <span>Consulta</span>
            </Title>
          </Logo>
        )}
        <Title variant='title1' tag='h3' data-aos='fade-right'>
          Faça um checkup odontológico hoje
        </Title>
        <Text variant='text1' data-aos='fade-right'>
          Vamos avaliar como está a sua saúde bucal com nossos dentistas
          especialistas e te indicar as melhores opções de tratamentos.
        </Text>
        <Link href='' variant='primary' data-aos='fade-left'>
          <MdOutlineArrowForwardIos /> Agendar Agora
        </Link>
        <CircleIconPlus
          variant='one'
          icon='tooth'
          size='mobile'
          label='Dennics'
          text2='Dental Care Clinic'
          className='icon-one'
        />
        <CircleIcon
          icon='toothCareRemoved'
          size='mobile'
          className='icon-two'
        />
        <CircleIconPlus
          variant='two'
          icon='randomLogo'
          size={width > 1200 ? 'desktop' : 'mobile'}
          text1='Clinica'
          label='N°1'
          text2='da cidade'
          className='icon-three'
        />
        <AsideDiv>
          <CircleIcon icon='toothCareRemoved' size='mobile' />
          <CircleIcon icon='clock' size='mobile' />
        </AsideDiv>
        <HumanImage />
      </Container>
    </HomeStyled>
  );
};

export default Home;
