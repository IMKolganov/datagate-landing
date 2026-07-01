export const CONSENT_STORAGE_KEY = "datagate-consent";
export const CONSENT_VERSION = 1;

export const PREFERENCE_STORAGE_KEYS = ["datagate-theme", "datagate-language"] as const;

export type StoredConsent = {
    version: number;
    preferences: boolean;
    decidedAt: string;
};

export type ConsentDecision = {
    preferences: boolean | null;
    hasDecided: boolean;
};

export function readConsentDecision(): ConsentDecision {
    if (typeof window === "undefined") {
        return { preferences: null, hasDecided: false };
    }

    try {
        const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY);

        if (!raw) {
            return { preferences: null, hasDecided: false };
        }

        const parsed = JSON.parse(raw) as StoredConsent;

        if (parsed.version !== CONSENT_VERSION) {
            return { preferences: null, hasDecided: false };
        }

        return {
            preferences: parsed.preferences,
            hasDecided: true,
        };
    } catch {
        return { preferences: null, hasDecided: false };
    }
}

export function writeConsent(preferences: boolean): void {
    const stored: StoredConsent = {
        version: CONSENT_VERSION,
        preferences,
        decidedAt: new Date().toISOString(),
    };

    window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(stored));
}

export function clearPreferenceStorage(): void {
    for (const key of PREFERENCE_STORAGE_KEYS) {
        window.localStorage.removeItem(key);
    }
}

export function hasPreferencesConsent(): boolean {
    return readConsentDecision().preferences === true;
}
