import React from "react";
import styles from "./ServerPage.module.css";

const DASHBOARD_REPO = "https://github.com/IMKolganov/OpenVpnGateMonitor";

export function ServerPage(): React.JSX.Element {
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>Server solutions</h1>
            <p className={styles.subtitle}>
                OpenVPN server stack with management API and web dashboard
            </p>

            <div className={`${styles.content} prose`}>
                <h2>Web dashboard</h2>
                <p>
                    DataGate includes a web-based dashboard for managing VPN infrastructure.
                    You can manage servers, users, certificates, and monitor connections in real time.
                    The dashboard talks to your server via a REST API.
                </p>
                <p>
                    Source code:{" "}
                    <a href={DASHBOARD_REPO} target="_blank" rel="noopener noreferrer">
                        OpenVpnGateMonitor
                    </a>
                </p>

                <h2>Server solution</h2>
                <p>
                    The server side combines <strong>OpenVPN</strong> with a <strong>Web API</strong> for
                    configuration and user management. You get a single stack that handles VPN tunnels,
                    certificate lifecycle, and access control from one place.
                </p>
                <p>
                    Optionally, the server can run behind a <strong>proxy</strong> (e.g. WSS — WebSocket Secure).
                    The proxy helps in restricted networks, adds an extra transport layer, and can sit in front
                    of both the API and the VPN traffic when needed.
                </p>
                <p>
                    Together, the dashboard and server solution give you full control over your VPN
                    infrastructure with a modern, API-driven setup.
                </p>
            </div>
        </div>
    );
}
