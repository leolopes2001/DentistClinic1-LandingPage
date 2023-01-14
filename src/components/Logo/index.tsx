import Title from '../common/Title';
import {
  clinic_name,
  clinic_surname,
  company_logo_exists,
} from '../../components-mock.json';
import { ReactComponent as DefaultCompanyLogo } from '../../assets/svg/common/defaultCompanyLogo.svg';
import CompanyLogo from '../../assets/svg/common/companyLogo.svg';

import { LogoStyled } from './style';

interface ILogo {
  className?: string;
  style?: React.CSSProperties;
  animation?: boolean;
  isHome?: boolean;
}
const Logo = ({ animation = true, isHome = false, ...rest }) => {
  const getAnimation = () => animation && { 'data-aos': 'fade-right' };

  return (
    <LogoStyled
      {...getAnimation()}
      company_logo_exists={company_logo_exists}
      {...rest}
    >
      <div className='container_img_logo'>
        {company_logo_exists ? (
          <img
            src={CompanyLogo}
            alt='Company Lgo'
            className={isHome ? 'home' : ''}
          />
        ) : (
          <DefaultCompanyLogo className={isHome ? 'home' : ''} />
        )}
      </div>

      <Title variant='logo' tag='h1'>
        {clinic_name}
        <span>{clinic_surname}</span>
      </Title>
    </LogoStyled>
  );
};

export default Logo;
