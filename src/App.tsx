import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import styles from "./App.module.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { HomePage } from "./pages/HomePage";
import { PrivacyPage } from "./pages/PrivacyPage";
import { DeleteAccountPage } from "./pages/DeleteAccountPage";

export function App(): React.JSX.Element {
    return (
        <div className={styles.page}>
            <Header />

            <main className={styles.main}>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/privacy" element={<PrivacyPage />} />
                    <Route path="/delete-account" element={<DeleteAccountPage />} />

                    <Route path="/privacy.html" element={<Navigate to="/privacy" replace />} />
                    <Route path="/delete-account.html" element={<Navigate to="/delete-account" replace />} />

                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </main>

            <Footer />
        </div>
    );
}
