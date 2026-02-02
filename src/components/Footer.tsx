import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../constants/routes";
import { appVersion } from "../version";
import styles from "./Footer.module.css";

export function Footer(): React.JSX.Element {
    const year = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.inner}>
                <p className={styles.meta}>
                    <Link to={ROUTES.PRIVACY} className={styles.link}>
                        Privacy Policy
                    </Link>
                    {" · "}
                    © {year} DataGate v.{appVersion}
                </p>
            </div>
        </footer>
    );
}
