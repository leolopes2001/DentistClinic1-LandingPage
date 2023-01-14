import styled, { css } from 'styled-components';
import convertToRem from '../../../utils/convertToRem';
import MaskTitle from './maskTitle';

const TitleVariant = {
  logo: css`
    font-weight: 700;
    font-size: ${convertToRem(18)};
    line-height: ${convertToRem(21)};
    text-transform: capitalize;
    margin-left: 0.2rem;
    color: ${({ theme }) => theme.colors.grey2};

    > span {
      color: ${({ theme }) => theme.colors.primary};
    }

    @media (min-width: 1200px) {
      margin-left: 0.4rem;
      font-size: ${convertToRem(28)};
    }
  `,

  title1: css`
    width: ${convertToRem(289)};
    position: relative;
    margin-bottom: ${convertToRem(12)};
    z-index: 999;
    font-weight: 700;
    font-size: ${convertToRem(32)};
    line-height: ${convertToRem(46)};
    color: ${({ theme }) => theme.colors.grey0};

    @media (min-width: 1200px) {
      font-size: ${convertToRem(58)};
      margin-top: 1rem;
      line-height: ${convertToRem(80)};
      width: ${convertToRem(688)};
    }
  `,

  title2: css`
    font-family: 'Red Hat Display';
    font-weight: 500;
    font-size: ${convertToRem(14)};
    line-height: ${convertToRem(19)};
    color: ${({ theme }) => theme.colors.grey2};
    @media (min-width: 1200px) {
      font-size: ${convertToRem(24)};
      line-height: ${convertToRem(32)};
    }
  `,

  title3: css`
    font-weight: 700;
    font-size: ${convertToRem(28)};
    line-height: ${convertToRem(40)};
    color: ${({ theme }) => theme.colors.grey2};

    @media (min-width: 1200px) {
      font-size: ${convertToRem(56)};
      line-height: ${convertToRem(72)};
    }
  `,

  title4: css`
    width: ${convertToRem(77)};
    height: ${convertToRem(16)};
    font-weight: 700;
    font-size: ${convertToRem(12)};
    line-height: ${convertToRem(16)};
    color: ${({ theme }) => theme.colors.grey2};

    @media (min-width: 1200px) {
      font-size: ${convertToRem(24)};
      line-height: ${convertToRem(32)};
      width: ${convertToRem(272)};
    }
  `,

  title5: css`
    font-weight: 700;
    font-size: ${convertToRem(16)};
    line-height: ${convertToRem(21)};
    color: ${({ theme }) => theme.colors.grey2};

    @media (min-width: 900px) {
      font-size: ${convertToRem(20)};
      line-height: ${convertToRem(26)};
    }
  `,

  title6: css`
    font-weight: 700;
    font-size: ${convertToRem(18)};
    line-height: ${convertToRem(24)};
    color: ${({ theme }) => theme.colors.grey5};

    @media (min-width: 1200px) {
      font-size: ${convertToRem(28)};
      line-height: ${convertToRem(37)};
    }
  `,

  numberCompany: css`
  
    font-weight: 400;
    font-size: ${convertToRem(20)};
    line-height: ${convertToRem(26)};
    text-align: center;
    min-width: ${convertToRem(340)};
    max-width: ${convertToRem(340)};
    color: ${({ theme }) => theme.colors.grey5};
  `,
};

export const Wrapper = styled.div`
  > .box_title {
    display: flex;
    align-items: center;
  }

  .circle {
    width: ${convertToRem(8)};
    height: ${convertToRem(8)};
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.primary};
    margin-right: ${convertToRem(8)};
  }

  > .line {
    min-width: ${convertToRem(240)};
    width: 60%;
    max-width: ${convertToRem(240)};
    margin-top: ${convertToRem(10)};
    height: ${convertToRem(1)};
    background-color: ${({ theme }) => theme.colors.primary};

    @media (min-width: 600px) {
      min-width: ${convertToRem(250)};
      width: 50%;
      max-width: ${convertToRem(250)};
    }

    @media (min-width: 1200px) {
      min-width: ${convertToRem(300)};
      width: 65%;
      max-width: ${convertToRem(600)};
    }
  }
`;

export const BaseTitle = styled(MaskTitle)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: 'Raleway';
  font-style: normal;
  ${({ variant }) => TitleVariant[variant]}
`;
