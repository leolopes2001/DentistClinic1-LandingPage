import Logo from '../../assets/svg/common/logo3.svg';
import { clinic_name, clinic_surname } from '../../components-mock.json';
import { Container } from './style';

export const MiniLogo = () => {
  return (
    <Container>
      <img src={Logo} alt='Logo company' />
      <h1>
        {clinic_name}<span>{clinic_surname}</span>
      </h1>
    </Container>
  );
};
