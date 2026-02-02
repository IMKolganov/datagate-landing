import React from "react";
import styles from "./DeleteAccountPage.module.css";

export function DeleteAccountPage(): React.JSX.Element {
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>Data Deletion</h1>
            <p className="muted">Last updated: December 2025</p>

            <div className="prose">
                <p>
                    This page explains how to request deletion of your personal data associated
                    with DataGate. You can request data deletion without deleting your account,
                    or you can delete the account and data together.
                </p>

                <h2>How to request data deletion</h2>
                <div className="panel">
                    <p>
                        Send an email from the Google account used to sign in to the application to:
                    </p>
                    <p><strong>imkolganov@gmail.com</strong></p>
                    <p>
                        Email subject: <strong>Delete my DataGate data</strong>
                    </p>
                </div>

                <h2>What data will be deleted</h2>
                <p>
                    After your request is verified, we will permanently delete data associated with your account, including:
                </p>
                <ul>
                    <li>User identifiers (installation ID, external user ID)</li>
                    <li>Account and server-side user records</li>
                    <li>VPN configuration data stored on our servers</li>
                    <li>Crash/error reports associated with your account (if any)</li>
                </ul>

                <h2>What data is NOT collected</h2>
                <ul>
                    <li>Browsing history</li>
                    <li>Traffic contents</li>
                    <li>DNS queries</li>
                    <li>Location data</li>
                </ul>

                <h2>Deletion timeframe</h2>
                <p>
                    Data deletion requests are completed within <strong>30 days</strong> from the date the request is received.
                </p>

                <h2>Data retention</h2>
                <p>
                    Some data may be retained if required by applicable laws or regulations.
                    Any retained data will not be used for other purposes.
                </p>
            </div>
        </div>
    );
}
