import { RouterProvider } from "react-router";
import { router } from "~router";
import { GlobalStyle } from "~styles";

export function App() {
    return (
        <>
            <GlobalStyle />
            <RouterProvider router={router} />
        </>
    );
}
