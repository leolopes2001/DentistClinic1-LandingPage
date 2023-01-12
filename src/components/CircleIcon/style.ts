import styled, { css } from 'styled-components';
import { SizeType } from './CircleIcon';
export const Wrapper = styled.div<{ size: SizeType }>`
  background-color: ${({ theme }) => theme.colors.whiteFixed};
  border-radius: 50%;
  display: grid;
  place-items: center;

  width: 50px;
  height: 50px;
 
  svg {
    path {
      fill: ${({ theme }) => theme.colors.primary};
    }

    fill: ${({ theme }) => theme.colors.primary};
  }

  ${({ size }) =>
    size === 'home_desktop' &&
    css`
      width: 90px;
      height: 90px;
    `}
`;
