import styled from 'styled-components';
import convertToRem from '../../../utils/convertToRem';

export const StyledSection = styled.section`
  overflow-x: hidden;
  overflow-y: hidden;
  background-color: ${({ theme }) => theme.colors.background};
  & > .content {
    @media (min-width: 1000px) {
      display: flex;
      flex-direction: row-reverse;
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

  p {
    max-width: 222px;
  }

  @media (min-width: 300px) {
    P {
      max-width: 262px;
    }
  }

  & > .general_clinic_title {
    margin-top: 1rem;
  }

  @media (max-width: 1000px) {
    margin-bottom: 1.2rem;
  }

  @media (min-width: 1200px) {
    p {
      max-width: 600px;
    }
  }
`;
