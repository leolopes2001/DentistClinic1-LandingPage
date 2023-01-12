import { ILinkProps } from './Link';
import { LinkStyled } from './style';

const Link = ({ href, variant, children, ...rest }: ILinkProps) => {
  return (
    <LinkStyled  href={href} variant={variant} {...rest}>
      {children}
    </LinkStyled>
  );
};

export default Link;
