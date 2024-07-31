import styled from "styled-components";
import { ToastContainer } from "react-toastify";
import { H5MediaStyles, ListMediaStyles, StyledToastMediaStyles, TitleMediaStyles } from "./responsive";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 70vh;
    width: 100%;
`;

export const List = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    border-radius: 1vh;
    width: 50vw;
    background-color: ${props => props.theme.backgroundColor};
    margin-bottom: 4vh;
    max-height: 50vh;
    min-height: 50vh;
    overflow-y: auto;
    overflow-x: hidden;
    box-sizing: border-box;
    ${ListMediaStyles};

    &::-webkit-scrollbar {
        width: 0.4vw;
        border-radius: 1vh;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #ccc;
        border-radius: 1vh;
    }

    &::-webkit-scrollbar-track {
        background-color: #f5f5f5;
        border-radius: 1vh;
    }
`;

export const Title = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50vw;
    height: 8vh;
    ${TitleMediaStyles};
    
    h5 {
        text-align: center;
        width: 12vw;
        ${H5MediaStyles};
    }
`;

export const Members = styled.div`
    display: flex;
    align-items: center;
    width: 50vw;
    height: 6.5vh;
    padding: 1rem;
    text-align: center;
    font-size: 0.9vw;
    ${ListMediaStyles};

    * {
        width: 12vw;
        ${H5MediaStyles};
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