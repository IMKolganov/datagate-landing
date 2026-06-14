import React from "react";
import { DASHBOARD_LIVE_URL } from "../constants/dashboard";
import { useLanguage } from "../i18n/LanguageProvider";
import styles from "./ServerPage.module.css";

export function ServerPage(): React.JSX.Element {
    const { t } = useLanguage();

    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>{t.server.title}</h1>
            <p className={styles.subtitle}>{t.server.subtitle}</p>

            <div className={styles.demoBlock}>
                <a
                    href={DASHBOARD_LIVE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.demoLink}
                >
                    {t.server.tryDashboard}
                </a>
                <p className={styles.demoNote}>{t.server.tryDashboardNote}</p>
            </div>

            <div className={`${styles.content} prose`}>
                <h2>{t.server.webDashboard}</h2>
                <p>{t.server.webDashboardParagraph}</p>

                <h2>{t.server.featuresTitle}</h2>
                <ul className={styles.featureList}>
                    {t.server.features.map((feature) => (
                        <li key={feature.title} className={styles.featureItem}>
                            <strong>{feature.title}</strong>
                            <span>{feature.description}</span>
                        </li>
                    ))}
                </ul>

                <h2>{t.server.sourceCode}</h2>
                <div className={styles.repoList}>
                    {t.server.repos.map((repo) => (
                        <article key={repo.name} className={styles.repoCard}>
                            <h3 className={styles.repoName}>{repo.name}</h3>
                            <p className={styles.repoDescription}>{repo.description}</p>
                            <a
                                href={repo.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.repoLink}
                            >
                                GitHub →
                            </a>
                        </article>
                    ))}
                </div>

                <h2>{t.server.infrastructureTitle}</h2>
                {t.server.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                ))}
            </div>
        </div>
    );
}
