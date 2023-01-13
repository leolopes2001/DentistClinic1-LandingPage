import { IButtonProps } from './Button';
import { ButtonStyled } from './style';
const Button = ({ type = 'button', children, ...rest }: IButtonProps) => {
  return (
    <ButtonStyled type={type} {...rest}>
      {children}
    </ButtonStyled>
  );
};

export default Button;
