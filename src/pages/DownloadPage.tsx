import React from "react";
import { useLanguage } from "../i18n/LanguageProvider";
import styles from "./DownloadPage.module.css";

const DOWNLOAD_GROUPS = [
    { label: "Desktop", items: ["windows", "linux", "macos"] },
    { label: "Mobile", items: ["android", "ios"] },
];

function PlatformIcon({ id }: { id: string }): React.JSX.Element {
    switch (id) {
        case "windows":
            return (
                <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.iconSvg}>
                    <path fill="currentColor" d="M3 4.5 10.5 3v8H3v-6.5Zm8.5-1.7L21 1v10h-9.5V2.8ZM3 13h7.5v8L3 19.5V13Zm8.5 0H21v10l-9.5-1.8V13Z" />
                </svg>
            );
        case "linux":
            return (
                <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.iconSvg}>
                    <path fill="currentColor" d="M12 2.4c1.9 0 3.3 1.6 3.3 3.8 0 .8-.2 1.6-.6 2.2 1.8 1.1 3 3.1 3 5.4 0 3.6-2.5 6.4-5.7 6.4s-5.7-2.8-5.7-6.4c0-2.3 1.2-4.3 3-5.4a4 4 0 0 1-.6-2.2c0-2.2 1.4-3.8 3.3-3.8Zm-1.8 3.3c-.4 0-.8.4-.8.8s.4.8.8.8.8-.4.8-.8-.4-.8-.8-.8Zm3.6 0c-.4 0-.8.4-.8.8s.4.8.8.8.8-.4.8-.8-.4-.8-.8-.8Zm-1.8 3c-1.5 0-2.8 1.1-3.1 2.6h6.2c-.3-1.5-1.6-2.6-3.1-2.6Zm-2.8 5.1c.5 1.4 1.5 2.2 2.8 2.2s2.3-.8 2.8-2.2l1 .3c-.5 2-2 3.3-3.8 3.3s-3.3-1.3-3.8-3.3l1-.3Zm-1.7 4.4c.3.8 1 1.5 1.9 1.8l-.3 1c-1.2-.3-2.2-1.2-2.7-2.3l1.1-.5Zm9 0 1.1.5c-.5 1.1-1.5 2-2.7 2.3l-.3-1c.9-.3 1.6-1 1.9-1.8Z" />
                </svg>
            );
        case "macos":
            return (
                <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.iconSvg}>
                    <path fill="currentColor" d="M15.3 4.3c-.7.8-1.2 1.9-1.1 3 .1 0 .3 0 .4-.1 1-.3 1.9-1 2.5-1.9.6-.8 1-1.9.9-3-1 .1-2 .8-2.7 2Zm2.6 7.5c0-2.2 1.8-3.2 1.9-3.3-1.1-1.6-2.8-1.8-3.4-1.8-1.5-.2-2.8.9-3.5.9-.7 0-1.8-.9-3-.9-1.5 0-2.9.9-3.7 2.3-1.6 2.7-.4 6.8 1.1 9 .8 1.1 1.8 2.3 3.1 2.2 1.2 0 1.7-.8 3.1-.8s1.8.8 3.1.8c1.3 0 2.1-1.1 2.9-2.2.9-1.3 1.3-2.6 1.3-2.6-.1 0-2.9-1.1-2.9-3.6Z" />
                </svg>
            );
        case "android":
            return (
                <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.iconSvg}>
                    <path fill="currentColor" d="M8 7.2 6.8 5.4l.8-.5L8.9 6.8a8 8 0 0 1 6.2 0l1.3-1.9.8.5L16 7.2a6.8 6.8 0 0 1 2.8 5.3H5.2A6.8 6.8 0 0 1 8 7.2ZM9.5 9.5a.7.7 0 1 0 0-1.4.7.7 0 0 0 0 1.4Zm5 0a.7.7 0 1 0 0-1.4.7.7 0 0 0 0 1.4ZM6.5 13.5v4.3c0 .7.6 1.2 1.2 1.2h.8V22h1.5v-3h4v3h1.5v-3h.8c.7 0 1.2-.5 1.2-1.2v-4.3h-11Z" />
                </svg>
            );
        case "ios":
            return (
                <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.iconSvg}>
                    <path fill="currentColor" d="M16.7 2H7.3A2.3 2.3 0 0 0 5 4.3v15.4A2.3 2.3 0 0 0 7.3 22h9.4a2.3 2.3 0 0 0 2.3-2.3V4.3A2.3 2.3 0 0 0 16.7 2Zm-4.2 18.4a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM17 17H7V5h10v12Z" />
                </svg>
            );
        default:
            return (
                <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.iconSvg}>
                    <path fill="currentColor" d="M4 5h16v14H4z" />
                </svg>
            );
    }
}

export function DownloadPage(): React.JSX.Element {
    const { t } = useLanguage();

    return (
        <div className={styles.wrapper}>
            <section className={styles.hero}>
                <h1 className={styles.title}>{t.download.title}</h1>
                <p className={styles.subtitle}>{t.download.subtitle}</p>
            </section>

            <div className={styles.groups}>
                {DOWNLOAD_GROUPS.map((group) => (
                    <section key={group.label} className={styles.section}>
                        <h2 className={styles.groupLabel}>
                            {group.label === "Desktop" ? t.download.desktop : t.download.mobile}
                        </h2>

                        <ul className={styles.list}>
                            {group.items.map((id) => {
                                const item = t.download.items.find((entry) => entry.id === id);

                                if (!item) {
                                    return null;
                                }

                                return (
                                    <li key={item.id} className={styles.item}>
                                        <div className={styles.iconWrap}>
                                            <PlatformIcon id={item.id} />
                                        </div>
                                        <div className={styles.itemBody}>
                                            <div className={styles.itemContent}>
                                                <span className={styles.itemName}>{item.name}</span>
                                                {item.description && (
                                                    <span className={styles.itemDesc}>
                                                        {item.description}
                                                    </span>
                                                )}
                                            </div>
                                            <div className={styles.itemFooter}>
                                                <span className={styles.itemMeta}>
                                                    {group.label === "Desktop" ? t.download.desktop : t.download.mobile}
                                                </span>
                                                {item.href ? (
                                                    <a
                                                        href={item.href}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className={styles.link}
                                                    >
                                                        {item.label}
                                                    </a>
                                                ) : (
                                                    <span className={styles.linkDisabled}>
                                                        {item.label ?? t.download.comingSoon}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    </section>
                ))}
            </div>
        </div>
    );
}
