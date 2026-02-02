import React from "react";
import styles from "./ContactsPage.module.css";

const EMAIL = "imkolganov@gmail.com";

export function ContactsPage(): React.JSX.Element {
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>Contacts</h1>
            <p className={styles.subtitle}>
                For questions and support, write to us:
            </p>
            <p className={styles.email}>
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </p>
        </div>
    );
}
