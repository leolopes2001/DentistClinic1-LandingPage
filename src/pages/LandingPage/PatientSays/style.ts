import styled from 'styled-components';
import convertToRem from '../../../utils/convertToRem';

export const StyledSection = styled.section`
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const GridHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.5 1fr 1fr;
  width: 100%;
  padding: 1rem 0px;

  > .general_title {
    margin-top: 1rem;
    max-width: ${convertToRem(280)};
  }

  p {
    min-width: ${convertToRem(220)};
    max-width: ${convertToRem(220)};
    margin-top: 8px;

    
  }

  @media (min-width: 345px) {
    > .general_title {
      max-width: ${convertToRem(320)};
    }

    p {
      min-width: ${convertToRem(250)};
      max-width: ${convertToRem(250)};
    }
  }

  @media (min-width: 1200px) {
    padding: 0rem;
    margin-top: ${convertToRem(43)};
    grid-template-columns: 1.5fr 1fr;
    grid-template-rows: 50px 80px;
    margin-bottom: 5rem;
    .general_title {
      grid-template-columns: 1/2;
      grid-column: 1/2;
      grid-row: 1/3;
      padding: 0;
      margin: 0;
      vertical-align: baseline;

      width: ${convertToRem(685)};
      max-width: ${convertToRem(600)};
    }

    p {
      margin-top: 32px;
      min-width: ${convertToRem(450)};
      max-width: ${convertToRem(450)};
    }
  }
`;
