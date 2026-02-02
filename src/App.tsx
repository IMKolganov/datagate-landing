import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";
import { HomePage } from "./pages/HomePage";
import { DownloadPage } from "./pages/DownloadPage";
import { ServerPage } from "./pages/ServerPage";
import { ContactsPage } from "./pages/ContactsPage";
import { AboutPage } from "./pages/AboutPage";
import { PrivacyPage } from "./pages/PrivacyPage";
import { DeleteAccountPage } from "./pages/DeleteAccountPage";
import { ROUTES } from "./constants/routes";

export function App(): React.JSX.Element {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route path={ROUTES.HOME} element={<HomePage />} />
                <Route path={ROUTES.DOWNLOAD} element={<DownloadPage />} />
                <Route path={ROUTES.SERVER} element={<ServerPage />} />
                <Route path={ROUTES.CONTACTS} element={<ContactsPage />} />
                <Route path={ROUTES.ABOUT} element={<AboutPage />} />
                <Route path={ROUTES.PRIVACY} element={<PrivacyPage />} />
                <Route path={ROUTES.DELETE_ACCOUNT} element={<DeleteAccountPage />} />
            </Route>

            <Route path="/privacy.html" element={<Navigate to={ROUTES.PRIVACY} replace />} />
            <Route path="/delete-account.html" element={<Navigate to={ROUTES.DELETE_ACCOUNT} replace />} />

            <Route path="*" element={<Navigate to={ROUTES.HOME} replace />} />
        </Routes>
    );
}
