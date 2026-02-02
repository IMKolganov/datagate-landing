import React from "react";
import { NavLink, Link } from "react-router-dom";
import { ROUTES } from "../constants/routes";
import styles from "./Header.module.css";

const NAV_ITEMS: { to: (typeof ROUTES)[keyof typeof ROUTES]; label: string }[] = [
    { to: ROUTES.HOME, label: "Home" },
    { to: ROUTES.DOWNLOAD, label: "Download" },
    { to: ROUTES.SERVER, label: "Server" },
    { to: ROUTES.CONTACTS, label: "Contacts" },
    { to: ROUTES.ABOUT, label: "About" },
];

export function Header(): React.JSX.Element {
    return (
        <header className={styles.header}>
            <div className={styles.inner}>
                <Link to={ROUTES.HOME} className={styles.logo}>
                    <img
                        src="/favicon.png"
                        alt="DataGate logo"
                        className={styles.logoIcon}
                    />
                    <span className={styles.logoText}>DataGate</span>
                </Link>

                <nav className={styles.nav}>
                    {NAV_ITEMS.map(({ to, label }) => (
                        <NavLink
                            key={to}
                            to={to}
                            className={({ isActive }) =>
                                isActive ? styles.linkActive : styles.link
                            }
                        >
                            {label}
                        </NavLink>
                    ))}
                </nav>
            </div>
        </header>
    );
}
