import { css } from "styled-components";
import { device } from "../../assets/styles/mediaQueries";

export const NewUserMediaStyles = css`
    @media ${device.mobile}{
        width: 10vw;
    }
`;

export const SvgMediaStyles = css`
    @media ${device.mobile}{
        font-size: 5vw;
    }
`;