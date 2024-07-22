import { css } from "styled-components";
import { device } from "../../../assets/styles/mediaQueries";

export const ButtonMediaStyles = css`
    @media ${device.mobile}{
        width: 50vw;
        height: 5vh;
        font-size: 3.8vw;
    }
`;