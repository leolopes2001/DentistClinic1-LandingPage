import styled from 'styled-components';
import convertToRem from '../../../utils/convertToRem';
import { Container as MiniLogo } from '../../../components/MiniLogo/style';
import { LinkStyled } from '../../../components/common/Link/style';

export const FooterStyled = styled.footer`
  background-color: ${({ theme }) => theme.colors.background2};
  overflow: hidden;
  padding-top: 60px;

  .text {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: ${convertToRem(12)};
    line-height: ${convertToRem(14)};
    color: ${({ theme }) => theme.colors.grey2};

    @media (min-width: 1200px) {
      font-size: ${convertToRem(20)};
      line-height: ${convertToRem(23)};
    }
  }

  .text a {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: ${convertToRem(12)};
    line-height: ${convertToRem(14)};
    color: ${({ theme }) => theme.colors.grey2};
    text-decoration: none;  
    @media (min-width: 1200px) {
      font-size: ${convertToRem(20)};
      line-height: ${convertToRem(23)};
    }
  }

  .services {
    grid-row: 1/3;
  }
  .services ul {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
    width: 100%;
    max-width: 800px;
    gap: 32px;

    margin-top: 24px;
    @media (min-width: 1200px) {
      margin-top: 2rem;
    }
  }

  .howArrive ul {
    display: grid;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin-top: 24px;
    margin-bottom: 27px;
    width: 100%;
    max-width: 800px;
    li:nth-child(2) {
      grid-row: 2/3;
    }
    li:nth-child(3) {
      grid-row: 3/4;
    }
    li:nth-child(4) {
      grid-row: 4/5;
    }
    @media (min-width: 1200px) {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
      margin-bottom: 0;
      gap: 9px;
      margin-top: 2rem;
    }
  }

  .howArrive {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    margin-top: 32px;

    @media (min-width: 1200px) {
      margin: 0px;
    }

    ${LinkStyled} {
      width: 141px;
      height: 38px;
      border-radius: 8px;
      margin: 0;
      margin-bottom: 2rem;

      @media (min-width: 1200px) {
        width: 211px;
        height: 67px;
      }
    }
  }

  .all_rights_reserved {
    background-color: ${({ theme }) => theme.colors.whiteFixed};
    height: 93px;
  }
  .all_rights_reserved > .content {
    width: 100%;
    height: ${convertToRem(100)};

    background-color: ${({ theme }) => theme.colors.whiteFixed};
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    gap: 0.5rem;
    p {
      text-align: center;
      padding: 0 0.5rem;
      line-height: ${convertToRem(14)};
    }

    @media (min-width: 1200px) {
      flex-direction: row;
    }
  }

  .resp_tech {
    font-family: 'Spartan';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 13px;
    color: #373f43;
    text-align: center;

    @media (min-width: 1200px) {
      grid-column: 2/4;
      width: 100%;
      font-family: 'League Spartan';
      font-style: normal;
      font-weight: 300;
      font-size: 24px;
      line-height: 22px;
      text-align: left;
    }
  }

  .additional_info {
    display: flex;
    flex-direction: column;

    .additional_text_1 {
      font-family: 'Raleway';
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 30px;
      color: #373f43;
      margin-bottom: 32px;  
      transform: translateY(-2px);
    
    }

    .additional_text_2 {
      font-family: 'Raleway';
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 23px;
      color: #373f43;
      margin-bottom: 32px;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      svg {
        font-size: 1.2rem;
        color: rgb(85, 205, 108);
      }

      @media (min-width: 1200px) {
        position: relative;
        svg {
          position: absolute;
          top: 50%;
          transform: translate(-50%, -50%);
          font-size: 2.6rem;
          right: 90px;
        }
      }
    }

    .additional_text_3 {
      font-family: 'League Spartan';
      font-style: normal;
      font-weight: 300;
      font-size: 24px;
      line-height: 22px;
      text-decoration: none;
      color: #373f43;
    }
  }
  @media (min-width: 1200px) {
    .all_rights_reserved {
      flex-direction: row;
      height: ${convertToRem(80)};

      p {
        line-height: ${convertToRem(23)};
      }
    }

    & > .content {
      display: flex;
      width: 100%;

      display: grid;
      grid-template-columns: 1fr 0.5fr 0.5fr;
      grid-template-rows: 1fr 22px;
      gap: 0;
    }
  }
`;
