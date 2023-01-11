import styled, { css } from 'styled-components';

export const SideBarStyled = styled.aside<{
  isSideBarOpen: boolean;
  variant: "main_side_bar";
}>`
  position: fixed;
  top: 8vh;
  left: 0;
  height: 92vh;
  width: 50vw;
  background-color: red;
  transform: translateX(-100%);
  transition: transform 0.5s ease-in;
  z-index: 9999;
  overflow: hidden;
  
  ${({ isSideBarOpen }) =>
    isSideBarOpen &&
    css`
      transform: translateX(0);
    `}
`;

export const Overlay = styled.div<{ isSideBarOpen: boolean }>`
  position: fixed;
  inset: 0;
  top: 8vh;
  width: 100%;
  height: 92vh;
  transition: background-color 200ms;

  ${({ isSideBarOpen }) =>
    isSideBarOpen &&
    css`
      z-index: 100;
      background-color: rgba(0, 0, 0, 0.3);
    `}
`;
