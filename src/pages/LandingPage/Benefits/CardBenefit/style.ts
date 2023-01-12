import styled from 'styled-components';

export const LiStyled = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.2rem;
  a {
    margin-top: 0.5rem;
  }

  > p {
    width: 100%;
    /* width: 285px; */
    height:auto;
  }


  & > div {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;

    flex-direction: column;
    gap: 0.2rem;
    /* text-align: left; */
    h4{
      align-items: flex-start;
      justify-content: flex-start;
      width: 302px;
      margin-top: 2rem;
    }
   
  }
  @media (min-width: 1200px) {
    /* width: 2px; */
    width: 242px;
    height: 300px;
    justify-content: space-evenly;
  }
`;
