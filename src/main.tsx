import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { APP_ROOT_ID } from "~constants";
import { App } from "./App";

if (!APP_ROOT_ID) throw new Error("Root element not found");

createRoot(APP_ROOT_ID).render(
    <StrictMode>
        <App />
    </StrictMode>
);
