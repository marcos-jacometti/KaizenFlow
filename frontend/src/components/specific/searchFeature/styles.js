import styled from "styled-components";
import { InputMediaStyles, SearchMediaStyles, SvgMediaStyles } from "./responsive";

export const Search = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5vw;
    border-radius: 1vh;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4), 0 6px 15px 0 rgba(0, 0, 0, 0.3);
    padding: 1rem;
    height: 6vh;
    width: 80%;
    ${SearchMediaStyles};
    
    svg{
        font-size: 1vw;
        ${SvgMediaStyles};
    }

    input{
        border: none;
        background-color: transparent;
        width: 100%;
        font-size: 0.8vw;
        outline: none;
        ${InputMediaStyles};
    }
`;