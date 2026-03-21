import { RouterProvider } from "react-router";
import { ThemeProvider } from "styled-components";
import { router } from "~router";
import { GlobalStyle, THEME } from "~styles";

export function App() {
    return (
        <ThemeProvider theme={THEME}>
            <GlobalStyle />
            <RouterProvider router={router} />
        </ThemeProvider>
    );
}
