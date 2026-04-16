import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../constants/routes";
import { useLanguage } from "../i18n/LanguageProvider";
import styles from "./PrivacyPage.module.css";

export function PrivacyPage(): React.JSX.Element {
    const { t } = useLanguage();

    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>{t.privacy.title}</h1>
            <p className="muted">{t.meta.lastUpdated}</p>

            <div className="prose">
                <p>{t.privacy.intro}</p>

                <h2>{t.privacy.collectTitle}</h2>
                <p>{t.privacy.collectLead}</p>
                <ul>
                    {t.privacy.collectItems.map((item) => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>

                <p><strong>{t.privacy.notCollectLead}</strong></p>
                <ul>
                    {t.privacy.notCollectItems.map((item) => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>

                <h2>{t.privacy.useTitle}</h2>
                <ul>
                    {t.privacy.useItems.map((item) => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>

                <h2>{t.privacy.storageTitle}</h2>
                <p>{t.privacy.storageText}</p>

                <h2>{t.privacy.thirdPartyTitle}</h2>
                <p>{t.privacy.thirdPartyText}</p>

                <h2>{t.privacy.childrenTitle}</h2>
                <p>{t.privacy.childrenText}</p>

                <h2>{t.privacy.contactTitle}</h2>
                <p>
                    {t.privacy.contactText} <strong>imkolganov@gmail.com</strong>
                </p>
                <p>
                    {t.privacy.deleteLead}
                    <Link to={ROUTES.DELETE_ACCOUNT}>{t.privacy.deleteLink}</Link>.
                </p>
            </div>
        </div>
    );
}
