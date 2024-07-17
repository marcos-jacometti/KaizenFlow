import { createGlobalStyle } from "styled-components";
import MontserratRegular from "../fonts/Montserrat-Regular.ttf";

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'MontserratRegular';
        src: ${`url(${MontserratRegular}) format('truetype')`};
        font-style: normal;
    }

    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    body {
        font-family: 'MontserratRegular';
        background-color: #f4f5f4;
    }
`;