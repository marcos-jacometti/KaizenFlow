import styled from "styled-components";
import { ContentMediaStyles, SvgMediaStyles, TextMediaStyles, TitleMediaStyles } from "./responsive";

export const Content = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    background-color: #fff;
    border-radius: 1vh;
    height: auto;
    width: 50vw;
    ${ContentMediaStyles};
`;

export const Title = styled.div`
    display: flex;
    align-items: center;
    padding: 1rem;
    gap: 1rem;
    width: 48vw;
    height: 10vh;
    border-bottom: 0.1vh solid #8906E61A;
    ${TitleMediaStyles};

    svg {
        font-size: 1.5vw;
        ${SvgMediaStyles};
    }
`;

export const Text = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4vh;
    padding: 1rem;
    width: 48vw;
    height: auto;
    line-height: 3vh;
    ${TextMediaStyles};
`;