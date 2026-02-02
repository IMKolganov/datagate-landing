import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import styles from "./MainLayout.module.css";

export function MainLayout(): React.JSX.Element {
    return (
        <div className={styles.page}>
            <a href="#main" className={styles.skipLink}>
                Skip to main content
            </a>
            <Header />
            <main id="main" className={styles.main}>
                <div className={styles.container}>
                    <Outlet />
                </div>
            </main>
            <Footer />
        </div>
    );
}
