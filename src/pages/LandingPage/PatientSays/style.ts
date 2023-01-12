import styled from 'styled-components';
import convertToRem from '../../../utils/convertToRem';

export const StyledSection = styled.section`
  overflow-x: hidden;
  overflow-y: hidden;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const GridHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.5 1fr 1fr;
  width: 100%;
  padding: 1rem;
  & > .general_clinic_title {
    margin-top: 1rem;
  }
  
  @media (min-width: 1200px) {
    padding: 0rem;
    margin-top: ${convertToRem(43)};
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 0.2fr 1fr;
    margin-bottom: 5rem;
    .general_clinic_title {
      grid-template-columns: 1/2;
      grid-column: 1/2;
      grid-row: 1/3;
      padding: 0;
      margin: 0;
      vertical-align: baseline;
    } 
   } 
`;
