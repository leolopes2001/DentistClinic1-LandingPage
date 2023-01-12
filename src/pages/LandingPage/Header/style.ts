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

  @media (min-width: 1200px) {
    background-color: #f5fffd;
  }
`;

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
`;

export const NavStyled = styled.nav`
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  justify-content: space-between;
  align-items: center;

  > div {
    display: flex;
    align-items: center;
    gap: 60px;
    justify-content: end;
  }

  h6 {
    padding-right: ${convertToRem(130)};
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  @media (min-width: 1200px) {
    background-color: #f5fffd;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
`;
