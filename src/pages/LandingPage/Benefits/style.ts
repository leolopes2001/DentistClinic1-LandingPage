import styled from 'styled-components';
import convertToRem from '../../../utils/convertToRem';

export const GridHeader = styled.div`
  overflow-x: hidden;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.5 1fr 1fr;
  width: 100%;
  padding: 1rem;

  p {
    max-width: ${convertToRem(210)};
    min-width: ${convertToRem(210)};
  }

  & > .general_title {
    margin-top: 1rem;
    max-width: ${convertToRem(200)};
  }

  @media (min-width: 310px) {
    p {
      min-width: ${convertToRem(260)};
      max-width: ${convertToRem(260)};
    }
  }

  @media (min-width: 370px) {
    & > .general_title {
      max-width: ${convertToRem(400)};
    }
  }

  @media (min-width: 450px) {
    & > .general_title {
      min-width: ${convertToRem(400)};
      display: flex;
      justify-content: flex-start;
    }
  }

  @media (min-width: 1200px) {
    margin-top: ${convertToRem(43)};
    grid-template-columns: 1.3fr 1fr;
    grid-template-rows: 20px 90px;
    gap: 3rem;

    .general_title {
      grid-template-columns: 1/2;
      grid-column: 1/2;
      grid-row: 1/3;
      padding: 0;
      margin: 0;
      vertical-align: baseline;
    }

    p {
      min-width: ${convertToRem(400)};
    }
  }
`;

export const SectionStyled = styled.section`
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.background};

  .list_servies {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 4rem;
  }

  @media (max-width: 1200px) {
    .list_servies {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      gap: 1rem;
      margin-top: 1rem;
    }
  }
`;
