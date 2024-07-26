import { css } from "styled-components";
import { device } from "../../../assets/styles/mediaQueries";

export const ContainerMediaStyles = css`
    @media ${device.mobile}{
        width: 80vw;
        height: 50vh;
    }
`;

export const H4MediaStyles = css`
    @media ${device.mobile} {
        min-width: 60vw;
        text-align: center;
    }
`;