import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../constants/routes";
import { useLanguage } from "../i18n/LanguageProvider";
import styles from "./AboutPage.module.css";

export function AboutPage(): React.JSX.Element {
    const { t } = useLanguage();

    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>{t.about.title}</h1>
            <div className={`${styles.content} prose`}>
                {t.about.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                ))}
                <p>
                    {t.about.privacyLead}
                    <Link to={ROUTES.PRIVACY}>{t.about.privacyLink}</Link>
                    {t.about.privacyTail}
                </p>
            </div>
        </div>
    );
}
