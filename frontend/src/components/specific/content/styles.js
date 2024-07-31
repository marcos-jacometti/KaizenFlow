import styled from "styled-components";
import { ContainerMediaStyles, SvgMediaStyles, TitleMediaStyles } from "./responsive";

export const Container = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    background-color: ${props => props.theme.backgroundColor2};
    color: ${props => props.theme.color};
    border-radius: 1vh;
    height: ${props => props.$height};
    width: 70vw;
    ${ContainerMediaStyles};
`;

export const Title = styled.div`
    display: flex;
    align-items: center;
    padding: 1rem;
    gap: 1rem;
    width: 68vw;
    height: 10vh;
    border-bottom: 0.1vh solid #8906E61A;
    ${TitleMediaStyles};

    svg {
        font-size: 1.5vw;
        ${SvgMediaStyles};
    }
`;