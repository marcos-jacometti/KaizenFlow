import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    max-height: 70vh;
    min-height: 70vh;
    width: 100%;
    gap: 3vh;
    overflow-y: auto;
    overflow-x: hidden;
    padding: 1.5rem;
    box-sizing: border-box;

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