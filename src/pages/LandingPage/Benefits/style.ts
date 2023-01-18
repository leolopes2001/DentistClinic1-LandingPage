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
  padding: 1rem 0px;

  & > ${BaseTitle} {
    margin-top: 1rem;
    max-width: ${convertToRem(200)};
    margin-bottom: 8px;
    width: 585px;

    @media (min-width: 1200px) {
      height: 184px;
    }
  }

  & > ${Text} {
    font-family: 'Red Hat Display';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;

    @media (min-width: 1200px) {
      width: 482px;
      height: 96px;
      font-weight: 400;
      font-size: 20px;
      line-height: 32px;
      color: #49545a;
    }
  }

  @media (min-width: 370px) {
    & > ${BaseTitle} {
      justify-content: flex-start;
      max-width: ${convertToRem(400)}; 
    }
  }

  @media (min-width: 450px) {
    & > ${BaseTitle} {
      min-width: ${convertToRem(400)};
      display: flex;
      justify-content: flex-start;
    }
  }

  @media (min-width: 1200px) {
    margin-top: ${convertToRem(43)};
    grid-template-columns: 1.3fr 1fr;
    grid-template-rows: 1fr 3fr;
    overflow-y: hidden;

    ${BaseTitle} {
      grid-template-columns: 1/2;
      grid-column: 1/2;
      grid-row: 1/3;
      padding: 0;
      margin: 0;
      vertical-align: baseline;
    }

    ${Text} {
      margin-top: 32px;
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
