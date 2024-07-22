import { css } from "styled-components";
import { device } from "../../../../assets/styles/mediaQueries";

export const CardMediaStyles = css`
    @media ${device.mobile}{
        width: 98%;
        min-height: 45vh;
        flex-direction: column;
    }
`;

export const PictureMediaStyles = css`
    @media ${device.mobile}{
        width: 15vw;
        height: 10vh;
    }
`;

export const UserDetailsMediaStyles = css`
    @media ${device.mobile}{
        width: 100%;
        flex-direction: column;
        align-items: center;
        height: 35vh;
    }
`;

export const DetailsMediaStyles = css`
    @media ${device.mobile}{
        width: 100%;
    }
`;

export const ConfigMediaStyles = css`
    @media ${device.mobile}{
        width: 15vw;
        height: 8vh;
    }
`;