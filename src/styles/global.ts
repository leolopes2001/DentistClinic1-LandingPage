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
        height: -webkit-fill-available;
    }

    ul,ol{
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
`;
