import { css } from "styled-components";
import { device } from "../../../assets/styles/mediaQueries";

export const inputContainerMediaStyles = css`
    @media ${device.mobile}{
        width: 60vw;
        gap: 3vw;
    }
`;

export const svgMediaStyles = css`
    @media ${device.mobile}{
        font-size: 4vw;
    }
`;

export const inputMediaStyles = css`
    @media ${device.mobile}{
        font-size: 4vw;
    }
`;