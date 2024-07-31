import styled from "styled-components";

export const LogoContainer = styled.div`
    height: ${props => props.height};
    width: ${props => props.width};
    background: url(${props => props.theme.backgroundImage}) center / cover;
`;