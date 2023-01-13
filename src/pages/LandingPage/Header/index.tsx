import CompanyLogo from '../../../assets/svg/agendaConsultaLogo.svg';
import Link from '../../../components/common/Link';
import MobileMenu from '../../../components/MobileMenu';
import useWindowSize from '../../../hooks/useWindowSize';
import { HeaderStyled, Logo, NavStyled } from './style';
import Phone from '../../../assets/svg/common/phone.svg';
import Title from '../../../components/common/Title';
import { navLiksData } from '../../../components-mock.json';

const Header = ({ sectionActive }: { sectionActive: string }) => {
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
            {navLiksData.map(({ id, name }) => (
              <Link
                key={id}
                variant='navLink'
                href={`#${id}`}
                className={sectionActive === id ? 'active' : ''}
              >
                {name}
              </Link>
            ))}
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
