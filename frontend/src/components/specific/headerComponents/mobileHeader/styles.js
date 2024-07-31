import styled from "styled-components";

const getBackground = (theme) => theme.backgroundColor;

export const Container = styled.div`
     ${props => props.$visible && `
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 0;
        left: 0;
        width: 85vw;
        height: 100vh;
        background-color: ${getBackground(props.theme)};
        z-index: 100;
    `}
`;

export const Close = styled.div`
    position: absolute;
    right: 7vw;
    top: 4.5vh;

    button {
        svg {
            font-size: 10.5vw;
        }
    }
`;