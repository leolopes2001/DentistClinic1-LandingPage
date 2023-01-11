import styled from 'styled-components';
import convertToRem from '../../utils/convertToRem';

export const Overlay = styled.div`
  position: fixed;
  display: grid;
  place-items: center;
  inset: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 9999;
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  border-radius: ${convertToRem(8)};
  width: 400px;
  height: 400px;
  background-color: red;
  overflow-y: auto;
`;
