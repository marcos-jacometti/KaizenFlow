import { css } from "styled-components";
import { device } from "../../../../assets/styles/mediaQueries";

export const ContainerMediaStyles = css`
    @media ${device.mobile} {
        min-height: auto;
    }
`;