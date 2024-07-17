import { css } from "styled-components";
import { device } from "../../../../assets/styles/mediaQueries";

export const subMenuContainerMediaStyles = css`
    @media ${device.mobile}{
        font-size: 4vw;
    }
`;

export const activeMediaStyles = css`
    @media ${device.mobile}{
        color: #fff;
    }
`;