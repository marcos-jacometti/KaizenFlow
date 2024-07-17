import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100vw;
    height: 9.5vh;
    background-color: #fff;
`;

export const Menu = styled.div`

    button {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: transparent;
        border: none;

        svg {
            font-size: 6.5vw;
        }
    }
`;