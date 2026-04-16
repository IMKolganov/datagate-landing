import React, { useState } from "react";
import { useLanguage } from "../i18n/LanguageProvider";
import styles from "./ContactsPage.module.css";

const EMAIL = "imkolganov@gmail.com";

export function ContactsPage(): React.JSX.Element {
    const { t } = useLanguage();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const subject = `${t.contacts.subjectPrefix}${name ? ` — ${name}` : ""}`;
        const body = [
            name ? `Name: ${name}` : "",
            email ? `Email: ${email}` : "",
            "",
            message,
        ]
            .filter(Boolean)
            .join("\n");

        window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    };

    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>{t.contacts.title}</h1>
            <p className={styles.subtitle}>{t.contacts.subtitle}</p>

            <div className={styles.grid}>
                <div className={styles.infoCard}>
                    <span className={styles.kicker}>{t.contacts.emailLabel}</span>
                    <h2 className={styles.cardTitle}>{t.contacts.cardTitle}</h2>
                    <p className={styles.cardText}>{t.contacts.cardText}</p>

                    <div className={styles.emailPanel}>
                        <span className={styles.emailLabel}>{t.contacts.emailLabel}</span>
                        <p className={styles.email}>
                            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                        </p>
                    </div>

                    <div className={styles.featureList}>
                        <div className={styles.featureItem}>
                            <span className={styles.featureNumber}>01</span>
                            <p className={styles.featureText}>Clients, server stack, releases, publishing questions.</p>
                        </div>
                        <div className={styles.featureItem}>
                            <span className={styles.featureNumber}>02</span>
                            <p className={styles.featureText}>No backend needed. The form opens a ready-to-send email draft.</p>
                        </div>
                    </div>

                    <p className={styles.note}>{t.contacts.formNote}</p>
                </div>

                <form className={styles.formCard} onSubmit={handleSubmit}>
                    <div className={styles.formHeader}>
                        <span className={styles.formEyebrow}>Message</span>
                        <h2 className={styles.formTitle}>{t.contacts.cardTitle}</h2>
                    </div>

                    <label className={styles.field}>
                        <span className={styles.label}>{t.contacts.formName}</span>
                        <input
                            className={styles.input}
                            type="text"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                            placeholder={t.contacts.formName}
                        />
                    </label>

                    <label className={styles.field}>
                        <span className={styles.label}>{t.contacts.formEmail}</span>
                        <input
                            className={styles.input}
                            type="email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            placeholder={t.contacts.formEmail}
                        />
                    </label>

                    <label className={styles.field}>
                        <span className={styles.label}>{t.contacts.formMessage}</span>
                        <textarea
                            className={styles.textarea}
                            value={message}
                            onChange={(event) => setMessage(event.target.value)}
                            placeholder={t.contacts.formMessage}
                            rows={7}
                            required
                        />
                    </label>

                    <button type="submit" className={styles.submit}>
                        {t.contacts.formSubmit}
                    </button>
                </form>
            </div>
        </div>
    );
}
