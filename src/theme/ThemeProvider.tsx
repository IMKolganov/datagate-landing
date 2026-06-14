import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

export type Theme = "dark" | "light";

type ThemeContextValue = {
    theme: Theme;
    setTheme: (theme: Theme) => void;
    toggleTheme: () => void;
};

const STORAGE_KEY = "datagate-theme";

const THEME_COLORS: Record<Theme, string> = {
    dark: "#0d1117",
    light: "#ffffff",
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

function getInitialTheme(): Theme {
    if (typeof window === "undefined") {
        return "dark";
    }

    const saved = window.localStorage.getItem(STORAGE_KEY);

    if (saved === "light" || saved === "dark") {
        return saved;
    }

    if (window.matchMedia("(prefers-color-scheme: light)").matches) {
        return "light";
    }

    return "dark";
}

function applyTheme(theme: Theme): void {
    document.documentElement.setAttribute("data-theme", theme);

    const metaTheme = document.querySelector('meta[name="theme-color"]');

    if (metaTheme) {
        metaTheme.setAttribute("content", THEME_COLORS[theme]);
    }
}

export function ThemeProvider({ children }: { children: React.ReactNode }): React.JSX.Element {
    const [theme, setTheme] = useState<Theme>(getInitialTheme);

    useEffect(() => {
        applyTheme(theme);
        window.localStorage.setItem(STORAGE_KEY, theme);
    }, [theme]);

    const value = useMemo(
        () => ({
            theme,
            setTheme,
            toggleTheme: () => setTheme((current) => (current === "dark" ? "light" : "dark")),
        }),
        [theme],
    );

    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme(): ThemeContextValue {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error("useTheme must be used within ThemeProvider");
    }

    return context;
}
