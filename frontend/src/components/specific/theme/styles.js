import styled from "styled-components";
import { ButtonMediaStyles, ContainerMediaStyles } from "./responsive";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 10vw;
    ${ContainerMediaStyles};
    
    button {
        background-color: transparent;
        outline: none;
        border: none;
        cursor: pointer;
        font-size: 1.4vw;
        ${ButtonMediaStyles};

        svg {
            fill: ${(props) => props.theme.fill};
        }
    }

    .active svg {
            fill: ${(props) => props.theme.activeFill};
    }
`;