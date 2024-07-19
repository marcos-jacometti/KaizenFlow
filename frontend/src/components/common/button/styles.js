import styled from "styled-components";
import { buttonMediaStyles } from "./responsive";

export const ButtonContainer = styled.div`
    border-radius: 1vh;

    button {
        background-color: transparent;
        border: ${props => props.$border};
        height: 4vh;
        width: 12vw;
        background-color: ${props => props.$background};
        border-radius: 1vh;
        font-size: 0.9vw;
        cursor: pointer;
        font-weight: bold;
        color: ${props => props.$color};
        ${buttonMediaStyles};

        &:hover { 
            box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.4), 0 8px 8px 0 rgba(0, 0, 0, 0.3);
        }

        .link {
            text-decoration: none;
            color: inherit;
        }
    }
`;