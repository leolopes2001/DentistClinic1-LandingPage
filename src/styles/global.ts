import { createGlobalStyle } from 'styled-components';
import convertToRem from '../utils/convertToRem';

export default createGlobalStyle`

    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        outline: 0;
    }

   

    body, #root{
        position: relative;
        /* min-height: 100vh; */


         height: -webkit-fill-available;
     
    }


    ul{
      list-style: none;
    }

    .content{
        width: 100%;
        height: 100%;
        max-width: 1250px;
        margin: 0 auto;
        padding: ${convertToRem(15)};
        position: relative;
    }

 


    .hide-scroll{
        overflow: hidden !important;
    }

    path: {
    color: red;
    background-color: red;
    fill: #fce57e;
  }
`;
