import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import styles from "./MainLayout.module.css";

export function MainLayout(): React.JSX.Element {
    return (
        <div className={styles.page}>
            <Header />
            <main className={styles.main}>
                <div className={styles.container}>
                    <Outlet />
                </div>
            </main>
            <Footer />
        </div>
    );
}
