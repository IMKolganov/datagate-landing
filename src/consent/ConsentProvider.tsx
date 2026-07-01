import React, { createContext, useCallback, useContext, useMemo, useState } from "react";
import {
    clearPreferenceStorage,
    readConsentDecision,
    writeConsent,
} from "./consent";

type ConsentContextValue = {
    preferences: boolean | null;
    hasDecided: boolean;
    showBanner: boolean;
    acceptAll: () => void;
    rejectNonEssential: () => void;
    openSettings: () => void;
};

const ConsentContext = createContext<ConsentContextValue | null>(null);

export function ConsentProvider({ children }: { children: React.ReactNode }): React.JSX.Element {
    const initial = readConsentDecision();
    const [preferences, setPreferences] = useState<boolean | null>(initial.preferences);
    const [hasDecided, setHasDecided] = useState(initial.hasDecided);
    const [showBanner, setShowBanner] = useState(!initial.hasDecided);

    const applyDecision = useCallback((allowPreferences: boolean) => {
        writeConsent(allowPreferences);

        if (!allowPreferences) {
            clearPreferenceStorage();
        }

        setPreferences(allowPreferences);
        setHasDecided(true);
        setShowBanner(false);
    }, []);

    const acceptAll = useCallback(() => {
        applyDecision(true);
    }, [applyDecision]);

    const rejectNonEssential = useCallback(() => {
        applyDecision(false);
    }, [applyDecision]);

    const openSettings = useCallback(() => {
        setShowBanner(true);
    }, []);

    const value = useMemo(
        () => ({
            preferences,
            hasDecided,
            showBanner,
            acceptAll,
            rejectNonEssential,
            openSettings,
        }),
        [preferences, hasDecided, showBanner, acceptAll, rejectNonEssential, openSettings],
    );

    return <ConsentContext.Provider value={value}>{children}</ConsentContext.Provider>;
}

export function useConsent(): ConsentContextValue {
    const context = useContext(ConsentContext);

    if (!context) {
        throw new Error("useConsent must be used within ConsentProvider");
    }

    return context;
}
