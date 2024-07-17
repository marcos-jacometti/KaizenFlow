import { css } from "styled-components";
import { device } from "../../../../assets/styles/mediaQueries";

export const navBarContainerMediaStyles = css`
    @media ${device.mobile}{
        width: 80vw;
    }
`;

export const buttonMediaStyles = css`
    @media ${device.mobile}{
        width: 75vw;
        font-size: 4.5vw;
    }
`;

export const svgMediaStyles = css`
    @media ${device.mobile}{
        font-size: 4.5vw;
    }
`;