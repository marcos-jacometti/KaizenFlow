import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    border-radius: 1vh;
    height: 50vh;
    width: 30vw;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    margin-bottom: 4vh;
`;

export const Title = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30vw;
    height: 8vh;
    border-bottom: 0.1vh solid #8906E61A;
    
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

    span {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1vw;
        width: 15vw;
    }
`;

export const Status = styled.div`
    height: 2vh;
    width: 1vw;
    border-radius: 50%;
    background-color: ${props => props.$background};
`;