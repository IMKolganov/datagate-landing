import React from "react";
import styles from "./HomePage.module.css";

export function HomePage(): React.JSX.Element {
    return (
        <>
            <section className={styles.hero}>
                <h1 className={styles.title}>DataGate</h1>
                <p className={styles.subtitle}>
                    Secure, open-source OpenVPN ecosystem with a management dashboard.
                </p>
            </section>

            <div className={`${styles.content} prose`}>
                <p>
                    <strong>DataGate</strong> is a secure OpenVPN-based solution with a strong focus on privacy,
                    transparency, and modern infrastructure. The entire codebase is fully open source,
                    allowing anyone to audit, verify, and deploy the system independently.
                </p>

                <p>
                    The project includes an open-source Android mobile application that allows users
                    to securely connect to VPN servers. You can review the mobile application source code here:
                </p>

                <p>
                    <a
                        href="https://github.com/IMKolganov/DataGateAndroid"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        https://github.com/IMKolganov/DataGateAndroid
                    </a>
                </p>

                <p>
                    DataGate also provides a web-based dashboard for managing VPN servers, users,
                    certificates, and connections in real time.
                </p>

                <p>
                    <a
                        href="https://github.com/IMKolganov/OpenVpnGateMonitor"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        https://github.com/IMKolganov/OpenVpnGateMonitor
                    </a>
                </p>

                <p>
                    You can deploy your own OpenVPN server using DataGate and enhance security by
                    running it behind a <strong>WSS (WebSocket Secure) proxy</strong>. This approach
                    helps bypass restrictive networks and adds an additional transport-layer
                    security mechanism.
                </p>

                <p>
                    DataGate is designed for developers and teams who want full control over their VPN
                    infrastructure without relying on closed or opaque solutions.
                </p>
            </div>
        </>
    );
}
