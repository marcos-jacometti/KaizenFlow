import styled from "styled-components";
import { TextMediaStyles } from "./responsive";

export const Text = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4vh;
    padding: 1rem;
    width: 60vw;
    height: auto;
    line-height: 3vh;
    ${TextMediaStyles};
`;