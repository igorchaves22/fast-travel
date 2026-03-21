import { css } from "styled-components";
import PlusJakartaSansExtraBold from "~assets/fonts/plus-jakarta-sans/PlusJakartaSans-Bold.woff2";
import PlusJakartaSansBold from "~assets/fonts/plus-jakarta-sans/PlusJakartaSans-Bold.woff2";
import PlusJakartaSansExtraLight from "~assets/fonts/plus-jakarta-sans/PlusJakartaSans-ExtraLight.woff2";
import PlusJakartaSansLight from "~assets/fonts/plus-jakarta-sans/PlusJakartaSans-Light.woff2";
import PlusJakartaSansMedium from "~assets/fonts/plus-jakarta-sans/PlusJakartaSans-Medium.woff2";
import PlusJakartaSansRegular from "~assets/fonts/plus-jakarta-sans/PlusJakartaSans-Regular.woff2";
import PlusJakartaSansSemiBold from "~assets/fonts/plus-jakarta-sans/PlusJakartaSans-SemiBold.woff2";

export const fonts = css`
    @font-face {
        font-family: "Plus Jakarta Sans";
        src: url(${PlusJakartaSansExtraLight}) format("woff2");
        font-weight: 200;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: "Plus Jakarta Sans";
        src: url(${PlusJakartaSansLight}) format("woff2");
        font-weight: 300;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: "Plus Jakarta Sans";
        src: url(${PlusJakartaSansRegular}) format("woff2");
        font-weight: 400;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: "Plus Jakarta Sans";
        src: url(${PlusJakartaSansMedium}) format("woff2");
        font-weight: 500;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: "Plus Jakarta Sans";
        src: url(${PlusJakartaSansSemiBold}) format("woff2");
        font-weight: 600;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: "Plus Jakarta Sans";
        src: url(${PlusJakartaSansBold}) format("woff2");
        font-weight: 700;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: "Plus Jakarta Sans";
        src: url(${PlusJakartaSansExtraBold}) format("woff2");
        font-weight: 800;
        font-style: normal;
        font-display: swap;
    }
`;
