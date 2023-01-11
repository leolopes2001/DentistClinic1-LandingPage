import styled from 'styled-components';
import convertToRem from '../../../utils/convertToRem';

export const StyledSection = styled.section`
  overflow-x: hidden;
  > .content {
    /* display: flex;
    flex-direction: column;
    align-items: center; */
    min-width: 0;

    @media (min-width: 1000px) {
      display: grid;
      grid-template-columns: 500px 1.2fr;
      grid-template-rows: 1fr;
      /* flex-direction: row;
      justify-content: center; */

      div:nth-child(2) {
        max-width: 229.69px;
        min-width: 229.69px;
      }
    }
  }

  .container_img {
    display: flex;
    align-items: center;
    justify-content: center;
  
  }

  .box_img {
    max-width: 229.69px;
    min-width: 229.69px;
    max-height: 229.69px;
    min-height: 229.69px;
    background: #f1fffc;
    border-radius: 50%;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    text-align: center;

    .doctor {
      transform: translateX(-20px);
    }

    .icon-one {
      position: absolute;
    }
    .icon-two {
      position: absolute;
    }
    .icon-three {
      position: absolute;
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
`;
