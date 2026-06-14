import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import { LanguageProvider } from "./i18n/LanguageProvider";
import { ThemeProvider } from "./theme/ThemeProvider";
import "./styles/global.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <ThemeProvider>
            <LanguageProvider>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </LanguageProvider>
        </ThemeProvider>
    </React.StrictMode>
);
