import styled from "styled-components";
import { CardMediaStyles, ConfigMediaStyles, DetailsMediaStyles, PictureMediaStyles, UserDetailsMediaStyles } from "./responsive";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-height: 60vh;
    min-height: 65vh;
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

export const Card = styled.div`
    display: flex;
    align-items: center;
    height: 10vh;
    width: 65vw;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 1vh;
    padding: 1vh;
    ${CardMediaStyles};

    &:hover {
        box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.4), 0 9px 10px 0 rgba(0, 0, 0, 0.3);
    }
`;

export const Picture = styled.div`
    background-image: url(${props => props.$background});
    background-size: cover;
    background-position: center;
    height: 6vh;
    width: 3vw;
    border-radius: 50%;
    ${PictureMediaStyles};
`;

export const UserDetails = styled.div`
    display: flex;
    justify-content: space-around;
    width: 60vw;
    ${UserDetailsMediaStyles};
`;

export const Details = styled.div`
    display: flex;
    align-items: center;
    width: 18vw;
    padding: 1rem;
    ${DetailsMediaStyles};
`;

export const Config = styled.div`
    height: 6vh;
    width: 3vw;
    background-color: #f4f5f4;
    border-radius: 50%;
    ${ConfigMediaStyles};

    & > button {
        background-color: transparent;
        border: none;
        height: 100%;
        width: 100%;
        cursor: pointer;
    }
`;