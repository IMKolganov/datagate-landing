import React from "react";
import { useLanguage } from "../i18n/LanguageProvider";
import styles from "./ServerPage.module.css";

const DASHBOARD_REPO = "https://github.com/IMKolganov/OpenVpnGateMonitor";

export function ServerPage(): React.JSX.Element {
    const { t } = useLanguage();

    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>{t.server.title}</h1>
            <p className={styles.subtitle}>{t.server.subtitle}</p>

            <div className={`${styles.content} prose`}>
                <h2>{t.server.webDashboard}</h2>
                <p>{t.server.webDashboardParagraph}</p>
                <p>
                    {t.server.sourceCode}:{" "}
                    <a href={DASHBOARD_REPO} target="_blank" rel="noopener noreferrer">
                        OpenVpnGateMonitor
                    </a>
                </p>

                <h2>{t.server.serverSolution}</h2>
                {t.server.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                ))}
            </div>
        </div>
    );
}
