import styled from 'styled-components';
import convertToRem from '../../../utils/convertToRem';

export const StyledSection = styled.section`
  overflow-x: hidden;
  overflow-y: hidden;
  .test {
    width: 100%;
  }
  & > .content {
    display: grid;
   
    /* flex-direction: column;
    align-items: center;

    @media (min-width: 1000px) {
      flex-direction: row;
      justify-content: space-between;

      div:nth-child(2) {
        max-width: 229.69px;
        min-width: 229.69px;
      }
    } */
  }
`;

export const GridHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.5 1fr 1fr;
  width: 100%;
  margin-top: ${convertToRem(43)};
  padding: 1rem;
  & > .general_clinic_title {
    margin-top: 1rem;
  }
`;
