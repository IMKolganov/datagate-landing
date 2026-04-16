import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../constants/routes";
import { useLanguage } from "../i18n/LanguageProvider";
import type { Translation } from "../i18n/translations";
import styles from "./HomePage.module.css";

type DownloadItem = Translation["download"]["items"][number];

type DownloadTarget = {
    href: string;
    isExternal: boolean;
    platformName?: string;
};

function detectDownloadTarget(downloadItems: DownloadItem[]): DownloadTarget {
    if (typeof navigator === "undefined") {
        return { href: ROUTES.DOWNLOAD, isExternal: false };
    }

    const userAgent = navigator.userAgent.toLowerCase();
    const platform = navigator.platform.toLowerCase();
    const getHref = (id: string): string | undefined => downloadItems.find((item) => item.id === id)?.href;

    if (userAgent.includes("android")) {
        return {
            href: getHref("android") ?? ROUTES.DOWNLOAD,
            isExternal: Boolean(getHref("android")),
            platformName: downloadItems.find((item) => item.id === "android")?.name,
        };
    }

    if (
        /iphone|ipad|ipod/.test(userAgent)
        || (platform === "macintel" && navigator.maxTouchPoints > 1)
    ) {
        return {
            href: ROUTES.DOWNLOAD,
            isExternal: false,
            platformName: downloadItems.find((item) => item.id === "ios")?.name,
        };
    }

    if (platform.includes("win")) {
        return {
            href: getHref("windows") ?? ROUTES.DOWNLOAD,
            isExternal: Boolean(getHref("windows")),
            platformName: downloadItems.find((item) => item.id === "windows")?.name,
        };
    }

    if (platform.includes("linux") || platform.includes("x11")) {
        return {
            href: getHref("linux") ?? ROUTES.DOWNLOAD,
            isExternal: Boolean(getHref("linux")),
            platformName: downloadItems.find((item) => item.id === "linux")?.name,
        };
    }

    if (platform.includes("mac")) {
        return {
            href: ROUTES.DOWNLOAD,
            isExternal: false,
            platformName: downloadItems.find((item) => item.id === "macos")?.name,
        };
    }

    return { href: ROUTES.DOWNLOAD, isExternal: false };
}

export function HomePage(): React.JSX.Element {
    const { t } = useLanguage();
    const [downloadTarget, setDownloadTarget] = React.useState<DownloadTarget>({
        href: ROUTES.DOWNLOAD,
        isExternal: false,
    });

    React.useEffect(() => {
        setDownloadTarget(detectDownloadTarget(t.download.items));
    }, [t.download.items]);

    const primaryLabel = downloadTarget.platformName
        ? `${t.home.downloadFor} ${downloadTarget.platformName}`
        : t.home.downloadClients;

    return (
        <div className={styles.landing}>
            <section className={`${styles.slide} ${styles.heroSlide}`}>
                <div className={styles.slideInner}>
                    <span className={styles.eyebrow}>{t.home.eyebrow}</span>
                    <h1 className={styles.title}>{t.home.title}</h1>
                    <p className={styles.subtitle}>{t.home.subtitle}</p>
                    <div className={styles.actions}>
                        {downloadTarget.isExternal ? (
                            <a
                                href={downloadTarget.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.primaryAction}
                            >
                                {primaryLabel}
                            </a>
                        ) : (
                            <Link to={downloadTarget.href} className={styles.primaryAction}>
                                {primaryLabel}
                            </Link>
                        )}
                        <Link to={ROUTES.SERVER} className={styles.secondaryAction}>
                            {t.home.exploreServer}
                        </Link>
                    </div>
                </div>
            </section>

            <section className={`${styles.slide} ${styles.highlightsSlide}`} aria-label="Project highlights">
                <div className={styles.slideInner}>
                    <div className={styles.highlights}>
                        {t.home.highlights.map((item) => (
                            <article key={item.title} className={styles.highlightCard}>
                                <h2 className={styles.highlightTitle}>{item.title}</h2>
                                <p className={styles.highlightText}>{item.description}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className={`${styles.slide} ${styles.overviewSlide}`}>
                <div className={styles.slideInner}>
                    <div className={styles.overviewLead}>
                        <span className={styles.sectionLabel}>{t.home.overviewLabel}</span>
                        <h2 className={styles.sectionTitle}>{t.home.overviewTitle}</h2>
                    </div>

                    <div className={`${styles.content} prose`}>
                        {t.home.overviewParagraphs.map((paragraph) => (
                            <p key={paragraph}>{paragraph}</p>
                        ))}
                    </div>
                </div>
            </section>

            <section className={`${styles.slide} ${styles.repositoriesSlide}`} aria-labelledby="clients-title">
                <div className={styles.slideInner}>
                    <div className={styles.repositoriesHeader}>
                        <span className={styles.sectionLabel}>{t.home.clientsLabel}</span>
                        <h2 id="clients-title" className={styles.sectionTitle}>{t.home.clientsTitle}</h2>
                    </div>

                    <div className={styles.repoGrid}>
                        {t.home.clientRepos.map((repo) => (
                            <article key={repo.name} className={styles.repoCard}>
                                <div>
                                    <h3 className={styles.repoName}>{repo.name}</h3>
                                    <p className={styles.repoDescription}>{repo.description}</p>
                                </div>
                                <a
                                    href={repo.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.repoLink}
                                >
                                    {t.home.openRepository}
                                </a>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className={`${styles.slide} ${styles.serverSlide}`} aria-labelledby="server-title">
                <div className={styles.slideInner}>
                    <div className={styles.repositoriesHeader}>
                        <span className={styles.sectionLabel}>{t.home.serverLabel}</span>
                        <h2 id="server-title" className={styles.sectionTitle}>{t.home.serverTitle}</h2>
                    </div>

                    {t.home.serverRepos.map((repo) => (
                        <article key={repo.name} className={styles.serverFeature}>
                            <div className={styles.serverFeatureContent}>
                                <h3 className={styles.serverFeatureTitle}>{repo.name}</h3>
                                <p className={styles.serverFeatureText}>{repo.description}</p>
                            </div>
                            <a
                                href={repo.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.serverFeatureLink}
                            >
                                {t.home.openRepository}
                            </a>
                        </article>
                    ))}
                </div>
            </section>
        </div>
    );
}
