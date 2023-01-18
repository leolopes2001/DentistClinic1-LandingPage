import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  align-self: flex-start;
  gap: 0.5rem;
  @media (min-width: 1200px) {
    width: 123px;
    height: 70px;

    img {
      transform:   translateY(-2.2rem);
      align-self: center;
    }
    h1 {
      transform: translateY(-2.5rem);
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      text-align: left !important;
      font-family: 'League Spartan';
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 23px;
      color: #373f43;

      span {
        color: ${({ theme }) => theme.colors.primary};
      }
    }
  }
`;
