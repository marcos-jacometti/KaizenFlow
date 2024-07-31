import styled from "styled-components";

export const HelpContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
    background-color: #8906E61A;
    height: 25vh;
    width: 16vw;
    border-radius: 1vh;
    color: ${props => props.theme.color2};
    text-align: center;

    span {
        font-size: 0.8vw;
    }
`;

export const CallLogo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #8906E6;
    border-radius: 1vh;
    height: 6vh;
    width: 3vw;
        
    svg {
        font-size: 1.8vw;
        fill: #fff;
    }
`;