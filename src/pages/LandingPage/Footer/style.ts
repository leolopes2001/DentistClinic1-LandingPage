import styled from 'styled-components';
import convertToRem from '../../../utils/convertToRem';

export const FooterStyled = styled.footer`
  background: #f5f5f5;
  overflow-x: hidden;

  .text {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: ${convertToRem(12)};
    line-height: ${convertToRem(14)};
    color: #373f43;

    @media (min-width: 1200px) {
      font-size: ${convertToRem(20)};
      line-height: ${convertToRem(23)};
    }
  }

  .services ul {
    display: flex;
    gap: ${convertToRem(20)};
    flex-direction: column;
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 2rem 0;
    width: 100%;
    max-width: ${convertToRem(700)};
  }

  .howArrive ul {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    gap: ${convertToRem(20)};
    margin: 2rem 0;
    width: 100%;
    max-width: ${convertToRem(700)};
    margin-bottom: 0;
  }

  .howArrive {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    a {
      margin: 0;
      margin-bottom: 2rem;
    }
  }

  .all_rights_reserved {
    width: 100%;
    height: ${convertToRem(100)};
    min-width: 100vw;
    background-color: ${({ theme }) => theme.colors.whiteFixed};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    p {
      text-align: center;
      padding: 0 0.5rem;
      line-height: ${convertToRem(14)};
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
      gap: 6rem;
    }

    .services ul li,
    .howArrive ul li {
      margin-right: 1.5rem;
    }
  }
`;

export const Logo = styled.div`
  display: flex;
`;
