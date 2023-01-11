import styled from 'styled-components';

export const FooterStyled = styled.footer`
 background: #F5F5F5;

  .services ul{
    display: flex;
    gap: 20px;
    flex-direction: column;
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 2rem 0;
    width: 100%;
    max-width:700px;
  }
  .services li,.howArrive li {
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #373f43;
  }

  .howArrive ul{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    gap: 20px;
    margin: 2rem 0;
    width: 100%;
    max-width:700px;
  }
`;
