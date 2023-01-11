import { GridHeader, StyledSection } from './style';
import DoctorMobile from '../../../assets/svg/common/doctor.svg';
import Title from '../../../components/common/Title';
import { Text } from '../../../components/common/Text/style';
import Button from '../../../components/common/Button';
import Link from '../../../components/common/Link';
import CircleIcon from '../../../components/CircleIcon';

const YourTimeHasCome = () => {
  return (
    <StyledSection>
      <div className='content'>
        <div className='container_img'>
          <div className='box_img' data-aos='fade-up'>
            {/* <CircleIco></CircleIcon> */}
            <img src={DoctorMobile} alt='Doctor' className='doctor' />
          </div>
        </div>

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
          <Link href='' variant='primary'>
            Eu Quero
          </Link>
        </GridHeader>
      </div>
    </StyledSection>
  );
};

export default YourTimeHasCome;
