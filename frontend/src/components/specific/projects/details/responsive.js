import { css } from "styled-components";
import { device } from "../../../../assets/styles/mediaQueries";

export const SelectMediaStyles = css`
    @media ${device.mobile} {
        width: 60vw;
    }
`;

export const StyledToastMediaStyles = css`
    @media ${device.mobile} {
        width: 80vw;
        top: 10vh;
        padding: 1rem;
    }
`;