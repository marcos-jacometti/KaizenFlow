import { css } from "styled-components";
import { device } from "../../../../../assets/styles/mediaQueries";

export const UpMediaStyles = css`
    @media ${device.mobile}{
        margin-left: 0;
        width: 80vw;
    }
`;

export const CloseMediaStyles = css`
    @media ${device.mobile}{
        right: 3vw;
        top: 2vh;
    }
`;

export const SvgMediaStyles = css`
    @media ${device.mobile}{
        font-size: 6vw;
    }
`;

export const InputsMediaStyles = css`
    @media ${device.mobile}{
        gap: 2.5vh;
        height: auto;
    }
`;

export const StyledToastMediaStyles = css`
    @media ${device.mobile} {
        width: 80vw;
        top: 10vh;
        padding: 1rem;
    }
`;

export const SelectMediaStyles = css`
    @media ${device.mobile} {
        width: 60vw;
    }
`;