import styled from "styled-components";
import { ToastContainer } from "react-toastify";

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #fff;
    border-radius: 1vh;
    height: 40vh;
    width: 50vw;
`;

export const Title = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50vw;
    height: 5vh;
    
    h5 {
        text-align: center;
        width: 16.5vw;
    }
`;

export const Buttons = styled.div`
    display: flex;
    gap: 2vw;
    margin-top: 4vh;
`;

export const Wrap = styled.div`
    display: flex;
    align-items: center;
    width: 50vw;
    height: 6.5vh;
    padding: 1rem;

    * {
        width: 16.5vw;
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