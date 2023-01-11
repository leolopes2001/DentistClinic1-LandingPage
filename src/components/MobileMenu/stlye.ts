import styled, { css } from 'styled-components';
import { ButtonStyled } from '../common/Button/style';

export const MobileMenuStyled = styled(ButtonStyled)<{
  isSideBarOpen: boolean;
}>`
  display: inline-block;
 
  .line-menu {
    width: 32px;
    height: 2px;
    margin: 8px;
    transition: 0.3s;
    background-color: black;
  }

  &:hover > .line-menu {
    background-color: red;
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
