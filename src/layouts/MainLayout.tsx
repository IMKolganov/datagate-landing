import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { useLanguage } from "../i18n/LanguageProvider";
import { ROUTES } from "../constants/routes";
import styles from "./MainLayout.module.css";

export function MainLayout(): React.JSX.Element {
    const { t } = useLanguage();
    const location = useLocation();
    const isLandingRoute =
        location.pathname === ROUTES.HOME || location.pathname === ROUTES.DOWNLOAD;

    return (
        <div className={styles.page}>
            <a href="#main" className={styles.skipLink}>
                {t.meta.skipToMain}
            </a>
            <Header />
            <main
                id="main"
                className={isLandingRoute ? styles.mainFullBleed : styles.main}
            >
                <div className={isLandingRoute ? styles.containerFullBleed : styles.container}>
                    <Outlet />
                </div>
            </main>
            <Footer />
        </div>
    );
}
