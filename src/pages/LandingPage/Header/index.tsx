
import Link from '../../../components/common/Link';
import MobileMenu from '../../../components/MobileMenu';
import useWindowSize from '../../../hooks/useWindowSize';
import { HeaderStyled, NavStyled } from './style';
import Phone from '../../../assets/svg/common/phone.svg';
import Title from '../../../components/common/Title';
import { navLiksData, address } from '../../../components-mock.json';
import Logo from '../../../components/Logo';

const Header = ({ sectionActive }: { sectionActive: string }) => {
  const [width] = useWindowSize();

  return (
    <HeaderStyled>
      {width > 1200 ? (
        <NavStyled className='content'>
          <Title variant='numberCompany' tag='h6'>
            <img src={Phone} alt='phone' />
            {address.phone}
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
          <Logo />
          <MobileMenu />
        </>
      )}
    </HeaderStyled>
  );
};

export default Header;
