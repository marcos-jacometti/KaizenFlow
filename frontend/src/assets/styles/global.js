import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import MontserratRegular from "../fonts/Montserrat-Regular.ttf";
import { device } from "./mediaQueries";

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

export const Container = styled.div`
    display: flex;
    
    @media ${device.mobile}{
        flex-direction: column;
    }
`;

export const MainContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 82vw;
    height: 100vh;
    margin-left: 18vw;

    @media ${device.mobile}{
        margin-left: 0;
        width: 100vw;
        height: 90.5vh;
    }
`;