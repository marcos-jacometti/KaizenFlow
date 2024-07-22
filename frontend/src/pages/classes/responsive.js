import { css } from "styled-components";
import { device } from "../../assets/styles/mediaQueries";

export const ContentMediaStyles = css`
    @media ${device.mobile}{
        width: 85vw;
        height: auto;
    }
`;

export const TitleMediaStyles = css`
    @media ${device.mobile}{
        width: 80vw;
    }
`;

export const SvgMediaStyles = css`
    @media ${device.mobile}{
        font-size: 5vw;
    }
`;

export const CardsMediaStyles = css`
    @media ${device.mobile}{
        justify-content: center;
        width: 100%;
        padding: 2vh;
        gap: 2vw;
    }
`;