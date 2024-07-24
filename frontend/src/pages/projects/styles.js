import styled from "styled-components";
import { NewUserMediaStyles, SvgMediaStyles } from "./responsive";

export const Features = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 8vh;
    width: 90%;
    gap: 1vw;
    margin-bottom: 4vh;
`;

export const NewUser = styled.div`
    display: flex;
    height: 6vh;
    width: 3vw;
    border-radius: 1vh;
    background-color: #8906E6;
    ${NewUserMediaStyles};


    &:hover {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4), 0 6px 15px 0 rgba(0, 0, 0, 0.3);
    }

    & > button {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: transparent;
        border: none;
        width: 100%;
        font-size: 1.5vw;
        cursor: pointer;
        ${SvgMediaStyles};
        
        svg {
            fill: #fff;
        }
    }
`;