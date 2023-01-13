import styled from 'styled-components';
import convertToRem from '../../../utils/convertToRem';

export const StyledSection = styled.section`
  overflow: hidden;
  padding-top: 5rem;
  background-color: ${({ theme }) => theme.colors.background};

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

    .icon-one {
      position: absolute;
      top: ${convertToRem(-20)};
      right: ${convertToRem(-20)};
      min-width: ${convertToRem(100)};
    }

    .icon-one,
    .icon-two,
    .icon-three,
    .icon-four {
      position: absolute;
    }

    .icon-two {
      bottom: ${convertToRem(10)};
      right: ${convertToRem(2)};
      z-index: 999;
    }
    .icon-three {
      top: ${convertToRem(10)};
      left: ${convertToRem(10)};
    }

    .icon-four {
      left: ${convertToRem(-40)};
      width: ${convertToRem(134)};
      height: ${convertToRem(62)};
      display: flex;
      gap: 1rem;
      padding: 0.5rem;
      border-radius: ${convertToRem(24)};
      background-color: ${({ theme }) => theme.colors.whiteFixed};
      .img {
        display: flex;
        align-items: center;
        justify-content: center;

        min-width: ${convertToRem(44.26)};
        height: ${convertToRem(36)};

        img {
          border-radius: 50%;
          height: ${convertToRem(35)};
          padding: 0.5rem;
          background: ${({ theme }) => theme.colors.grey5};
        }
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
          font-size: ${convertToRem(16)};
          line-height: ${convertToRem(19)};
          color: ${({ theme }) => theme.colors.blackFixed};
        }
        p {
          font-family: 'Inter';
          font-style: normal;
          font-weight: 500;
          font-size: ${convertToRem(12)};
          line-height: ${convertToRem(15)};
          color: ${({ theme }) => theme.colors.grey4};
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
        top: ${convertToRem(-50)};
        right: ${convertToRem(-60)};
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

      .icon-two {
        bottom: ${convertToRem(10)};
        right: ${convertToRem(15)};
      }

      .icon-three {
        top: ${convertToRem(10)};
        left: ${convertToRem(15)};
        z-index: 999;
      }

      .icon-four {
        width: ${convertToRem(252)};
        height: ${convertToRem(115)};

        .img {
          height: 100%;

          img {
            width: ${convertToRem(40)};
            min-width: ${convertToRem(40)};
            min-height: ${convertToRem(50)};
          }
        }

        .text {
          h6 {
            font-size: ${convertToRem(36)};
            line-height: ${convertToRem(51)};
          }

          p {
            font-size: ${convertToRem(18)};
            line-height: ${convertToRem(22)};
          }
        }
      }
    }
  }
`;

export const GridHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.5 1fr 1fr 1fr;
  width: 100%;

  padding: 1rem;

  p {
    max-width: ${convertToRem(220)};
  }

  & > .general_title {
    margin-top: 1rem;
    width: 100%;
    height: auto;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    max-width: ${convertToRem(270)};
    min-width: ${convertToRem(270)};
  }

  @media (min-width: 320px) {
    p {
      min-width: ${convertToRem(280)};
    }
  }

  @media (max-width: 1000px) {
    margin-top: ${convertToRem(43)};
  }

  @media (min-width: 1200px) {
    .general_title {
      min-width: ${convertToRem(500)};
    }

    p {
      min-width: ${convertToRem(450)};
      max-width: ${convertToRem(450)};
    }
  }
  @media (min-width: 1350px) {
    .general_title {
      min-width: ${convertToRem(600)};
    }

    p {
      min-width: ${convertToRem(506)};
    }
  }
`;
