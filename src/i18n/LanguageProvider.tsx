import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { Language, SUPPORTED_LANGUAGES, Translation, translations } from "./translations";

type LanguageContextValue = {
    language: Language;
    setLanguage: (language: Language) => void;
    t: Translation;
};

const STORAGE_KEY = "datagate-language";

const LanguageContext = createContext<LanguageContextValue | null>(null);

function getInitialLanguage(): Language {
    if (typeof window === "undefined") {
        return "en";
    }

    const saved = window.localStorage.getItem(STORAGE_KEY);

    if (saved && SUPPORTED_LANGUAGES.includes(saved as Language)) {
        return saved as Language;
    }

    const browserLanguage = window.navigator.language.slice(0, 2) as Language;

    if (SUPPORTED_LANGUAGES.includes(browserLanguage)) {
        return browserLanguage;
    }

    return "en";
}

export function LanguageProvider({ children }: { children: React.ReactNode }): React.JSX.Element {
    const [language, setLanguage] = useState<Language>(getInitialLanguage);

    useEffect(() => {
        window.localStorage.setItem(STORAGE_KEY, language);
        document.documentElement.lang = language;
    }, [language]);

    const value = useMemo(
        () => ({
            language,
            setLanguage,
            t: translations[language],
        }),
        [language],
    );

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage(): LanguageContextValue {
    const context = useContext(LanguageContext);

    if (!context) {
        throw new Error("useLanguage must be used within LanguageProvider");
    }

    return context;
}
