import styled from 'styled-components';
import { Text } from '../../../components/common/Text/style';
import { BaseTitle } from '../../../components/common/Title/style';
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

  > div {
    padding-top: 0.5rem;
  }

  > ${Text} {
    width: 269px;
    height: 40px;
    display: flex;
    align-items: flex-start;
    padding-top: 8px;

    @media (min-width: 314px) {
      max-width: ${convertToRem(280)};
    }
    @media (min-width: 324px) {
      max-width: ${convertToRem(290)};
    }
    @media (min-width: 1200px) {
      max-width: ${convertToRem(500)};
      padding-top: 32px;
      width: 482px;
      height: 64px;
    }
  }

  > ${BaseTitle} {
    width: 269px;
    height: 80px;
    margin-top: 16px;

    @media (min-width: 480px) {
      > ${BaseTitle} {
        min-width: ${convertToRem(450)};
      }
    }

    @media (min-width: 1200px) {
      width: 585px;
      height: 184px;
    }

    @media (min-width: 1200px) {
      width: 685px;
      grid-template-columns: 1/2;

      grid-column: 1/2;
      grid-row: 1/3;
      padding: 0;
      margin: 0;
    }
  }

  @media (min-width: 1200px) {
    position: relative;
    z-index: 999;
    padding: 0;
    margin-top: ${convertToRem(43)};
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 0.2fr 1fr;
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
