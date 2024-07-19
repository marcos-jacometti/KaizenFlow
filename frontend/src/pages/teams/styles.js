import styled from "styled-components";
import { ToastContainer } from "react-toastify";
import { ButtonsMediaStyles, ContentMediaStyles, H5MediaStyles, StyledToastMediaStyles, TitleMediaStyles } from "./responsive";

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #fff;
    border-radius: 1vh;
    height: 40vh;
    width: 50vw;
    ${ContentMediaStyles};
`;

export const Title = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50vw;
    height: 5vh;
    ${TitleMediaStyles};
    
    h5 {
        text-align: center;
        width: 16.5vw;
        ${H5MediaStyles};
    }
`;

export const Buttons = styled.div`
    display: flex;
    gap: 2vw;
    margin-top: 4vh;
    ${ButtonsMediaStyles};
`;

export const Wrap = styled.div`
    display: flex;
    align-items: center;
    width: 50vw;
    height: 6.5vh;
    padding: 1rem;
    ${ContentMediaStyles};

    * {
        width: 16.5vw;
        ${H5MediaStyles};
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