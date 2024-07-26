import { css } from "styled-components";
import { device } from "../../../../../assets/styles/mediaQueries";

export const ContainerMediaStyles = css`
    @media ${device.mobile} {
        min-height: 70vh;
    }
`;

export const CardMediaStyles = css`
    @media ${device.mobile} {
        width: 100%;
        height: 35vh;
        flex-direction: column;
    }
`;

export const TagMediaStyles = css`
    @media ${device.mobile} {
        width: 100%;
        height: 1vh;
    }
`;

export const ProjectDetailsMediaStyles = css`
    @media ${device.mobile} {
        width: 100%;
        height: 34vh;
        flex-direction: column;
        justify-content: center;
    }
`;

export const DetailsMediaStyles = css`
    @media ${device.mobile} {
        width: 100%;
        justify-content: center;
    }
`;

export const ConfigMediaStyles = css`
    @media ${device.mobile} {
        width: 10vw;
    }
`;

export const FeaturesMediaStyles = css`
    @media ${device.mobile} {
        width: 100%;
    }
`;

export const NewActionMediaStyles = css`
    @media ${device.mobile} {
        width: 10vw;
    }
`;

export const ButtonMediaStyles = css`
    @media ${device.mobile} {
        font-size: 6vw;
    }
`;