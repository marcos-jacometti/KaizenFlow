import styled from "styled-components";
import { ContainerMediaStyles, MembersMediaStyles, SpanMediaStyles, StatusMediaStyles, TitleMediaStyles } from "./responsive";

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    border-radius: 1.5vh;
    width: 30vw;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    max-height: 40vh;
    min-height: 40vh;
    overflow-y: auto;
    overflow-x: hidden;
    box-sizing: border-box;
    ${ContainerMediaStyles};

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
    width: 30vw;
    height: 8vh;
    border-bottom: 0.1vh solid #8906E61A;
    ${TitleMediaStyles};
    
    h5 {
        text-align: center;
        width: 15vw;
    }
`;

export const Members = styled.div`
    display: flex;
    align-items: center;
    height: 6.5vh;
    width: 30vw;
    padding: 1rem;
    text-align: center;
    font-size: 0.9vw;
    border-bottom: 0.1vh solid #8906E61A;
    ${MembersMediaStyles};

    span {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1vw;
        width: 15vw;
        ${SpanMediaStyles};
    }
`;

export const Status = styled.div`
    height: 2vh;
    width: 1vw;
    border-radius: 50%;
    background-color: ${props => props.$background};
    ${StatusMediaStyles};
`;