import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../constants/routes";
import styles from "./AboutPage.module.css";

export function AboutPage(): React.JSX.Element {
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>About DataGate</h1>
            <div className={`${styles.content} prose`}>
                <p>
                    DataGate is a secure, open-source OpenVPN ecosystem with a management dashboard.
                    It focuses on privacy, transparency, and modern infrastructure. The project is fully open source
                    so anyone can audit, verify, and deploy it independently.
                </p>
                <p>
                    DataGate includes a mobile app for Android, desktop clients for Windows and Linux,
                    and a web dashboard for managing VPN servers and users.
                </p>
                <p>
                    For details on how we handle your data, see our{" "}
                    <Link to={ROUTES.PRIVACY}>Privacy Policy</Link>.
                </p>
            </div>
        </div>
    );
}
