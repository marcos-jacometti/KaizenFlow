import styled from "styled-components";
import { ToastContainer } from "react-toastify";

export const Container = styled.div`
    ${props => props.$visible && `
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.5);
    `}
`;

export const Up = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    background-color: #fff;
    height: 70vh;
    width: 30vw;
    border-radius: 2vh;
    position: relative;
    margin-left: 18vw;
`;

export const Close = styled.div`
    position: absolute;
    right: 2vw;
    top: 3vh;

    :hover {
        fill: #8906E6;
    }

    button {
        background-color: transparent;
        border: none;
        cursor: pointer;
    }

    svg {
        font-size: 2vw;
    }
`;

export const Inputs = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.5vw;
    height: 40vh;
    width: 80%;

    .react-select__control {
        width: 20vw;
    }
`;

export const StyledToast = styled(ToastContainer)`
    &&&.Toastify__toast-container {
        width: 20vw;
    }

    .Toastify__toast {
        background: #fff;
        color: #000;
    }
`;