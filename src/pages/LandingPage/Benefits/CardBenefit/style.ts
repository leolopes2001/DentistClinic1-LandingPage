import styled from 'styled-components';
import convertToRem from '../../../../utils/convertToRem';

export const LiStyled = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.2rem;

  a {
    margin-top: 0.5rem;
  }

  > p {
    width: 100%;
  }

  & > div {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;

    flex-direction: column;
    gap: 0.2rem;

    h4 {
      align-items: flex-start;
      justify-content: flex-start;
      width: ${convertToRem(302)};
      margin-top: 2rem;
    }
  }

  @media (max-width: 1200px) {
    min-width: 0%;
    width: 100%;
    justify-content: center;
    a {
      margin-top: 1rem;
      margin-bottom: 2rem;
    }
    > p {
      text-align: center;

      margin-top: ${convertToRem(4)};

      width: ${convertToRem(119)};
      height: ${convertToRem(32)};
    }

    justify-content: center;
    align-items: center;

    & > div {
      display: flex;
      align-items: center;
      justify-content: center;

      flex-direction: column;
      gap: 0.2rem;

      h4 {
        align-items: center;
        justify-content: center;
        width: ${convertToRem(302)};
        margin-top: 0rem;
      }
    }
  }

  @media (max-width: 324px) {
    > p {
      text-align: center;
      min-height: ${convertToRem(28)};
    }
  }

  @media (min-width: 1200px) {
    width: ${convertToRem(242)};
    height: ${convertToRem(300)};
    justify-content: space-evenly;
  }
`;
