import { ILinkProps } from './Link';
import { LinkStyled } from './style';
import { clinic_link } from '../../../components-mock.json';

const Link = ({ href, variant, children, ...rest }: ILinkProps) => {
  return (
    <LinkStyled
      target={href ? '_self' : '_blank'}
      href={href ? href : clinic_link}
      variant={variant}
      {...rest}
    >
      {children}
    </LinkStyled>
  );
};

export default Link;
