import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { ROUTES } from "../constants/routes";
import { useLanguage } from "../i18n/LanguageProvider";
import { Language, SUPPORTED_LANGUAGES } from "../i18n/translations";
import styles from "./Header.module.css";

const LANGUAGE_LABELS: Record<Language, string> = {
    ru: "RU",
    en: "EN",
    fr: "FR",
    de: "DE",
    el: "EL",
};

export function Header(): React.JSX.Element {
    const [menuOpen, setMenuOpen] = useState(false);
    const [languageOpen, setLanguageOpen] = useState(false);
    const { language, setLanguage, t } = useLanguage();

    const closeMenu = () => {
        setMenuOpen(false);
        setLanguageOpen(false);
    };
    const navItems = [
        { to: ROUTES.HOME, label: t.header.nav.home },
        { to: ROUTES.DOWNLOAD, label: t.header.nav.download },
        { to: ROUTES.SERVER, label: t.header.nav.server },
        { to: ROUTES.CONTACTS, label: t.header.nav.contacts },
        { to: ROUTES.ABOUT, label: t.header.nav.about },
    ];

    return (
        <header className={styles.header} data-menu-open={menuOpen || undefined}>
            <div className={styles.inner}>
                <div className={styles.brandCluster}>
                    <Link to={ROUTES.HOME} className={styles.logo} onClick={closeMenu}>
                        <span className={styles.logoMark}>
                            <img src="/favicon.png" alt="DataGate logo" className={styles.logoIcon} />
                        </span>
                        <span className={styles.logoCopy}>
                            <span className={styles.logoText}>DataGate</span>
                            <span className={styles.logoTag}>{t.header.logoTag}</span>
                        </span>
                    </Link>
                </div>

                <button
                    type="button"
                    className={styles.hamburger}
                    onClick={() => {
                        setMenuOpen((v) => {
                            const next = !v;

                            if (!next) {
                                setLanguageOpen(false);
                            }

                            return next;
                        });
                    }}
                    aria-expanded={menuOpen}
                    aria-controls="main-nav"
                    aria-label={menuOpen ? t.header.menuClose : t.header.menuOpen}
                >
                    <span className={styles.hamburgerIcon}>
                        <span className={styles.line} />
                        <span className={styles.line} />
                        <span className={styles.line} />
                    </span>
                </button>

                <nav id="main-nav" className={styles.navShell} aria-label={t.header.navAria}>
                    <div className={styles.nav}>
                        {navItems.map(({ to, label }) => (
                            <NavLink
                                key={to}
                                to={to}
                                className={({ isActive }) => (isActive ? styles.linkActive : styles.link)}
                                onClick={closeMenu}
                            >
                                {label}
                            </NavLink>
                        ))}
                    </div>

                    <div className={styles.actions}>
                        <div
                            className={styles.languageDropdown}
                            data-open={languageOpen || undefined}
                        >
                            <button
                                type="button"
                                className={styles.languageTrigger}
                                aria-haspopup="menu"
                                aria-expanded={languageOpen}
                                aria-label={t.meta.language}
                                onClick={() => setLanguageOpen((value) => !value)}
                            >
                                <span>{LANGUAGE_LABELS[language]}</span>
                                <span className={styles.languageChevron} aria-hidden="true">
                                    ▾
                                </span>
                            </button>

                            <div className={styles.languageMenu} role="menu" aria-label={t.meta.language}>
                                {SUPPORTED_LANGUAGES.map((code) => (
                                    <button
                                        key={code}
                                        type="button"
                                        className={code === language ? styles.languageActive : styles.languageButton}
                                        onClick={() => {
                                            setLanguage(code);
                                            setLanguageOpen(false);
                                        }}
                                    >
                                        {LANGUAGE_LABELS[code]}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <Link to={ROUTES.DOWNLOAD} className={styles.primaryAction} onClick={closeMenu}>
                            {t.header.getDataGate}
                        </Link>
                    </div>
                </nav>
            </div>
        </header>
    );
}
