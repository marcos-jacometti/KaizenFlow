import styled from "styled-components";
import { CardsMediaStyles, ContentMediaStyles, SvgMediaStyles, TitleMediaStyles } from "./responsive";

export const Content = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    background-color: ${props => props.theme.backgroundColor2};
    color: ${props => props.theme.color};
    border-radius: 1vh;
    height: ${props => props.$height};
    width: 70vw;
    ${ContentMediaStyles};
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

export const Cards = styled.div`
    display: flex;
    align-items: center;
    gap: 1.5vw;
    height: auto;
    flex-wrap: wrap;
    width: 65vw;
    ${CardsMediaStyles};
`;