import { css } from "styled-components";
import { device } from "../../assets/styles/mediaQueries";

export const LogMediaStyles = css`
    @media ${device.mobile}{
        width: 80vw;
        height: 60vh;
    }
`;

export const BackgroundLogoMediaStyles = css`
    @media ${device.mobile}{
        width: 70vw;
    }
`;

export const InputsMediaStyles = css`
    @media ${device.mobile}{
        height: 40vh;
        gap: 4vh;
    }
`;

export const StyledToastMediaStyles = css`
    @media ${device.mobile} {
        width: 80vw;
        top: 10vh;
        padding: 1rem;
    }
`;