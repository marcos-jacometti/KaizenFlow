import { css } from "styled-components";
import { device } from "../../../assets/styles/mediaQueries";

export const SearchMediaStyles = css`
    @media ${device.mobile}{
        gap: 2vw;
    }
`;

export const SvgMediaStyles = css`
    @media ${device.mobile}{
        font-size: 5vw;
    }
`;

export const InputMediaStyles = css`
    @media ${device.mobile}{
        font-size: 4vw;
    }
`;

export const NewUserMediaStyles = css`
    @media ${device.mobile}{
        width: 10vw;
    }
`;