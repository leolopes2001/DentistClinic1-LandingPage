import CircleIcon from '../CircleIcon';
import { CircleIconType, SizeType } from '../CircleIcon/CircleIcon';
import { Container } from './style';

export type ContainerVaritantType = 'one' | 'two' | "three";

interface ICircleIconPlus {
  variant: ContainerVaritantType;
  label?: string;
  text1?: string;
  text2?: string;
  icon: CircleIconType;
  size: SizeType;
  className?: string;
}

const CircleIconPlus = ({
  variant,
  label,
  text1,
  text2,
  icon,
  size,
  ...rest
}: ICircleIconPlus) => {
  return (
    <Container variant={variant} size={size} {...rest} data-aos='fade-up'>
      <CircleIcon icon={icon} size={size} animation={false} />
      <div className='content_box'>
        {!!text1 && <p className='text'>{text1}</p>}
        {!!label && (
          <label className='label'>
            <strong>{label}</strong>
          </label>
        )}

        {!!text2 && <p className='text'>{text2}</p>}
      </div>
    </Container>
  );
};
export default CircleIconPlus;
