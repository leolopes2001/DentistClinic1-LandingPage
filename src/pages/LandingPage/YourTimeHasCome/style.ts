import styled from 'styled-components';
import convertToRem from '../../../utils/convertToRem';

export const StyledSection = styled.section`
background-color: ${({theme}) => theme.colors.background};
  overflow: hidden;
  > .content {
    min-width: 0;

    @media (min-width: 1000px) {
      display: grid;
      grid-template-columns: 600px 1.2fr;
      grid-template-rows: 1fr;
      gap: 5rem;
    }
  }

  .container_img {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .box_img {
    max-width: 229.69px;
    min-width: 229.69px;
    max-height: 229.69px;
    min-height: 229.69px;
    background: #f1fffc;
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
      top: -20px;
      right: -20px;
      min-width: 100px;
    }

    .icon-one,
    .icon-two,
    .icon-three,
    .icon-four {
      position: absolute;
    }

    .icon-two {
      bottom: 10px;
      right: 2px;
      z-index: 999;
    }
    .icon-three {
      top: 10px;
      left: 10px;
    }

    .icon-four {
      left: -40px;
      width: 134px;
      height: 62px;
      display: flex;
      gap: 1rem;
      padding: 0.5rem;
      border-radius: 24px;
      background-color: ${({ theme }) => theme.colors.whiteFixed};
      .img {
        display: flex;
        align-items: center;
        justify-content: center;
        min-width: 44.26px;
        height: 36px;

        img {
          border-radius: 50%;
          height: 35px;
          padding: 0.5rem;
          background: #49545a;
        }
      }

      .text {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-evenly;

        h6 {
          font-weight: 700;
          font-size: 16px;
          line-height: 19px;
          color: #000000;
        }
        p {
          font-weight: 500;
          font-size: 12px;
          line-height: 15px;
          color: #3d3d3d;
        }
      }
    }

    @media (min-width: 1200px) {
      max-width: 450px;
      min-width: 450px;
      max-height: 450px;
      min-height: 450px;

      .doctor {
        transform: translateX(-2px);
      }

      .icon-one {
        top: -50px;
        right: -60px;
        min-width: 100px;
        z-index: 999;

        width: 177px;
        height: 162px;
        label,
        p {
          font-weight: 400;
          font-size: 18px;
          width: 100%;
          line-height: 24px;
        }
      }

      .icon-two {
        bottom: 10px;
        right: 15px;
      }

      .icon-three {
        top: 10px;
        left: 15px;
        z-index: 999;
      }

      .icon-four {
        width: 252px;
        height: 115px;

        .img {
          height: 100%;

          img {
            width: 40px;
            min-width: 40px;
            min-height: 50px;
          }
        }

        .text {
          h6 {
            font-size: 36px;
            line-height: 51px;
          }

          p {
            font-size: 18px;
            line-height: 22px;
          }
        }
      }
    }
  }
`;

export const GridHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.5 1fr 1fr;
  width: 100%;
  margin-top: ${convertToRem(43)};
  padding: 1rem;
  & > .general_clinic_title {
    margin-top: 1rem;
    width: 100%;
    min-width: 600px;
    height: auto;
    
    @media (max-width: 1260px){
      min-width: 500px;

    }
  }
`;
