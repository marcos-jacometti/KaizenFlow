import styled from "styled-components";
import { ContentMediaStyles } from "./responsive";

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1.6vw;
    height: 100%;
    width: 95%;
    ${ContentMediaStyles};
`;