import styled, { css } from 'styled-components';
import convertToRem from '../../utils/convertToRem';
import { SizeType } from './CircleIcon';

export const Wrapper = styled.div<{ size: SizeType }>`
  background-color: ${({ theme }) => theme.colors.whiteFixed};
  border-radius: 50%;
  display: grid;
  place-items: center;

  width: ${convertToRem(50)};
  height: ${convertToRem(50)};
 
  svg {
   
    path {
      fill: ${({ theme }) => theme.colors.primary};
    }

    fill: ${({ theme }) => theme.colors.primary};
  }

  ${({ size }) =>
    size === 'home_desktop' &&
    css`
      width: ${convertToRem(90)};
      height: ${convertToRem(90)};
    `}
`;
