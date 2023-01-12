import styled from 'styled-components';

export const FooterStyled = styled.footer`
  background: #f5f5f5;
  overflow-x: hidden;

  .services ul {
    display: flex;
    gap: 20px;
    flex-direction: column;
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 2rem 0;
    width: 100%;
    max-width: 700px;
  }
  .services li,
  .howArrive li {
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #373f43;
  }

  .howArrive ul {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    gap: 20px;
    margin: 2rem 0;
    width: 100%;
    max-width: 700px;

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
    height: 100px;
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
    }
  }

  .additional_text {
    display: none;
  }
  @media (min-width: 1200px) {
    .all_rights_reserved {
      flex-direction: row;
      height: 80px;
    }

    & > .content {
      display: flex;
      width: 100%;
      gap: 6rem;
    }

    .services ul li,
    .howArrive ul li {
   
      font-weight: 400;
      font-size: 20px;
      line-height: 23px;
      margin-right: 1.5rem;
      color: #373f43;
    }
  
    .services h3,.howArrive h3 {
      font-weight: 700;
      font-size: 28px;
      line-height: 37px;
    }

    .additional_text {
      display: flex;
      flex-direction: column;
      align-items: center;
      div {
        display: flex;
        align-items: center;
        flex-direction: column;
        width: 50px;
      }
      p {
        max-width: 300px;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        color: #373f43;
      }
    }
  }
`;

export const Logo = styled.div`
  display: flex;
`;
