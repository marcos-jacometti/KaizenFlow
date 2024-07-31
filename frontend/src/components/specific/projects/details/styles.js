import styled from "styled-components";
import { ToastContainer } from "react-toastify";
import { SelectMediaStyles, StyledToastMediaStyles } from "./responsive";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 70vh;
    width: 100%;
`;

export const Inputs = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 40vh;
    width: 60%;
    margin-top: 2vh;

    .react-select__control {
        width: 20vw;
        background-color: ${props => props.theme.backgroundColor2};
        color: ${props => props.theme.color};
        ${SelectMediaStyles};
    }

    .react-select__option {
        background-color: ${props => props.theme.backgroundColor2};
    }
`;

export const StyledToast = styled(ToastContainer)`
    &&&.Toastify__toast-container {
        width: 20vw;
        ${StyledToastMediaStyles};
    }
    .Toastify__toast {
        background: ${props => props.theme.backgroundColor2};
        color: ${props => props.color};
    }
`;