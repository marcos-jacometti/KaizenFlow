import styled from "styled-components";

export const Features = styled.div`
    display: flex;
    flex-direction: column;
    height: 80vh;
    width: 100%;
`;

export const ButtonGroup = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 8vh;
`;

export const Button = styled.button`
    width: 10vw;
    height: 100%;
    border: none;
    background-color: transparent;
    cursor: pointer;
    color: ${props => props.theme.color};
    border-bottom: ${({ $isSelected }) => ($isSelected ? "0.5vh solid #8906E6" : "none")};
`;