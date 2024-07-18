import styled from "styled-components";
import { ContainerMediaStyles } from "./responsive";

export const Container = styled.div`
    display: flex;
    align-items: end;
    padding: 3vh;
    height: ${props => props.$height};
    width: ${props => props.$width};
    border-radius: 1.5vh;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    cursor: pointer;
    background: url(${props => props.$background}) center / cover;
    color: #fff;
    ${ContainerMediaStyles};

    &:hover {
        transform: translateY(-0.5vh);
    }
`;