import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../constants/routes";
import { useLanguage } from "../i18n/LanguageProvider";
import { appVersion } from "../version";
import styles from "./Footer.module.css";

const GITHUB_URL = "https://github.com/IMKolganov";

export function Footer(): React.JSX.Element {
    const year = new Date().getFullYear();
    const { t } = useLanguage();

    return (
        <footer className={styles.footer} role="contentinfo">
            <div className={styles.inner}>
                <div className={styles.brandCluster}>
                    <div className={styles.brandBlock}>
                        <span className={styles.kicker}>DataGate</span>
                        <p className={styles.statement}>{t.footer.statement}</p>
                    </div>

                    <p className={styles.meta}>© {year} DataGate v.{appVersion}</p>
                </div>

                <div className={styles.links}>
                    <a
                        href={GITHUB_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.link}
                    >
                        GitHub
                    </a>
                    <Link to={ROUTES.DOWNLOAD} className={styles.link}>
                        {t.footer.download}
                    </Link>
                    <Link to={ROUTES.SERVER} className={styles.link}>
                        {t.footer.server}
                    </Link>
                    <Link to={ROUTES.PRIVACY} className={styles.link}>
                        {t.footer.privacy}
                    </Link>
                </div>
            </div>
        </footer>
    );
}
