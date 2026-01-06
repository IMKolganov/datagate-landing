import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import { appVersion } from "../version";

export function Footer(): React.JSX.Element {
    const year = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.inner}>
                <nav className={styles.links}>
                    <Link className={styles.link} to="/">Home</Link>
                    <Link className={styles.link} to="/privacy">Privacy Policy</Link>
                    <Link className={styles.link} to="/delete-account">Delete account</Link>
                </nav>

                <p className={styles.meta}>© {year} DataGate v.{appVersion}</p>
            </div>
        </footer>
    );
}
