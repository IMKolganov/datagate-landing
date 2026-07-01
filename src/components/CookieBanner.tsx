import React from "react";
import { Link } from "react-router-dom";
import { useConsent } from "../consent/ConsentProvider";
import { ROUTES } from "../constants/routes";
import { useLanguage } from "../i18n/LanguageProvider";
import styles from "./CookieBanner.module.css";

export function CookieBanner(): React.JSX.Element | null {
    const { showBanner, acceptAll, rejectNonEssential } = useConsent();
    const { t } = useLanguage();

    if (!showBanner) {
        return null;
    }

    return (
        <div
            className={styles.banner}
            role="dialog"
            aria-modal="false"
            aria-labelledby="cookie-banner-title"
            aria-describedby="cookie-banner-description"
        >
            <div className={styles.inner}>
                <div className={styles.copy}>
                    <p id="cookie-banner-title" className={styles.title}>
                        {t.cookieBanner.title}
                    </p>
                    <p id="cookie-banner-description" className={styles.description}>
                        {t.cookieBanner.description}{" "}
                        <Link to={ROUTES.PRIVACY} className={styles.privacyLink}>
                            {t.cookieBanner.privacyLink}
                        </Link>
                    </p>
                </div>

                <div className={styles.actions}>
                    <button type="button" className={styles.rejectButton} onClick={rejectNonEssential}>
                        {t.cookieBanner.rejectNonEssential}
                    </button>
                    <button type="button" className={styles.acceptButton} onClick={acceptAll}>
                        {t.cookieBanner.acceptAll}
                    </button>
                </div>
            </div>
        </div>
    );
}
