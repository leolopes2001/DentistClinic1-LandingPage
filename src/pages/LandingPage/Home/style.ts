import styled from 'styled-components';
import { ButtonStyled } from '../../../components/common/Button/style';
import { LinkStyled } from '../../../components/common/Link/style';
import { Text } from '../../../components/common/Text/style';
import { BaseTitle } from '../../../components/common/Title/style';
import { LogoStyled } from '../../../components/Logo/style';
import convertToRem from '../../../utils/convertToRem';

export const HomeStyled = styled.main`
  width: 100%;
  min-height: 100vh;
  max-height: 100vh;

  overflow: hidden;

  background-color: ${({ theme }) => theme.colors.background2};

  > .content {
    background-color: ${({ theme }) => theme.colors.background2};
  }
`;

export const AsideDiv = styled.div`
  height: 92vh;
  top: 0;
  width: 31%;
  position: absolute;
  right: 0;

  div:nth-child(1) {
    left: 10%;

    bottom: 13%;
    position: absolute;
  }

  div:nth-child(2) {
    left: 30%;
    bottom: 40%;
    position: absolute;
  }

  background-color: ${({ theme }) => theme.colors.primary};

  @media (min-width: 1200px) {
    display: none;
  }
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-height: 100vh;
  max-height: 100vh;

  .icon-one {
    position: absolute;
    top: 60%;
    left: 30%;

    @media (min-width: 1200px) {
      display: none;
    }
  }
  .icon-two {
    position: absolute;
    top: 75%;
    left: 20%;

    @media (min-width: 1200px) {
      display: none;
    }
  }
  .icon-three {
    position: absolute;
    top: 89%;
    gap: 1rem;
    justify-content: space-between;

    @media (min-width: 1200px) {
      width: ${convertToRem(198)};
      height: ${convertToRem(100)};
      top: 80%;
      left: 31%;
      p {
        font-weight: 500;
        font-size: ${convertToRem(18)};
        line-height: ${convertToRem(16)};
        color: ${({ theme }) => theme.colors.grey4};
        width: ${convertToRem(100)};
      }

      label {
        font-weight: 700;
        font-size: ${convertToRem(34)};
        line-height: ${convertToRem(51)};
        color: ${({ theme }) => theme.colors.blackFixed};
      }
    }
  }

  min-height: 92vh;
  max-height: 92vh;
  transform: translateY(8vh);
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background};
  position: relative;
  padding-left: 1rem;

  ${LogoStyled} {
    margin-top: ${convertToRem(80)};
    margin-bottom: 21px;

    h1 {
      color: '#767676';
    }
  }

  > ${BaseTitle}{
    margin-top: 1rem;
  }

  > ${Text} {
    width: 262px;
    height: 60px;
    margin-top: 8px;
    @media (min-width: 1200px) {
      margin-top: 16px;
      width: 449px;
      height: 96px;
    }
  }

  ${LinkStyled} {
    margin-top: ${convertToRem(16)};
    border-radius: 10px;
    svg {
      transform: translateX(-8px);
    }
    @media (min-width: 1200px) {
      border-radius: 16px;
      margin-top: ${convertToRem(32)};
    }
  }
`;
