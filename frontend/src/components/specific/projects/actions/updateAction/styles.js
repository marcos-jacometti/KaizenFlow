import styled from "styled-components";
import { ToastContainer } from "react-toastify";
import { CloseMediaStyles, InputsMediaStyles, SelectMediaStyles, StyledToastMediaStyles, SvgMediaStyles, UpMediaStyles } from "./responsive";

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
    ${UpMediaStyles};
`;

export const Close = styled.div`
    position: absolute;
    right: 2vw;
    top: 3vh;
    ${CloseMediaStyles};

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
        ${SvgMediaStyles};
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
    ${InputsMediaStyles};

    .react-select__control {
        width: 20vw;
        ${SelectMediaStyles};
    }
`;

export const StyledToast = styled(ToastContainer)`
    &&&.Toastify__toast-container {
        width: 20vw;
        ${StyledToastMediaStyles};
    }

    .Toastify__toast {
        background: #fff;
        color: #000;
    }
`;