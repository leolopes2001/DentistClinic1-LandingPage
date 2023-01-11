import styled from 'styled-components';
import convertToRem from '../../../utils/convertToRem';

export const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  top: 0;
  padding: 0 1rem;
  position: fixed;
  height: 8vh;
  background-color: ${({ theme }) => theme.colors.whiteFixed};
  width: 100%;
  z-index: 99999;

  @media (min-width: 1000px) {
    background-color: ${({ theme }) => theme.colors.background};
  }
`;

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
`;

export const NavStyled = styled.nav`
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  gap: ${convertToRem(50)};
  align-items: center;

  h6 {
    padding-right: ${convertToRem(130)};
    display: flex;
    align-items: center;
    gap: 1rem;

   
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;

  
`;
