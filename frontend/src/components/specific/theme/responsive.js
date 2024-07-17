import { css } from "styled-components";
import { device } from "../../../assets/styles/mediaQueries";

export const ContainerMediaStyles = css`
    @media ${device.mobile}{
        width: 20vw;
    }
`;

export const ButtonMediaStyles = css`
    @media ${device.mobile}{
        font-size: 4.5vw;
    }
`;