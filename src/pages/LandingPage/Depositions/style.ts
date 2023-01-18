import styled from 'styled-components';
import { Text } from '../../../components/common/Text/style';
import { BaseTitle } from '../../../components/common/Title/style';
import convertToRem from '../../../utils/convertToRem';

export const StyledSection = styled.section`
  overflow: hidden;

  background-color: ${({ theme }) => theme.colors.background};

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
  padding: 1rem 0px;

  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;

  > ${BaseTitle} {
    margin-top: 1rem;
    margin-bottom: 8px;
  }

  > ${Text} {
    margin-bottom: 16px;
  }

  @media (max-width: 1000px) {
    margin-bottom: 1.2rem;
  }

  @media (min-width: 1200px) {
    padding: 1rem;
    > ${BaseTitle} {
      margin: 1rem 0px 0px 0px;
      font-size: 45px;
      line-height: 80px;
      width: 525px;
      height: 160px;
    }

    > ${Text} {
      width: 482px;
      height: 102px;
    }
  }
`;
