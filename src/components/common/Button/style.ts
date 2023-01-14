import styled from 'styled-components';

export const ButtonStyled = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  font-style: normal;
  transition: all 300ms;
  background-color: transparent;
  border-radius: 4px;

  &:hover {
    filter: brightnees(1.2);
  }
`;
