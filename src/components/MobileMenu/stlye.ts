import styled, { css } from 'styled-components';
import convertToRem from '../../utils/convertToRem';
import { ButtonStyled } from '../common/Button/style';

export const MobileMenuStyled = styled(ButtonStyled)<{
  isSideBarOpen: boolean;
}>`
  display: inline-block;
 
  .line-menu {
    width: ${convertToRem(32)};
    height: ${convertToRem(2)};
    margin: ${convertToRem(8)};
    transition: all 300ms;
    background-color: ${({theme}) => theme.colors.blackFixed};
  }

  &:hover > .line-menu {
    background-color: ${({theme}) => theme.colors.primary};
  }

  ${({ isSideBarOpen }) =>
    isSideBarOpen &&
    css`
      & > .line1 {
        transform: rotate(-45deg) translate(-8px, 8px);
      }
      & > .line2 {
        opacity: 0;
      }
      & > .line3 {
        transform: rotate(45deg) translate(-5px, -7px);
      }
    `}
`;
