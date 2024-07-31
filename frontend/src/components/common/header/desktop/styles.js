import styled from "styled-components";

export const HeaderContainer = styled.div`
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    width: 18vw;
    background-color: ${props => props.theme.backgroundColor2};

    nav {
        height: 60vh;
    }
`;