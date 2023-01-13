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
  & > div {
    display: flex;
    gap: 0.2rem;
    text-align: left;

    align-items: flex-start;
    flex-direction: column;
  }

  & > div > h4 {
    min-width: ${convertToRem(150)};
    display: flex;
    justify-content: flex-start;
    text-align: left;
    margin-bottom: 0.2rem;
  }

  > p {
    min-height: ${convertToRem(75)};
    max-height: ${convertToRem(75)};
  }

  @media (min-width: 1200px) {
    width: ${convertToRem(380)};
    height: ${convertToRem(300)};
    justify-content: space-evenly;

    > p {
      min-height: ${convertToRem(112)};
    }

    & > div {
      gap: 1rem;
    }

    & > div > h4 {
      min-width: ${convertToRem(300)};

    }

    > p {
      min-height: ${convertToRem(75)};
      max-height: ${convertToRem(75)};
      margin-bottom: 1rem;
    }
  }
`;
