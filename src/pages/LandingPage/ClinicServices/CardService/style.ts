import styled from 'styled-components';

export const LiStyled = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.2rem;
  a {
    margin-top: 0.5rem;
  }
  & > div {
    display: flex;
    gap: 0.2rem;
    text-align: left;

    align-items: flex-start;
    flex-direction: column;
  }

  & > div > h4 {
    min-width: 150px;
    display: flex;
    justify-content: flex-start;
    text-align: left;
    margin-bottom: 0.2rem;
  }

  > p {
    min-height: 75px;
    max-height: 75px;
  }

  @media (min-width: 1200px) {
    width: 380px;
    height: 300px;
    justify-content: space-evenly;

    > p {
      min-height: 112px;
    }

    & > div {
      gap: 1rem;
    }

    & > div > h4 {
      min-width: 300px;

    }

    > p {
      min-height: 75px;
      max-height: 75px;
      margin-bottom: 1rem;
    }
  }
`;
