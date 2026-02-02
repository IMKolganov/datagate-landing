import React from "react";
import styles from "./DownloadPage.module.css";

const DOWNLOADS: {
    id: string;
    name: string;
    description?: string;
    href?: string;
    label?: string;
}[] = [
    {
        id: "windows",
        name: "Windows",
        description: "Desktop client for Windows 10/11",
        href: "https://github.com/IMKolganov/DataGate/releases",
        label: "Download",
    },
    {
        id: "linux",
        name: "Linux",
        description: "Desktop client for Linux",
        label: "Coming soon",
    },
    {
        id: "android",
        name: "Android",
        description: "Mobile app — Google Play or APK",
        href: "https://github.com/IMKolganov/DataGateAndroid/releases",
        label: "Releases",
    },
    {
        id: "ios",
        name: "iOS",
        description: "Mobile app for iPhone and iPad",
        label: "Coming soon",
    },
];

export function DownloadPage(): React.JSX.Element {
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>Download</h1>
            <p className={styles.subtitle}>
                DataGate clients for your platform
            </p>

            <ul className={styles.list}>
                {DOWNLOADS.map((item) => (
                    <li key={item.id} className={styles.item}>
                        <div className={styles.itemContent}>
                            <span className={styles.itemName}>{item.name}</span>
                            {item.description && (
                                <span className={styles.itemDesc}>
                                    {item.description}
                                </span>
                            )}
                        </div>
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
                                {item.label ?? "Coming soon"}
                            </span>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}
