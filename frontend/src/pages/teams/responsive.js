import { css } from "styled-components";
import { device } from "../../assets/styles/mediaQueries";

export const ContentMediaStyles = css`
    @media ${device.mobile} {
        width: 90vw;
    }
`;

export const TitleMediaStyles = css`
    @media ${device.mobile} {
        width: 90vw;
    }
`;

export const H5MediaStyles = css`
    @media ${device.mobile} {
        width: 30vw;
    }
`;

export const ButtonsMediaStyles = css`
    @media ${device.mobile} {
        flex-direction: column;
    }
`;

export const StyledToastMediaStyles = css`
    @media ${device.mobile} {
        width: 80vw;
        top: 10vh;
        padding: 1rem;
    }
`;