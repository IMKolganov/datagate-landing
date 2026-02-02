import React, { useState } from "react";
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
    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => setMenuOpen(false);

    return (
        <header
            className={styles.header}
            data-menu-open={menuOpen || undefined}
        >
            <div className={styles.inner}>
                <Link to={ROUTES.HOME} className={styles.logo}>
                    <img
                        src="/favicon.png"
                        alt="DataGate logo"
                        className={styles.logoIcon}
                    />
                    <span className={styles.logoText}>DataGate</span>
                </Link>

                <button
                    type="button"
                    className={styles.hamburger}
                    onClick={() => setMenuOpen((v) => !v)}
                    aria-expanded={menuOpen}
                    aria-controls="main-nav"
                    aria-label={menuOpen ? "Close menu" : "Open menu"}
                >
                    <span className={styles.hamburgerIcon}>
                        <span className={styles.line} />
                        <span className={styles.line} />
                        <span className={styles.line} />
                    </span>
                </button>

                <nav
                    id="main-nav"
                    className={styles.nav}
                    aria-label="Main navigation"
                >
                    {NAV_ITEMS.map(({ to, label }) => (
                        <NavLink
                            key={to}
                            to={to}
                            className={({ isActive }) =>
                                isActive ? styles.linkActive : styles.link
                            }
                            onClick={closeMenu}
                        >
                            {label}
                        </NavLink>
                    ))}
                </nav>
            </div>
        </header>
    );
}
