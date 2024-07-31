import styled from "styled-components";
import { ConfigSettingsMediaStyles, ContentMediaStyles, SvgMediaStyles, TitleMediaStyles } from "./responsive";

export const Content = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    background-color: ${props => props.theme.backgroundColor2};
    border-radius: 1vh;
    height: 20vh;
    width: 30vw;
    color: ${props => props.theme.color};
    ${ContentMediaStyles};
`;

export const Title = styled.div`
    display: flex;
    align-items: center;
    padding: 1rem;
    gap: 1rem;
    display: flex;
    width: 28vw;
    height: 10vh;
    border-bottom: 0.1vh solid #8906E61A;
    ${TitleMediaStyles};

    svg {
        font-size: 1.5vw;
        ${SvgMediaStyles};
    }
`;

export const ConfigSettings = styled.div`
    display: flex;
    align-items: center;
    gap: 3vw;
    width: 28vw;
    ${ConfigSettingsMediaStyles};
`;