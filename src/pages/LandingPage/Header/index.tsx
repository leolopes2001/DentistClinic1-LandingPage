import CompanyLogo from '../../../assets/svg/agendaConsultaLogo.svg';
import Link from '../../../components/common/Link';

import MobileMenu from '../../../components/MobileMenu';
import useWindowSize from '../../../hooks/useWindowSize';
import { Container, HeaderStyled, Logo, NavStyled } from './style';
import Phone from '../../../assets/svg/common/phone.svg';
import Title from '../../../components/common/Title';
const Header = () => {
  const [width] = useWindowSize();

  return (
    <HeaderStyled>
      {width > 1200 ? (
        <NavStyled className='content'>
          <Title variant='numberCompany' tag='h6'>
            <img src={Phone} alt='phone' />
            (37) 99119-7849
          </Title>

          <div>
            <Link variant='navLink' href=''>
              Home
            </Link>
            <Link variant='navLink' href=''>
              Tratamentos
            </Link>
            <Link variant='navLink' href=''>
              Dentista
            </Link>
            <Link variant='navLink' href=''>
              Agendamentos
            </Link>
            <Link variant='navLink' href=''>
              Como chegar
            </Link>
          </div>
        </NavStyled>
      ) : (
        <>
          <Logo>
            <img src={CompanyLogo} alt='Company Logo' />
            <Title variant='logo' tag='h1'>
              Agenda
              <span>Consulta</span>
            </Title>
          </Logo>
          <MobileMenu />
        </>
      )}
    </HeaderStyled>
  );
};

export default Header;
