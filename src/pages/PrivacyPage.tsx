import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../constants/routes";
import styles from "./PrivacyPage.module.css";

export function PrivacyPage(): React.JSX.Element {
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>Privacy Policy</h1>
            <p className="muted">Last updated: December 2025</p>

            <div className="prose">
                <p>
                    DataGate (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) operates the DataGate mobile application.
                    We respect your privacy and are committed to protecting your personal data.
                </p>

                <h2>1. Information We Collect</h2>
                <p>We may collect and process the following data:</p>
                <ul>
                    <li>Authentication data (access tokens, refresh tokens)</li>
                    <li>User identifiers (installation ID, external user ID)</li>
                    <li>VPN connection metadata (connection state, selected server)</li>
                    <li>Crash logs and error diagnostics</li>
                    <li>Device and operating system information</li>
                </ul>

                <p><strong>We do NOT collect:</strong></p>
                <ul>
                    <li>Browsing history</li>
                    <li>Traffic contents</li>
                    <li>DNS queries</li>
                    <li>Personal files</li>
                    <li>Location data</li>
                </ul>

                <h2>2. How We Use Data</h2>
                <ul>
                    <li>Authenticate users</li>
                    <li>Establish and maintain VPN connections</li>
                    <li>Improve application stability and performance</li>
                    <li>Diagnose errors and crashes</li>
                </ul>

                <h2>3. Data Storage</h2>
                <p>
                    Authentication tokens are stored securely on the user&apos;s device.
                    Server-side data is stored on secure servers.
                </p>

                <h2>4. Third-Party Services</h2>
                <p>
                    The application may use third-party services such as Google Sign-In
                    and backend infrastructure providers to operate the service.
                </p>

                <h2>5. Children&apos;s Privacy</h2>
                <p>
                    This application is not intended for children under the age of 13.
                    We do not knowingly collect personal data from children.
                </p>

                <h2>6. Contact</h2>
                <p>
                    If you have any questions about this Privacy Policy, contact us at:{" "}
                    <strong>imkolganov@gmail.com</strong>
                </p>
                <p>
                    To request deletion of your account and data, see{" "}
                    <Link to={ROUTES.DELETE_ACCOUNT}>Delete account</Link>.
                </p>
            </div>
        </div>
    );
}
