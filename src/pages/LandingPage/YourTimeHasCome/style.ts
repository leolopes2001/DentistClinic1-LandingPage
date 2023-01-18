import styled from 'styled-components';
import { LinkStyled } from '../../../components/common/Link/style';
import { Text } from '../../../components/common/Text/style';
import Title from '../../../components/common/Title';
import { BaseTitle } from '../../../components/common/Title/style';
import convertToRem from '../../../utils/convertToRem';

export const StyledSection = styled.section`
  overflow: hidden;
  padding-top: 5rem;
  background-color: ${({ theme }) => theme.colors.background};
  margin-bottom: 28px;

  > .content {
    min-width: 0;

    @media (min-width: 1000px) {
      display: grid;
      grid-template-columns: 600px 1.2fr;
      grid-template-rows: 1fr;
    }

    @media (min-width: 1200px) {
      gap: 5rem;
    }
  }

  .container_img {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .box_img {
    max-width: ${convertToRem(229.69)};
    min-width: ${convertToRem(229.69)};
    max-height: ${convertToRem(229.69)};
    min-height: ${convertToRem(229.69)};
    background: ${({ theme }) => theme.colors.background2};
    border-radius: 50%;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    text-align: center;

    .doctor {
      transform: translateX(-20px);
    }

    .icon-one,
    .icon-two,
    .icon-three,
    .icon-four {
      position: absolute;
    }

    .icon-one {
      top: ${convertToRem(-0)};

      right: ${convertToRem(-42)};
      min-width: ${convertToRem(100)};
      z-index: 999;
      width: 109.07px;
      height: 99.82px;

      label,
      p {
        font-family: 'Red Hat Display';
        font-style: normal;
        font-weight: 500;
        font-size: 11.0916px;
        line-height: 15px;
        text-align: center;
        color: #373f43;
        width: 88.12px;
      }
      p {
        width: 90px;
      }

      @media (min-width: 1200px) {
        top: ${convertToRem(-20)};
        right: ${convertToRem(-20)};
        right: ${convertToRem(-42)};
        min-width: ${convertToRem(100)};
        z-index: 999;
        width: ${convertToRem(177)};
        height: ${convertToRem(162)};

        label,
        p {
          font-weight: 400;
          font-size: ${convertToRem(18)};
          width: 100%;
          line-height: ${convertToRem(24)};
        }
      }
    }

    .icon-two {
      bottom: ${convertToRem(10)};
      right: ${convertToRem(-13)};
      z-index: 999;

      @media (min-width: 1200px) {
        bottom: ${convertToRem(10)};
        right: ${convertToRem(2)};
      }
    }
    .icon-three {
      top: ${convertToRem(6)};
      left: ${convertToRem(10)};
    }

    .icon-four {
      width: 155.28px;
      height: 70.86px;
      left: ${convertToRem(-45)};

      background: #ffffff;
      border-radius: 14.7888px;

      display: flex;
      align-items: center;
      gap: 8px;
      padding: 0.5rem;
      border-radius: ${convertToRem(24)};
      background-color: ${({ theme }) => theme.colors.whiteFixed};

      .img {
        width: 30.81px;
        height: 30.81px;
        background: ${({ theme }) => theme.colors.grey5};
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 0.7rem;
      }

      .text {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;

        h6 {
          font-family: 'Inter';
          font-style: normal;
          font-weight: 700;
          font-size: 25.8803px;
          line-height: 31px;
          font-size: ${convertToRem(25.8803)};
          line-height: ${convertToRem(31)};
          color: ${({ theme }) => theme.colors.blackFixed};
        }
        p {
          font-family: 'Inter';
          font-style: normal;
          font-weight: 500;
          font-size: ${convertToRem(11.0916)};
          line-height: ${convertToRem(13)};
          color: ${({ theme }) => theme.colors.grey4};
        }
      }

      @media (min-width: 1200px) {
        left: ${convertToRem(-40)};

        width: ${convertToRem(252)};
        height: ${convertToRem(115)};
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: 0.5rem;
        border-radius: ${convertToRem(24)};
        background-color: ${({ theme }) => theme.colors.whiteFixed};

        .img {
          width: 50px;
          height: 50px;
          background: ${({ theme }) => theme.colors.grey5};
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1rem;
        }

        .text {
          h6 {
            font-size: ${convertToRem(42)};
            line-height: ${convertToRem(51)};
          }

          p {
            font-size: ${convertToRem(18)};
            line-height: ${convertToRem(22)};
          }
        }
      }
    }

    @media (min-width: 1200px) {
      max-width: ${convertToRem(450)};
      min-width: ${convertToRem(450)};
      max-height: ${convertToRem(450)};
      min-height: ${convertToRem(450)};

      .doctor {
        transform: translateX(-2px);
      }

      .icon-one {
        top: ${convertToRem(0)};
        right: ${convertToRem(-42)};
        min-width: ${convertToRem(100)};
        z-index: 999;
        width: ${convertToRem(177)};
        height: ${convertToRem(162)};

        label,
        p {
          font-weight: 400;
          font-size: ${convertToRem(18)};
          width: 100%;
          line-height: ${convertToRem(24)};
        }
      }

      .icon-three {
        top: 6px;
        left: ${convertToRem(15)};
        z-index: 999;
      }

      .icon-four {
      }
    }
  }
`;

export const GridHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.5 1fr 1fr 1fr;
  width: 100%;

  ${Text} {
    max-width: 482px;
    margin: 8px 0px 16px 0;

    @media (min-width: 1200px) {
      height: 136px;
      margin: 0px 0px 26px 0px;
    }
  }

  > ${BaseTitle} {
    width: 247px;
    height: 80px;
    margin-top: 16px;
    @media (min-width: 1200px) {
      width: 585px;
      height: 160px;
      margin-top: 42px;
      margin-bottom: 16px;
      line-height: 80px;
    }
  }

  ${LinkStyled} {
    font-weight: 600;
    padding: 0; 
    width: 162px;
    height: 48px;
    border-radius: 16px;
    svg {
      transform: translateX(16px);
      margin-top: 1px;
    }
    @media (min-width: 1200px) {
      width: 207px;
      height: 63px;
    }
  }

  @media (min-width: 320px) {
    p {
      min-width: ${convertToRem(280)};
    }
  }

  @media (max-width: 1000px) {
    margin-top: ${convertToRem(43)};
  }
`;
