import styled from 'styled-components';
import convertToRem from '../../../utils/convertToRem';

export const StyledSection = styled.section`
  overflow-x: hidden;
  overflow-y: hidden;
  background-color: ${({theme}) => theme.colors.background};
  & > .content {
    .doctors_list {
      display: flex;
      align-items: center;
      justify-content: space-between;

      li {
        position: relative;
        min-width: 260px;
        max-width: 260px;
        min-height: 340px;
        transition: transform 400ms;

        img {
          max-height: 340px;
          width: 100%;
          object-fit: cover;
        }

        p {
          font-family: 'Manrope';
          font-style: normal;
          font-weight: 700;
          font-size: 24px;
          line-height: 32px;
          letter-spacing: 0.374px;
          color: ${({ theme }) => theme.colors.whiteFixed};
          transition: all 400ms;
          opacity: 0;
          top: 80%;
          left: 50%;
          transform: translate(-50%, -10%);
          width: 100%;
          text-align: center;
          position: absolute;
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

  display: grid;

  @media (min-width: 1200px) {
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 100px 100px;

    .general_clinic_title {
      width: 100%;
      margin-top: 0;
      line-height: normal;
    }

    p {
      min-width: 100%;
      grid-column: 1/3;

      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;
