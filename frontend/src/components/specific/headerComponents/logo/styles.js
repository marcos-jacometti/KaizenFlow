import styled from "styled-components";
import img from "../../../../assets/images/logo480x180.png"

export const LogoContainer = styled.div`
    height: ${props => props.height};
    width: ${props => props.width};
    background: url(${img}) center / cover;
`;