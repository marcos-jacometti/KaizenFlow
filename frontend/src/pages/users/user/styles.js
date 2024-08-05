import styled from "styled-components";
import { PictureMediaStyles } from "./responsive";

export const Inputs = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 20vw;
    height: 40vh;
`;

export const Picture = styled.div`
    background-image: url(${props => props.$background});
    background-size: cover;
    background-position: center;
    height: 15vh;
    width: 7.5vw;
    border-radius: 50%;
    ${PictureMediaStyles}.
`;