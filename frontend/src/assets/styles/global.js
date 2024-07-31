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
        background-color:  ${(props) => props.theme.backgroundColor};
        
        .link {
            text-decoration: none;
        }
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
    flex-direction: column;
    width: 82vw;
    height: ${props => props.$height};
    margin-left: 18vw;
    gap: ${props => props.$gap};
    margin-top: ${props => props.$margin};
    margin-bottom: ${props => props.$bottom};

    @media ${device.mobile}{
        margin-left: 0;
        width: 100vw;
        height: ${props => props.$heightMediaStyles};
    }
`;