import styled from 'styled-components';

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
      width: 302px;
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

      margin-top: 4px;

      width: 119px;
      height: 32px;
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
        width: 302px;
        margin-top: 0rem;
      }
    }
  }

  @media (max-width: 324px) {
    > p {
      text-align: center;
      min-height: 28px;
    }
  }

  @media (min-width: 1200px) {
    width: 242px;
    height: 300px;
    justify-content: space-evenly;
  }
`;
