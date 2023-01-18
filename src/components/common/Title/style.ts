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
  logo_mini: css`

    
  `,

  title1: css`
    width: 289px;
    height: 92px;
    font-weight: 700;
    font-size: 32px;
    line-height: 46px;
    position: relative;
    z-index: 999;
    color: #2e3538;

    @media (min-width: 1200px) {
      width: 688px;
      height: 200px;
      font-size: 68px;
      line-height: 100px;
    }
  `,

  title2: css`
    font-family: 'Red Hat Display';
    font-style: normal;
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
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 40px;
    position: relative;
    z-index: 999;
    color: ${({ theme }) => theme.colors.grey2};

    @media (min-width: 1200px) {
      font-weight: 700;
      font-size: 56px;
      line-height: 92px;
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

    font-family: 'Red Hat Display';
    font-style: normal;
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

    @media (min-width: 1200px) {
      width: ${convertToRem(10)};
      height: ${convertToRem(10)};
      margin-right: ${convertToRem(10)};
    }
  }

  > .line {
    width: 150px;
    margin-top: ${convertToRem(8)};
    height: ${convertToRem(1)};
    background-color: ${({ theme }) => theme.colors.primary};

    @media (min-width: 1200px) {
      margin-top: ${convertToRem(16)};
      width: 250px;
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
