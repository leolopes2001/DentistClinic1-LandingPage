import styled from 'styled-components';
import convertToRem from '../../../utils/convertToRem';

export const StyledSection = styled.section`
  overflow: hidden;

  background-color: ${({ theme }) => theme.colors.background};

  .general_title {
    width: 100%;
    max-width: ${convertToRem(300)};
  }
  @media (min-width: 320px) {
    .general_title {
      max-width: ${convertToRem(320)};
    }
  }
  @media (min-width: 450px) {
    .general_title {
      max-width: ${convertToRem(340)};
    }
  }

  > .content {
    @media (min-width: 700px) {
      display: flex;
      flex-direction: row-reverse;
      gap: 2rem;
    }
  }

  @media (min-width: 1200px) {
    margin-top: ${convertToRem(43)};
  }
`;

export const GridHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.5 1fr 1fr;
  width: 100%;
  padding: 1rem;

  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;
  p {
    max-width: ${convertToRem(222)};
  }

  > .general_title {
    margin-top: 1rem;
  }

  @media (min-width: 300px) {
    P {
      max-width: ${convertToRem(262)};
    }
  }

  @media (max-width: 1000px) {
    margin-bottom: 1.2rem;
  }

  @media (min-width: 1200px) {
    .general_title {
      min-width: ${convertToRem(650)};
    }
    p {
      max-width: ${convertToRem(600)};
    }
  }
`;
