import styled from 'styled-components';
import convertToRem from '../../../utils/convertToRem';

export const GridHeader = styled.div`
  overflow-x: hidden;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.5 1fr 1fr;
  width: 100%;
  margin-top: ${convertToRem(13)};
  padding: 1rem;
  min-width: ${convertToRem(400)};

  > .general_title {
    margin-top: 1rem;
    display: flex;
    justify-content: flex-start;
    max-width: ${convertToRem(350)};
  }

  > p {
    max-width: ${convertToRem(230)};
    vertical-align: baseline;
    display: flex;
    align-items: center;

    @media (min-width: 314px) {
      max-width: ${convertToRem(280)};
    }
    @media (min-width: 324px) {
      max-width: ${convertToRem(290)};
    }
    @media (min-width: 1200px) {
      max-width: ${convertToRem(500)};
    }
  }
  @media (min-width: 480px) {
    > .general_title {
      min-width: ${convertToRem(450)};
    }
  }

  @media (min-width: 1200px) {
    position: relative;
    z-index: 999;
    padding: 0;
    margin-top: ${convertToRem(43)};
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 0.2fr 1fr;

    .general_title {
      width: 685px;
      grid-template-columns: 1/2;

      grid-column: 1/2;
      grid-row: 1/3;
      padding: 0;
      margin: 0;
    }
  }
`;

export const SectionStyled = styled.section`
  overflow: hidden;
  padding-top: 2rem;
  background-color: ${({ theme }) => theme.colors.background};

  .list_servies {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 4rem;
  }
`;
