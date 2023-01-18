import styled from 'styled-components';
import { Text } from '../../../components/common/Text/style';
import convertToRem from '../../../utils/convertToRem';

export const StyledSection = styled.section`
  padding-top: 2rem;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.background};
  > .content {
    .doctors_list {
      display: flex;
      align-items: center;
      justify-content: space-between;

      li {
        position: relative;
        min-width: ${convertToRem(260)};
        max-width: ${convertToRem(260)};
        min-height: ${convertToRem(340)};
        transition: transform 400ms;

        img {
          max-height: ${convertToRem(340)};
          width: 100%;
          object-fit: cover;
        }

        p {
          transition: all 400ms;
          opacity: 0;
        }
      }

      li:hover {
        transform: scale(1.1);

        p {
          opacity: 1;
          top: 75%;
        }
      }
    }

    .style_length_1 {
      justify-content: center;
    }
    .style_length_2 {
      justify-content: space-evenly;
    }
  }

  @media (min-width: 1200px) {
    margin-bottom: 2rem;
  }
`;

export const GridHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.5 1fr 1fr;
  margin-top: ${convertToRem(13)};
  width: 100%;
  padding: 1rem;
  & > .general_title {
    margin-top: 1rem;
    min-width: ${convertToRem(250)};
    max-width: ${convertToRem(250)};
  }

  ${Text} {
    font-family: 'Manrope';
    font-weight: 400;
    font-size: 18px;
    line-height: 32px;
    text-align: center;
    letter-spacing: 0.01em;
    color: #646770;
    margin-top: 15px;
    


  }

  @media (min-width: 400px) {
    .general_title {
      display: flex;
      justify-content: flex-start;
      min-width: ${convertToRem(400)};
      max-width: ${convertToRem(400)};
    }

  
  }

  @media (min-width: 1200px) {
    padding: 0;
    margin-top: ${convertToRem(43)};
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 1fr 0.5fr;
    margin-bottom: 66px;
    .general_title {
      width: 100%;
      margin-top: 0;
      line-height: 80px;
      display: flex;
      min-width: ${convertToRem(685)};
      justify-content: end;
      max-width: ${convertToRem(800)};
      justify-self: end;
    }

    ${Text} {
      min-width: 100%;
      grid-column: 1/3;

      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;
