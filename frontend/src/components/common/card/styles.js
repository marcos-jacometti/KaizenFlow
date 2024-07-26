import styled from "styled-components";
import { ContainerMediaStyles, H4MediaStyles } from "./responsive";

export const Container = styled.div`
    display: flex;
    align-items: ${props => props.$align};
    justify-content: ${props => props.$justify};
    flex-direction: ${props => props.$direction};
    padding: ${props => props.$padding};
    height: ${props => props.$height};
    width: ${props => props.$width};
    border-radius: 1.5vh;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    cursor: pointer;
    background: url(${props => props.$background}) center / cover;
    color: ${props => props.$color};
    ${ContainerMediaStyles};

    &:hover {
        transform: translateY(-0.3vh);
    }

    h4 {
        max-width: 18vw;
        ${H4MediaStyles};
    }
`;