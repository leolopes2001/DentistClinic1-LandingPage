import styled, { keyframes } from 'styled-components';
import convertToRem from '../../../../utils/convertToRem';

const fadeUp = keyframes`
  from{
    opacity: 0;
    transform: translate3d(0,70px, 0);
  }
  to{
    opacity: 1;
    transform: none;
  }
`;

const fadeScale = keyframes`
  from{
    opacity: 0;
    transform: translateX(100px);
  }
  to{
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Wrapper = styled.div`
  display: none;
  position: relative;
  animation: ${fadeUp} ease-in-out 1000ms;
  overflow-x: visible;

  @media (min-width: 1200px) {
    position: absolute;
    right: ${convertToRem(-250)};
    bottom: ${convertToRem(-4)};
    display: block;
    transition: all 500ms;

    img {
      width: 80%;
    }

    .svg-one {
      position: absolute;
      top: 0;
      top: -10%;
      right: 35%;
    }
    .svg-two {
      position: absolute;
      top: 68%;
      right: 28%;
    }

    .svg-one,
    .svg-two {
      position: absolute;
      animation: ${fadeScale} ease-in-out 1000ms;
      transition: all 600ms;
    }
  }

  @media (min-width: 1600px) {
    img {
      width: 100%;
    }

    .svg-one {
      right: 20%;
    }
    .svg-two {
      right: 10%;
    }
  }
`;
