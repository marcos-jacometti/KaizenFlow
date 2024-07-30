import styled from "styled-components";
import { BackgroundLogoMediaStyles, InputsMediaStyles, LogMediaStyles, StyledToastMediaStyles } from "./responsive";
import img from "../../assets/images/logo480x180.png"
import { ToastContainer } from "react-toastify";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    width: 100vw;
    height: 100vh;
`;

export const Log = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    height: 50vh;
    width: 20vw;
    border-radius: 2vh;
    ${LogMediaStyles};
`;

export const BackgroundLogo = styled.div`
   background-color: red;
   width: 15vw;
   height: 15vh;
   background: url(${img}) center / cover;
   ${BackgroundLogoMediaStyles};
`;

export const Inputs = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2vh;
    width: 80%;
    height: 30vh;
    ${InputsMediaStyles};
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