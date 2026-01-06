import React from "react";
import { NavLink, Link } from "react-router-dom";
import styles from "./Header.module.css";

export function Header(): React.JSX.Element {
    return (
        <header className={styles.header}>
            <div className={styles.inner}>
                <Link to="/" className={styles.logo}>
                    <img
                        src="/favicon.png"
                        alt="DataGate logo"
                        className={styles.logoIcon}
                    />
                    <span className={styles.logoText}>DataGate</span>
                </Link>

                <nav className={styles.nav}>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? styles.linkActive : styles.link
                        }
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to="/privacy"
                        className={({ isActive }) =>
                            isActive ? styles.linkActive : styles.link
                        }
                    >
                        Privacy Policy
                    </NavLink>

                    <NavLink
                        to="/delete-account"
                        className={({ isActive }) =>
                            isActive ? styles.linkActive : styles.link
                        }
                    >
                        Delete account
                    </NavLink>
                </nav>
            </div>
        </header>
    );
}
