import styled, { css } from 'styled-components';
import convertToRem from '../../../utils/convertToRem';
import MaskTitle from './maskTitle';

const TitleVariant = {
  logo: css`
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
    text-transform: capitalize;
    color: #373f43;

    > span {
      color: ${({ theme }) => theme.colors.primary};
    }

    @media (min-width: 1200px) {
      margin-left: 1rem;
      font-size: 28px;
    }
  `,

  title1: css`
    width: 289px;
    position: relative;
    margin-bottom: ${convertToRem(12)};
    z-index: 999;
    font-weight: 700;
    font-size: 32px;
    line-height: 46px;
    color: #2e3538;

    @media (min-width: 1200px) {
      font-weight: 700;
      font-size: 58px;
      margin-top: 1rem;
      line-height: 80px;
      color: #2e3538;
      width: 688px;
    }
  `,

  title2: css`
    font-weight: 500;
    font-size: 14px;
    line-height: 19px;
    color: #373f43;

    @media (min-width: 1200px) {
      font-weight: 500;
      font-size: 24px;
      line-height: 32px;
    }
  `,

  title3: css`
    width: 320px;
    font-weight: 700;
    font-size: 28px;
    line-height: 40px;
    color: #373f43;

    @media (min-width: 1200px) {
      font-weight: 700;
      font-size: 56px;
      line-height: 72px;
      width: 685px;
    }
  `,

  title4: css`
    width: 77px;
    height: 16px;
    left: 35px;
    top: 926px;
    font-weight: 700;
    font-size: 12px;
    line-height: 16px;
    color: #373f43;

    @media (min-width: 1200px) {
      font-weight: 700;
      font-size: 24px;
      line-height: 32px;
      width: 272px;
    }
  `,

  title5: css`
    font-weight: 700;
    font-size: 16px;
    line-height: 21px;
    color: #373f43;

    @media (min-width: 900px) {
      font-weight: 700;
      font-size: 20px;
      line-height: 26px;
      color: #373f43;
    }
  `,

  numberCompany: css`
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 26px;
    text-align: center;
    min-width: 340px;
    max-width: 340px;
    color: #49545a;
  `,
};

export const Wrapper = styled.div`
  > .box_title {
    display: flex;
    align-items: center;
  }

  .circle {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.primary};
    margin-right: 8px;
  }

  > .line {
    width: 50%;
    max-width: 500px;
    margin-top: 10px;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const BaseTitle = styled(MaskTitle)`
display: inline-flex;
align-items: center;
justify-content: center;
  ${({ variant }) => TitleVariant[variant]}
`;