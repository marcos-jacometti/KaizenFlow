import { css } from "styled-components";
import { device } from "../../assets/styles/mediaQueries";

export const ContentMediaStyles = css`
    @media ${device.mobile} {
        gap: 5vw;
    }
`;