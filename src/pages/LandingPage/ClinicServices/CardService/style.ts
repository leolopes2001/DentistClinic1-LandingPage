import styled from 'styled-components';

export const LiStyled = styled.li`

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.2rem;
  a {
    margin-top: 0.5rem;
  }
  & > div{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.2rem;
    text-align: left;
  }
  @media (min-width: 1200px) {
    width: 380px;
    height: 300px;
    justify-content: space-evenly;
  }
`;
