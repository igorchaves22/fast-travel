import { createGlobalStyle } from "styled-components";
import { fonts } from "./fonts";
import { reset } from "./reset";

export const GlobalStyle = createGlobalStyle`
    ${reset}
    ${fonts}
`;
