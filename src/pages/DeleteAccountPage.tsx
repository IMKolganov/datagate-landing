import React from "react";
import { useLanguage } from "../i18n/LanguageProvider";
import styles from "./DeleteAccountPage.module.css";

export function DeleteAccountPage(): React.JSX.Element {
    const { t } = useLanguage();

    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>{t.deleteAccount.title}</h1>
            <p className="muted">{t.meta.lastUpdated}</p>

            <div className="prose">
                <p>{t.deleteAccount.intro}</p>

                <h2>{t.deleteAccount.requestTitle}</h2>
                <div className="panel">
                    <p>{t.deleteAccount.requestLead}</p>
                    <p><strong>imkolganov@gmail.com</strong></p>
                    <p><strong>{t.deleteAccount.requestSubject}</strong></p>
                </div>

                <h2>{t.deleteAccount.deletedTitle}</h2>
                <p>{t.deleteAccount.deletedLead}</p>
                <ul>
                    {t.deleteAccount.deletedItems.map((item) => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>

                <h2>{t.deleteAccount.notCollectedTitle}</h2>
                <ul>
                    {t.deleteAccount.notCollectedItems.map((item) => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>

                <h2>{t.deleteAccount.timeframeTitle}</h2>
                <p>{t.deleteAccount.timeframeText}</p>

                <h2>{t.deleteAccount.retentionTitle}</h2>
                <p>{t.deleteAccount.retentionText}</p>
            </div>
        </div>
    );
}
