import { IButtonProps } from './Button';
import { ButtonStyled } from './style';

const Button = ({
  variant = 'default',
  type = 'button',
  children,
  ...rest
}: IButtonProps) => {
  return (
    <ButtonStyled type={type} variant={variant} {...rest}>
      {children}
    </ButtonStyled>
  );
};

export default Button;
