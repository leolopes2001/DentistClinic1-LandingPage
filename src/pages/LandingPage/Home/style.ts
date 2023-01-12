import styled from 'styled-components';
import convertToRem from '../../../utils/convertToRem';

export const HomeStyled = styled.main`
  width: 100%;
  min-height: 100vh;
  max-height: 100vh;

  overflow: hidden;

  background-color: #F5FFFD;
  
  & > .content{
    
    background-color: #F5FFFD;
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
      width: 198px;
      height: 100px;
      top: 80%;
      left: 30%;
      p {
        font-weight: 500;
        font-size: 18px;
        line-height: 16px;
        color: #3d3d3d;
        width: 100px;
      }

      label {
        font-weight: 700;
        font-size: 34px;
        line-height: 51px;
        color: #000000;
      }

    
    }
  }

  min-height: 92vh;
  max-height: 92vh;
  transform: translateY(8vh);

  /* overflow: hidden; */
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background};
  position: relative;
  padding-left: 1rem;
  padding-top: ${convertToRem(32)};
`;
