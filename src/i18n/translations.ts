export const SUPPORTED_LANGUAGES = ["ru", "en", "fr", "de", "el"] as const;

export type Language = (typeof SUPPORTED_LANGUAGES)[number];

type NavLabels = {
    home: string;
    download: string;
    server: string;
    contacts: string;
    about: string;
};

type Repo = {
    name: string;
    description: string;
    href: string;
};

type DownloadItem = {
    id: string;
    name: string;
    description: string;
    href?: string;
    label: string;
};

export type Translation = {
    meta: {
        language: string;
        skipToMain: string;
        lastUpdated: string;
    };
    header: {
        logoTag: string;
        menuOpen: string;
        menuClose: string;
        navAria: string;
        nav: NavLabels;
        github: string;
        getDataGate: string;
    };
    footer: {
        statement: string;
        download: string;
        server: string;
        privacy: string;
    };
    home: {
        eyebrow: string;
        title: string;
        subtitle: string;
        downloadClients: string;
        downloadFor: string;
        exploreServer: string;
        highlights: Array<{ title: string; description: string }>;
        overviewLabel: string;
        overviewTitle: string;
        overviewParagraphs: string[];
        clientsLabel: string;
        clientsTitle: string;
        serverLabel: string;
        serverTitle: string;
        openRepository: string;
        clientRepos: Repo[];
        serverRepos: Repo[];
    };
    download: {
        eyebrow: string;
        title: string;
        subtitle: string;
        desktop: string;
        mobile: string;
        comingSoon: string;
        items: DownloadItem[];
    };
    server: {
        title: string;
        subtitle: string;
        webDashboard: string;
        webDashboardParagraph: string;
        sourceCode: string;
        serverSolution: string;
        paragraphs: string[];
    };
    contacts: {
        title: string;
        subtitle: string;
        cardTitle: string;
        cardText: string;
        formName: string;
        formEmail: string;
        formMessage: string;
        formSubmit: string;
        formNote: string;
        emailLabel: string;
        subjectPrefix: string;
    };
    about: {
        title: string;
        paragraphs: string[];
        privacyLead: string;
        privacyLink: string;
        privacyTail: string;
    };
    privacy: {
        title: string;
        intro: string;
        collectTitle: string;
        collectLead: string;
        collectItems: string[];
        notCollectLead: string;
        notCollectItems: string[];
        useTitle: string;
        useItems: string[];
        storageTitle: string;
        storageText: string;
        thirdPartyTitle: string;
        thirdPartyText: string;
        childrenTitle: string;
        childrenText: string;
        contactTitle: string;
        contactText: string;
        deleteLead: string;
        deleteLink: string;
    };
    deleteAccount: {
        title: string;
        intro: string;
        requestTitle: string;
        requestLead: string;
        requestSubject: string;
        deletedTitle: string;
        deletedLead: string;
        deletedItems: string[];
        notCollectedTitle: string;
        notCollectedItems: string[];
        timeframeTitle: string;
        timeframeText: string;
        retentionTitle: string;
        retentionText: string;
    };
};

const commonRepos = {
    windows: "https://github.com/IMKolganov/DataGateWin",
    windowsReleases: "https://github.com/IMKolganov/DataGateWin/releases/latest",
    android: "https://github.com/IMKolganov/DataGateAndroid",
    androidReleases: "https://github.com/IMKolganov/DataGateAndroid/releases",
    linux: "https://github.com/IMKolganov/DataGateLinux",
    linuxReleases: "https://github.com/IMKolganov/DataGateLinux/releases",
    server: "https://github.com/IMKolganov/OpenVpnGateMonitor",
};

export const translations: Record<Language, Translation> = {
    ru: {
        meta: {
            language: "Язык",
            skipToMain: "Перейти к основному содержимому",
            lastUpdated: "Последнее обновление: декабрь 2025",
        },
        header: {
            logoTag: "Open-source VPN stack",
            menuOpen: "Открыть меню",
            menuClose: "Закрыть меню",
            navAria: "Основная навигация",
            nav: {
                home: "Главная",
                download: "Скачать",
                server: "Сервер",
                contacts: "Контакты",
                about: "О проекте",
            },
            github: "GitHub",
            getDataGate: "Скачать",
        },
        footer: {
            statement: "Открытые клиенты и серверные инструменты для команд, которым нужен полный контроль над VPN.",
            download: "Скачать",
            server: "Сервер",
            privacy: "Политика конфиденциальности",
        },
        home: {
            eyebrow: "Экосистема OpenVPN",
            title: "DataGate даёт открытый и управляемый VPN-стек без чёрного ящика.",
            subtitle: "Клиенты, серверные инструменты и панель управления в одной экосистеме для приватных и контролируемых развёртываний.",
            downloadClients: "Скачать клиенты",
            downloadFor: "Скачать для",
            exploreServer: "Серверный стек",
            highlights: [
                {
                    title: "Открытый код",
                    description: "Ключевые части экосистемы можно проверять, самостоятельно разворачивать и адаптировать под свою инфраструктуру.",
                },
                {
                    title: "Клиенты для разных платформ",
                    description: "Desktop- и mobile-приложения дают единый путь подключения без зависимости от закрытого вендора.",
                },
                {
                    title: "Контроль инфраструктуры",
                    description: "Панель управления объединяет пользователей, сертификаты и соединения в одном месте.",
                },
            ],
            overviewLabel: "Почему DataGate",
            overviewTitle: "Сделано для тех, кому нужен контроль, а не закрытая коробка.",
            overviewParagraphs: [
                "DataGate — это безопасное решение на базе OpenVPN с упором на приватность, прозрачность и современную инфраструктуру. Весь код проекта открыт, поэтому систему можно проверять, разворачивать и использовать независимо.",
                "DataGate также включает web-панель для управления VPN-серверами, пользователями, сертификатами и соединениями в реальном времени.",
                "Сервер можно размещать за WSS-прокси (WebSocket Secure), чтобы обходить ограничения сети и добавлять дополнительный транспортный уровень защиты.",
                "Проект рассчитан на разработчиков и команды, которым нужен полный контроль над VPN-инфраструктурой без закрытых решений.",
            ],
            clientsLabel: "Клиенты",
            clientsTitle: "Desktop и mobile приложения",
            serverLabel: "Серверный стек",
            serverTitle: "Панель управления и инфраструктура",
            openRepository: "Открыть репозиторий",
            clientRepos: [
                {
                    name: "Windows client",
                    description: "Desktop-клиент для Windows с основным сценарием подключения и доступа в экосистеме DataGate.",
                    href: commonRepos.windows,
                },
                {
                    name: "Android client",
                    description: "Открытый мобильный клиент для безопасного VPN-доступа на Android.",
                    href: commonRepos.android,
                },
                {
                    name: "Linux client",
                    description: "Нативный desktop-клиент для Linux с тем же сценарием подключения, что и в DataGate.",
                    href: commonRepos.linux,
                },
            ],
            serverRepos: [
                {
                    name: "Server management dashboard",
                    description: "Web-панель и API-слой для управления VPN-инфраструктурой в реальном времени.",
                    href: commonRepos.server,
                },
            ],
        },
        download: {
            eyebrow: "Загрузки",
            title: "Выберите клиент DataGate",
            subtitle: "Официальные desktop и mobile сборки с прямыми ссылками на репозитории и страницы релизов.",
            desktop: "Desktop",
            mobile: "Mobile",
            comingSoon: "Скоро",
            items: [
                { id: "windows", name: "Windows", description: "Desktop client для Windows 10/11", href: commonRepos.windowsReleases, label: "Скачать" },
                { id: "linux", name: "Linux", description: "Desktop client для Linux", href: commonRepos.linuxReleases, label: "Релизы" },
                { id: "macos", name: "macOS", description: "Desktop client для Mac", label: "Скоро" },
                { id: "android", name: "Android", description: "Мобильное приложение — APK и релизы GitHub", href: commonRepos.androidReleases, label: "Релизы" },
                { id: "ios", name: "iOS", description: "Мобильное приложение для iPhone и iPad", label: "Недоступно" },
            ],
        },
        server: {
            title: "Серверные решения",
            subtitle: "OpenVPN server stack с management API и web dashboard",
            webDashboard: "Web dashboard",
            webDashboardParagraph: "DataGate включает web-панель для управления VPN-инфраструктурой. Можно управлять серверами, пользователями, сертификатами и отслеживать соединения в реальном времени. Панель взаимодействует с сервером через REST API.",
            sourceCode: "Исходный код",
            serverSolution: "Серверное решение",
            paragraphs: [
                "Серверная часть объединяет OpenVPN и Web API для конфигурации и управления пользователями. Это единый стек для VPN-туннелей, жизненного цикла сертификатов и контроля доступа.",
                "При необходимости сервер можно разместить за proxy, например WSS (WebSocket Secure). Это помогает работать в ограниченных сетях и добавляет дополнительный транспортный уровень.",
                "Вместе панель управления и серверная часть дают полный контроль над VPN-инфраструктурой в современном API-driven формате.",
            ],
        },
        contacts: {
            title: "Контакты",
            subtitle: "По вопросам и поддержке пишите нам:",
            cardTitle: "Связаться напрямую",
            cardText: "Если у вас вопрос по клиентам, серверной части или публикациям, можно написать через форму ниже.",
            formName: "Ваше имя",
            formEmail: "Email",
            formMessage: "Сообщение",
            formSubmit: "Открыть письмо",
            formNote: "Форма не требует бэкенда: мы откроем ваш почтовый клиент с уже собранным письмом.",
            emailLabel: "Основной email",
            subjectPrefix: "Сообщение с сайта DataGate",
        },
        about: {
            title: "О DataGate",
            paragraphs: [
                "DataGate — это безопасная открытая экосистема OpenVPN с панелью управления. Проект ориентирован на приватность, прозрачность и современную инфраструктуру. Исходный код полностью открыт, поэтому систему можно проверять, разворачивать и использовать независимо.",
                "DataGate включает Android-приложение, desktop-клиенты для Windows и Linux, а также web-панель для управления VPN-серверами и пользователями.",
            ],
            privacyLead: "Подробнее о том, как обрабатываются данные, смотрите в ",
            privacyLink: "Политике конфиденциальности",
            privacyTail: ".",
        },
        privacy: {
            title: "Политика конфиденциальности",
            intro: "DataGate (\"мы\", \"нас\", \"наш\") управляет мобильным приложением DataGate. Мы уважаем вашу конфиденциальность и стремимся защищать персональные данные.",
            collectTitle: "1. Какие данные мы собираем",
            collectLead: "Мы можем собирать и обрабатывать следующие данные:",
            collectItems: [
                "Данные аутентификации (access tokens, refresh tokens)",
                "Идентификаторы пользователя (installation ID, external user ID)",
                "Метаданные VPN-подключения (состояние подключения, выбранный сервер)",
                "Crash logs и диагностические данные об ошибках",
                "Информацию об устройстве и операционной системе",
            ],
            notCollectLead: "Мы НЕ собираем:",
            notCollectItems: [
                "Историю браузера",
                "Содержимое трафика",
                "DNS-запросы",
                "Личные файлы",
                "Данные о местоположении",
            ],
            useTitle: "2. Как мы используем данные",
            useItems: [
                "Аутентификация пользователей",
                "Установка и поддержка VPN-соединений",
                "Повышение стабильности и производительности приложения",
                "Диагностика ошибок и сбоев",
            ],
            storageTitle: "3. Хранение данных",
            storageText: "Токены аутентификации безопасно хранятся на устройстве пользователя. Данные на стороне сервера хранятся на защищённых серверах.",
            thirdPartyTitle: "4. Сторонние сервисы",
            thirdPartyText: "Приложение может использовать сторонние сервисы, такие как Google Sign-In и backend-провайдеры инфраструктуры, для работы сервиса.",
            childrenTitle: "5. Конфиденциальность детей",
            childrenText: "Приложение не предназначено для детей младше 13 лет. Мы сознательно не собираем персональные данные детей.",
            contactTitle: "6. Контакты",
            contactText: "Если у вас есть вопросы по этой Политике конфиденциальности, свяжитесь с нами по адресу:",
            deleteLead: "Чтобы запросить удаление аккаунта и данных, смотрите ",
            deleteLink: "Удаление аккаунта",
        },
        deleteAccount: {
            title: "Удаление данных",
            intro: "На этой странице объясняется, как запросить удаление персональных данных, связанных с DataGate. Можно запросить удаление данных отдельно или удалить аккаунт вместе с данными.",
            requestTitle: "Как запросить удаление данных",
            requestLead: "Отправьте письмо с Google-аккаунта, который использовался для входа в приложение, на адрес:",
            requestSubject: "Тема письма: Delete my DataGate data",
            deletedTitle: "Какие данные будут удалены",
            deletedLead: "После проверки запроса мы навсегда удалим данные, связанные с вашим аккаунтом, включая:",
            deletedItems: [
                "Идентификаторы пользователя (installation ID, external user ID)",
                "Данные аккаунта и серверные записи пользователя",
                "VPN-конфигурации, хранящиеся на наших серверах",
                "Отчёты о сбоях и ошибках, связанные с аккаунтом (если есть)",
            ],
            notCollectedTitle: "Какие данные НЕ собираются",
            notCollectedItems: [
                "История браузера",
                "Содержимое трафика",
                "DNS-запросы",
                "Данные о местоположении",
            ],
            timeframeTitle: "Срок удаления",
            timeframeText: "Запросы на удаление данных выполняются в течение 30 дней с момента получения запроса.",
            retentionTitle: "Хранение данных",
            retentionText: "Часть данных может сохраняться, если этого требуют применимые законы или нормативные акты. Такие данные не будут использоваться для других целей.",
        },
    },
    en: {
        meta: {
            language: "Language",
            skipToMain: "Skip to main content",
            lastUpdated: "Last updated: December 2025",
        },
        header: {
            logoTag: "Open-source VPN stack",
            menuOpen: "Open menu",
            menuClose: "Close menu",
            navAria: "Main navigation",
            nav: {
                home: "Home",
                download: "Download",
                server: "Server",
                contacts: "Contacts",
                about: "About",
            },
            github: "GitHub",
            getDataGate: "Get DataGate",
        },
        footer: {
            statement: "Secure, open-source clients and server tooling for teams that want full VPN control.",
            download: "Download",
            server: "Server",
            privacy: "Privacy Policy",
        },
        home: {
            eyebrow: "OpenVPN ecosystem",
            title: "DataGate gives you a secure, open-source VPN stack you can actually control.",
            subtitle: "Clients, server tooling, and a management dashboard packaged into one ecosystem for privacy-focused deployments.",
            downloadClients: "Download clients",
            downloadFor: "Download for",
            exploreServer: "Explore server stack",
            highlights: [
                {
                    title: "Open source first",
                    description: "Every major part of the ecosystem is auditable, self-hostable, and built for teams that want control.",
                },
                {
                    title: "Cross-platform clients",
                    description: "Desktop and mobile apps give users a consistent way to connect without vendor lock-in.",
                },
                {
                    title: "Infrastructure visibility",
                    description: "Dashboard-driven server management keeps users, certificates, and connections in one place.",
                },
            ],
            overviewLabel: "Why DataGate",
            overviewTitle: "Built for operators who do not want a black box.",
            overviewParagraphs: [
                "DataGate is a secure OpenVPN-based solution with a strong focus on privacy, transparency, and modern infrastructure. The entire codebase is fully open source, allowing anyone to audit, verify, and deploy the system independently.",
                "DataGate also provides a web-based dashboard for managing VPN servers, users, certificates, and connections in real time.",
                "You can deploy your own OpenVPN server using DataGate and enhance security by running it behind a WSS (WebSocket Secure) proxy. This approach helps bypass restrictive networks and adds an additional transport-layer security mechanism.",
                "DataGate is designed for developers and teams who want full control over their VPN infrastructure without relying on closed or opaque solutions.",
            ],
            clientsLabel: "Clients",
            clientsTitle: "Desktop and mobile apps",
            serverLabel: "Server stack",
            serverTitle: "Management dashboard and infrastructure",
            openRepository: "Open repository",
            clientRepos: [
                {
                    name: "Windows client",
                    description: "Desktop client for Windows with the core DataGate connection and access flow.",
                    href: commonRepos.windows,
                },
                {
                    name: "Android client",
                    description: "Open-source mobile client for secure VPN access on Android devices.",
                    href: commonRepos.android,
                },
                {
                    name: "Linux client",
                    description: "Native desktop client for Linux with the same DataGate connection flow.",
                    href: commonRepos.linux,
                },
            ],
            serverRepos: [
                {
                    name: "Server management dashboard",
                    description: "Web dashboard and API layer for managing VPN infrastructure in real time.",
                    href: commonRepos.server,
                },
            ],
        },
        download: {
            eyebrow: "Downloads",
            title: "Choose your DataGate client",
            subtitle: "Official desktop and mobile builds, with direct links to repositories and release pages.",
            desktop: "Desktop",
            mobile: "Mobile",
            comingSoon: "Coming soon",
            items: [
                { id: "windows", name: "Windows", description: "Desktop client for Windows 10/11", href: commonRepos.windowsReleases, label: "Download" },
                { id: "linux", name: "Linux", description: "Desktop client for Linux", href: commonRepos.linuxReleases, label: "Releases" },
                { id: "macos", name: "macOS", description: "Desktop client for Mac", label: "Coming soon" },
                { id: "android", name: "Android", description: "Mobile app — APK and GitHub releases", href: commonRepos.androidReleases, label: "Releases" },
                { id: "ios", name: "iOS", description: "Mobile app for iPhone and iPad", label: "Unavailable" },
            ],
        },
        server: {
            title: "Server solutions",
            subtitle: "OpenVPN server stack with management API and web dashboard",
            webDashboard: "Web dashboard",
            webDashboardParagraph: "DataGate includes a web-based dashboard for managing VPN infrastructure. You can manage servers, users, certificates, and monitor connections in real time. The dashboard talks to your server via a REST API.",
            sourceCode: "Source code",
            serverSolution: "Server solution",
            paragraphs: [
                "The server side combines OpenVPN with a Web API for configuration and user management. You get a single stack that handles VPN tunnels, certificate lifecycle, and access control from one place.",
                "Optionally, the server can run behind a proxy, such as WSS (WebSocket Secure). The proxy helps in restricted networks and adds an extra transport layer.",
                "Together, the dashboard and server solution give you full control over your VPN infrastructure with a modern, API-driven setup.",
            ],
        },
        contacts: {
            title: "Contacts",
            subtitle: "For questions and support, write to us:",
            cardTitle: "Get in touch",
            cardText: "If you have questions about the clients, server stack, or releases, use the form below.",
            formName: "Your name",
            formEmail: "Email",
            formMessage: "Message",
            formSubmit: "Open email draft",
            formNote: "No backend required: the form opens your mail client with a prepared draft.",
            emailLabel: "Primary email",
            subjectPrefix: "Message from DataGate website",
        },
        about: {
            title: "About DataGate",
            paragraphs: [
                "DataGate is a secure, open-source OpenVPN ecosystem with a management dashboard. It focuses on privacy, transparency, and modern infrastructure. The project is fully open source so anyone can audit, verify, and deploy it independently.",
                "DataGate includes a mobile app for Android, desktop clients for Windows and Linux, and a web dashboard for managing VPN servers and users.",
            ],
            privacyLead: "For details on how we handle your data, see our ",
            privacyLink: "Privacy Policy",
            privacyTail: ".",
        },
        privacy: {
            title: "Privacy Policy",
            intro: "DataGate (\"we\", \"our\", or \"us\") operates the DataGate mobile application. We respect your privacy and are committed to protecting your personal data.",
            collectTitle: "1. Information We Collect",
            collectLead: "We may collect and process the following data:",
            collectItems: [
                "Authentication data (access tokens, refresh tokens)",
                "User identifiers (installation ID, external user ID)",
                "VPN connection metadata (connection state, selected server)",
                "Crash logs and error diagnostics",
                "Device and operating system information",
            ],
            notCollectLead: "We do NOT collect:",
            notCollectItems: [
                "Browsing history",
                "Traffic contents",
                "DNS queries",
                "Personal files",
                "Location data",
            ],
            useTitle: "2. How We Use Data",
            useItems: [
                "Authenticate users",
                "Establish and maintain VPN connections",
                "Improve application stability and performance",
                "Diagnose errors and crashes",
            ],
            storageTitle: "3. Data Storage",
            storageText: "Authentication tokens are stored securely on the user's device. Server-side data is stored on secure servers.",
            thirdPartyTitle: "4. Third-Party Services",
            thirdPartyText: "The application may use third-party services such as Google Sign-In and backend infrastructure providers to operate the service.",
            childrenTitle: "5. Children's Privacy",
            childrenText: "This application is not intended for children under the age of 13. We do not knowingly collect personal data from children.",
            contactTitle: "6. Contact",
            contactText: "If you have any questions about this Privacy Policy, contact us at:",
            deleteLead: "To request deletion of your account and data, see ",
            deleteLink: "Delete account",
        },
        deleteAccount: {
            title: "Data Deletion",
            intro: "This page explains how to request deletion of your personal data associated with DataGate. You can request data deletion without deleting your account, or you can delete the account and data together.",
            requestTitle: "How to request data deletion",
            requestLead: "Send an email from the Google account used to sign in to the application to:",
            requestSubject: "Email subject: Delete my DataGate data",
            deletedTitle: "What data will be deleted",
            deletedLead: "After your request is verified, we will permanently delete data associated with your account, including:",
            deletedItems: [
                "User identifiers (installation ID, external user ID)",
                "Account and server-side user records",
                "VPN configuration data stored on our servers",
                "Crash/error reports associated with your account (if any)",
            ],
            notCollectedTitle: "What data is NOT collected",
            notCollectedItems: [
                "Browsing history",
                "Traffic contents",
                "DNS queries",
                "Location data",
            ],
            timeframeTitle: "Deletion timeframe",
            timeframeText: "Data deletion requests are completed within 30 days from the date the request is received.",
            retentionTitle: "Data retention",
            retentionText: "Some data may be retained if required by applicable laws or regulations. Any retained data will not be used for other purposes.",
        },
    },
    fr: {
        meta: {
            language: "Langue",
            skipToMain: "Aller au contenu principal",
            lastUpdated: "Dernière mise à jour : décembre 2025",
        },
        header: {
            logoTag: "Stack VPN open source",
            menuOpen: "Ouvrir le menu",
            menuClose: "Fermer le menu",
            navAria: "Navigation principale",
            nav: {
                home: "Accueil",
                download: "Télécharger",
                server: "Serveur",
                contacts: "Contacts",
                about: "À propos",
            },
            github: "GitHub",
            getDataGate: "Télécharger",
        },
        footer: {
            statement: "Clients open source et outils serveur pour les équipes qui veulent un contrôle total du VPN.",
            download: "Télécharger",
            server: "Serveur",
            privacy: "Politique de confidentialité",
        },
        home: {
            eyebrow: "Écosystème OpenVPN",
            title: "DataGate vous offre une pile VPN open source, sécurisée et réellement contrôlable.",
            subtitle: "Clients, outils serveur et tableau de bord d'administration réunis dans un seul écosystème pour des déploiements orientés confidentialité.",
            downloadClients: "Télécharger les clients",
            downloadFor: "Télécharger pour",
            exploreServer: "Découvrir la partie serveur",
            highlights: [
                {
                    title: "Open source d'abord",
                    description: "Chaque partie majeure de l'écosystème est auditable, auto-hébergeable et conçue pour les équipes qui veulent garder le contrôle.",
                },
                {
                    title: "Clients multiplateformes",
                    description: "Les applications desktop et mobile offrent une expérience cohérente sans dépendance à un fournisseur fermé.",
                },
                {
                    title: "Visibilité sur l'infrastructure",
                    description: "Le tableau de bord centralise les utilisateurs, les certificats et les connexions.",
                },
            ],
            overviewLabel: "Pourquoi DataGate",
            overviewTitle: "Conçu pour les équipes qui refusent les boîtes noires.",
            overviewParagraphs: [
                "DataGate est une solution sécurisée basée sur OpenVPN, centrée sur la confidentialité, la transparence et une infrastructure moderne. L'ensemble du code est open source, ce qui permet un audit, une vérification et un déploiement indépendants.",
                "DataGate propose également un tableau de bord web pour gérer les serveurs VPN, les utilisateurs, les certificats et les connexions en temps réel.",
                "Vous pouvez déployer votre propre serveur OpenVPN avec DataGate et renforcer la sécurité en le plaçant derrière un proxy WSS (WebSocket Secure). Cela aide à contourner les réseaux restrictifs et ajoute une couche de sécurité transport.",
                "DataGate s'adresse aux développeurs et aux équipes qui veulent garder un contrôle total de leur infrastructure VPN sans dépendre de solutions fermées.",
            ],
            clientsLabel: "Clients",
            clientsTitle: "Applications desktop et mobile",
            serverLabel: "Pile serveur",
            serverTitle: "Tableau de bord et infrastructure",
            openRepository: "Ouvrir le dépôt",
            clientRepos: [
                {
                    name: "Client Windows",
                    description: "Client desktop pour Windows avec le flux principal de connexion et d'accès de DataGate.",
                    href: commonRepos.windows,
                },
                {
                    name: "Client Android",
                    description: "Client mobile open source pour un accès VPN sécurisé sur Android.",
                    href: commonRepos.android,
                },
                {
                    name: "Client Linux",
                    description: "Client desktop natif pour Linux avec le même flux de connexion DataGate.",
                    href: commonRepos.linux,
                },
            ],
            serverRepos: [
                {
                    name: "Tableau de bord serveur",
                    description: "Tableau de bord web et couche API pour gérer l'infrastructure VPN en temps réel.",
                    href: commonRepos.server,
                },
            ],
        },
        download: {
            eyebrow: "Téléchargements",
            title: "Choisissez votre client DataGate",
            subtitle: "Builds desktop et mobile officiels avec liens directs vers les dépôts et les pages de publication.",
            desktop: "Desktop",
            mobile: "Mobile",
            comingSoon: "Bientôt disponible",
            items: [
                { id: "windows", name: "Windows", description: "Client desktop pour Windows 10/11", href: commonRepos.windowsReleases, label: "Télécharger" },
                { id: "linux", name: "Linux", description: "Client desktop pour Linux", href: commonRepos.linuxReleases, label: "Publications" },
                { id: "macos", name: "macOS", description: "Client desktop pour Mac", label: "Bientôt disponible" },
                { id: "android", name: "Android", description: "Application mobile — APK et publications GitHub", href: commonRepos.androidReleases, label: "Publications" },
                { id: "ios", name: "iOS", description: "Application mobile pour iPhone et iPad", label: "Indisponible" },
            ],
        },
        server: {
            title: "Solutions serveur",
            subtitle: "Pile serveur OpenVPN avec API de gestion et tableau de bord web",
            webDashboard: "Tableau de bord web",
            webDashboardParagraph: "DataGate inclut un tableau de bord web pour gérer l'infrastructure VPN. Vous pouvez gérer les serveurs, les utilisateurs, les certificats et surveiller les connexions en temps réel. Le tableau de bord communique avec votre serveur via une API REST.",
            sourceCode: "Code source",
            serverSolution: "Solution serveur",
            paragraphs: [
                "La partie serveur combine OpenVPN et une API web pour la configuration et la gestion des utilisateurs. Vous obtenez une pile unique pour les tunnels VPN, le cycle de vie des certificats et le contrôle d'accès.",
                "Le serveur peut également fonctionner derrière un proxy, par exemple WSS (WebSocket Secure). Cela aide dans les réseaux restreints et ajoute une couche de transport supplémentaire.",
                "Ensemble, le tableau de bord et la solution serveur donnent un contrôle complet de l'infrastructure VPN avec une approche moderne pilotée par API.",
            ],
        },
        contacts: {
            title: "Contacts",
            subtitle: "Pour toute question ou demande d'assistance, écrivez-nous :",
            cardTitle: "Nous contacter",
            cardText: "Si vous avez une question sur les clients, la partie serveur ou les publications, utilisez le formulaire ci-dessous.",
            formName: "Votre nom",
            formEmail: "Email",
            formMessage: "Message",
            formSubmit: "Ouvrir le message",
            formNote: "Aucun backend requis : le formulaire ouvre votre client mail avec un brouillon prêt.",
            emailLabel: "Email principal",
            subjectPrefix: "Message depuis le site DataGate",
        },
        about: {
            title: "À propos de DataGate",
            paragraphs: [
                "DataGate est un écosystème OpenVPN sécurisé et open source avec un tableau de bord d'administration. Le projet met l'accent sur la confidentialité, la transparence et une infrastructure moderne. Le code source est entièrement ouvert, ce qui permet un audit, une vérification et un déploiement indépendants.",
                "DataGate comprend une application Android, des clients desktop pour Windows et Linux, ainsi qu'un tableau de bord web pour gérer les serveurs VPN et les utilisateurs.",
            ],
            privacyLead: "Pour savoir comment nous traitons vos données, consultez notre ",
            privacyLink: "Politique de confidentialité",
            privacyTail: ".",
        },
        privacy: {
            title: "Politique de confidentialité",
            intro: "DataGate (« nous », « notre », « nos ») exploite l'application mobile DataGate. Nous respectons votre vie privée et nous engageons à protéger vos données personnelles.",
            collectTitle: "1. Informations que nous collectons",
            collectLead: "Nous pouvons collecter et traiter les données suivantes :",
            collectItems: [
                "Données d'authentification (access tokens, refresh tokens)",
                "Identifiants utilisateur (installation ID, external user ID)",
                "Métadonnées de connexion VPN (état de la connexion, serveur sélectionné)",
                "Journaux de crash et diagnostics d'erreur",
                "Informations sur l'appareil et le système d'exploitation",
            ],
            notCollectLead: "Nous ne collectons PAS :",
            notCollectItems: [
                "Historique de navigation",
                "Contenu du trafic",
                "Requêtes DNS",
                "Fichiers personnels",
                "Données de localisation",
            ],
            useTitle: "2. Comment nous utilisons les données",
            useItems: [
                "Authentifier les utilisateurs",
                "Établir et maintenir les connexions VPN",
                "Améliorer la stabilité et les performances de l'application",
                "Diagnostiquer les erreurs et les crashs",
            ],
            storageTitle: "3. Stockage des données",
            storageText: "Les jetons d'authentification sont stockés de manière sécurisée sur l'appareil de l'utilisateur. Les données côté serveur sont stockées sur des serveurs sécurisés.",
            thirdPartyTitle: "4. Services tiers",
            thirdPartyText: "L'application peut utiliser des services tiers tels que Google Sign-In et des fournisseurs d'infrastructure backend pour fonctionner.",
            childrenTitle: "5. Vie privée des enfants",
            childrenText: "Cette application n'est pas destinée aux enfants de moins de 13 ans. Nous ne collectons pas sciemment de données personnelles concernant des enfants.",
            contactTitle: "6. Contact",
            contactText: "Si vous avez des questions concernant cette politique de confidentialité, contactez-nous à l'adresse suivante :",
            deleteLead: "Pour demander la suppression de votre compte et de vos données, consultez ",
            deleteLink: "Suppression du compte",
        },
        deleteAccount: {
            title: "Suppression des données",
            intro: "Cette page explique comment demander la suppression de vos données personnelles associées à DataGate. Vous pouvez demander la suppression des données sans supprimer votre compte, ou supprimer le compte et les données ensemble.",
            requestTitle: "Comment demander la suppression des données",
            requestLead: "Envoyez un email depuis le compte Google utilisé pour vous connecter à l'application à l'adresse suivante :",
            requestSubject: "Objet du message : Delete my DataGate data",
            deletedTitle: "Quelles données seront supprimées",
            deletedLead: "Après vérification de votre demande, nous supprimerons définitivement les données associées à votre compte, notamment :",
            deletedItems: [
                "Identifiants utilisateur (installation ID, external user ID)",
                "Compte et enregistrements utilisateur côté serveur",
                "Données de configuration VPN stockées sur nos serveurs",
                "Rapports de crash ou d'erreur associés à votre compte (le cas échéant)",
            ],
            notCollectedTitle: "Quelles données ne sont PAS collectées",
            notCollectedItems: [
                "Historique de navigation",
                "Contenu du trafic",
                "Requêtes DNS",
                "Données de localisation",
            ],
            timeframeTitle: "Délai de suppression",
            timeframeText: "Les demandes de suppression des données sont traitées dans un délai de 30 jours à compter de leur réception.",
            retentionTitle: "Conservation des données",
            retentionText: "Certaines données peuvent être conservées si la loi ou la réglementation applicable l'exige. Les données conservées ne seront pas utilisées à d'autres fins.",
        },
    },
    de: {
        meta: {
            language: "Sprache",
            skipToMain: "Zum Hauptinhalt springen",
            lastUpdated: "Zuletzt aktualisiert: Dezember 2025",
        },
        header: {
            logoTag: "Open-Source-VPN-Stack",
            menuOpen: "Menü öffnen",
            menuClose: "Menü schließen",
            navAria: "Hauptnavigation",
            nav: {
                home: "Start",
                download: "Download",
                server: "Server",
                contacts: "Kontakt",
                about: "Über",
            },
            github: "GitHub",
            getDataGate: "Download",
        },
        footer: {
            statement: "Open-Source-Clients und Server-Tools für Teams, die vollständige Kontrolle über ihr VPN wollen.",
            download: "Download",
            server: "Server",
            privacy: "Datenschutz",
        },
        home: {
            eyebrow: "OpenVPN-Ökosystem",
            title: "DataGate bietet einen sicheren Open-Source-VPN-Stack, den Sie wirklich kontrollieren können.",
            subtitle: "Clients, Server-Tools und ein Verwaltungs-Dashboard in einem Ökosystem für datenschutzorientierte Deployments.",
            downloadClients: "Clients herunterladen",
            downloadFor: "Download für",
            exploreServer: "Server-Stack ansehen",
            highlights: [
                {
                    title: "Open Source zuerst",
                    description: "Jeder zentrale Teil des Ökosystems ist auditierbar, selbst hostbar und für Teams gebaut, die Kontrolle wollen.",
                },
                {
                    title: "Plattformübergreifende Clients",
                    description: "Desktop- und Mobile-Apps bieten einen konsistenten Verbindungsweg ohne Vendor Lock-in.",
                },
                {
                    title: "Infrastruktur im Blick",
                    description: "Das Dashboard bündelt Benutzer, Zertifikate und Verbindungen an einem Ort.",
                },
            ],
            overviewLabel: "Warum DataGate",
            overviewTitle: "Für Betreiber gebaut, die keine Blackbox wollen.",
            overviewParagraphs: [
                "DataGate ist eine sichere OpenVPN-basierte Lösung mit starkem Fokus auf Datenschutz, Transparenz und moderne Infrastruktur. Die gesamte Codebasis ist Open Source und kann unabhängig geprüft, verifiziert und bereitgestellt werden.",
                "DataGate bietet außerdem ein webbasiertes Dashboard zur Verwaltung von VPN-Servern, Benutzern, Zertifikaten und Verbindungen in Echtzeit.",
                "Sie können Ihren eigenen OpenVPN-Server mit DataGate betreiben und die Sicherheit erhöhen, indem Sie ihn hinter einem WSS-Proxy (WebSocket Secure) ausführen. Das hilft in restriktiven Netzwerken und fügt eine zusätzliche Transportschicht hinzu.",
                "DataGate richtet sich an Entwickler und Teams, die volle Kontrolle über ihre VPN-Infrastruktur möchten, ohne auf geschlossene Lösungen angewiesen zu sein.",
            ],
            clientsLabel: "Clients",
            clientsTitle: "Desktop- und Mobile-Apps",
            serverLabel: "Server-Stack",
            serverTitle: "Verwaltungs-Dashboard und Infrastruktur",
            openRepository: "Repository öffnen",
            clientRepos: [
                {
                    name: "Windows-Client",
                    description: "Desktop-Client für Windows mit dem zentralen Verbindungs- und Zugriffsfluss von DataGate.",
                    href: commonRepos.windows,
                },
                {
                    name: "Android-Client",
                    description: "Open-Source-Mobile-Client für sicheren VPN-Zugriff auf Android-Geräten.",
                    href: commonRepos.android,
                },
                {
                    name: "Linux-Client",
                    description: "Nativer Desktop-Client für Linux mit demselben DataGate-Verbindungsfluss.",
                    href: commonRepos.linux,
                },
            ],
            serverRepos: [
                {
                    name: "Server-Management-Dashboard",
                    description: "Web-Dashboard und API-Schicht zur Verwaltung der VPN-Infrastruktur in Echtzeit.",
                    href: commonRepos.server,
                },
            ],
        },
        download: {
            eyebrow: "Downloads",
            title: "Wählen Sie Ihren DataGate-Client",
            subtitle: "Offizielle Desktop- und Mobile-Builds mit direkten Links zu Repositories und Release-Seiten.",
            desktop: "Desktop",
            mobile: "Mobile",
            comingSoon: "Demnächst",
            items: [
                { id: "windows", name: "Windows", description: "Desktop-Client für Windows 10/11", href: commonRepos.windowsReleases, label: "Download" },
                { id: "linux", name: "Linux", description: "Desktop-Client für Linux", href: commonRepos.linuxReleases, label: "Releases" },
                { id: "macos", name: "macOS", description: "Desktop-Client für Mac", label: "Demnächst" },
                { id: "android", name: "Android", description: "Mobile App — APK und GitHub-Releases", href: commonRepos.androidReleases, label: "Releases" },
                { id: "ios", name: "iOS", description: "Mobile App für iPhone und iPad", label: "Nicht verfügbar" },
            ],
        },
        server: {
            title: "Serverlösungen",
            subtitle: "OpenVPN-Server-Stack mit Management-API und Web-Dashboard",
            webDashboard: "Web-Dashboard",
            webDashboardParagraph: "DataGate enthält ein webbasiertes Dashboard zur Verwaltung der VPN-Infrastruktur. Sie können Server, Benutzer und Zertifikate verwalten und Verbindungen in Echtzeit überwachen. Das Dashboard kommuniziert per REST-API mit Ihrem Server.",
            sourceCode: "Quellcode",
            serverSolution: "Serverlösung",
            paragraphs: [
                "Die Serverseite kombiniert OpenVPN mit einer Web-API für Konfiguration und Benutzerverwaltung. Damit erhalten Sie einen einzigen Stack für VPN-Tunnel, Zertifikatslebenszyklus und Zugriffskontrolle.",
                "Optional kann der Server hinter einem Proxy wie WSS (WebSocket Secure) betrieben werden. Das hilft in eingeschränkten Netzwerken und ergänzt eine zusätzliche Transportebene.",
                "Zusammen geben Dashboard und Serverlösung volle Kontrolle über Ihre VPN-Infrastruktur in einem modernen API-gesteuerten Setup.",
            ],
        },
        contacts: {
            title: "Kontakt",
            subtitle: "Für Fragen und Support schreiben Sie uns:",
            cardTitle: "Direkt kontaktieren",
            cardText: "Wenn Sie Fragen zu Clients, Server-Stack oder Releases haben, nutzen Sie das Formular unten.",
            formName: "Ihr Name",
            formEmail: "E-Mail",
            formMessage: "Nachricht",
            formSubmit: "E-Mail-Entwurf öffnen",
            formNote: "Kein Backend nötig: Das Formular öffnet Ihren Mail-Client mit vorbereitetem Entwurf.",
            emailLabel: "Hauptadresse",
            subjectPrefix: "Nachricht von der DataGate-Website",
        },
        about: {
            title: "Über DataGate",
            paragraphs: [
                "DataGate ist ein sicheres Open-Source-OpenVPN-Ökosystem mit Verwaltungs-Dashboard. Das Projekt setzt auf Datenschutz, Transparenz und moderne Infrastruktur. Der gesamte Quellcode ist offen, sodass das System unabhängig geprüft, verifiziert und bereitgestellt werden kann.",
                "DataGate umfasst eine Android-App, Desktop-Clients für Windows und Linux sowie ein Web-Dashboard zur Verwaltung von VPN-Servern und Benutzern.",
            ],
            privacyLead: "Details zum Umgang mit Ihren Daten finden Sie in unserer ",
            privacyLink: "Datenschutzerklärung",
            privacyTail: ".",
        },
        privacy: {
            title: "Datenschutzerklärung",
            intro: "DataGate („wir“, „uns“, „unser“) betreibt die mobile Anwendung DataGate. Wir respektieren Ihre Privatsphäre und verpflichten uns zum Schutz Ihrer personenbezogenen Daten.",
            collectTitle: "1. Welche Daten wir erfassen",
            collectLead: "Wir können folgende Daten erfassen und verarbeiten:",
            collectItems: [
                "Authentifizierungsdaten (Access Tokens, Refresh Tokens)",
                "Benutzerkennungen (Installation ID, External User ID)",
                "VPN-Verbindungsmetadaten (Verbindungsstatus, ausgewählter Server)",
                "Crash-Logs und Fehlerdiagnosen",
                "Geräte- und Betriebssysteminformationen",
            ],
            notCollectLead: "Wir erfassen NICHT:",
            notCollectItems: [
                "Browserverlauf",
                "Verkehrsinhalte",
                "DNS-Anfragen",
                "Persönliche Dateien",
                "Standortdaten",
            ],
            useTitle: "2. Wie wir Daten verwenden",
            useItems: [
                "Benutzer authentifizieren",
                "VPN-Verbindungen herstellen und aufrechterhalten",
                "Stabilität und Leistung der Anwendung verbessern",
                "Fehler und Abstürze diagnostizieren",
            ],
            storageTitle: "3. Datenspeicherung",
            storageText: "Authentifizierungstoken werden sicher auf dem Gerät des Benutzers gespeichert. Serverseitige Daten werden auf gesicherten Servern gespeichert.",
            thirdPartyTitle: "4. Dienste Dritter",
            thirdPartyText: "Die Anwendung kann Dienste Dritter wie Google Sign-In und Backend-Infrastruktur-Anbieter nutzen, um den Dienst bereitzustellen.",
            childrenTitle: "5. Datenschutz von Kindern",
            childrenText: "Diese Anwendung ist nicht für Kinder unter 13 Jahren bestimmt. Wir erfassen wissentlich keine personenbezogenen Daten von Kindern.",
            contactTitle: "6. Kontakt",
            contactText: "Wenn Sie Fragen zu dieser Datenschutzerklärung haben, kontaktieren Sie uns unter:",
            deleteLead: "Um die Löschung Ihres Kontos und Ihrer Daten zu beantragen, siehe ",
            deleteLink: "Konto löschen",
        },
        deleteAccount: {
            title: "Datenlöschung",
            intro: "Diese Seite erklärt, wie Sie die Löschung Ihrer mit DataGate verbundenen personenbezogenen Daten beantragen können. Sie können die Löschung der Daten ohne Löschung des Kontos anfordern oder beides zusammen löschen.",
            requestTitle: "So beantragen Sie die Datenlöschung",
            requestLead: "Senden Sie eine E-Mail vom Google-Konto, das für die Anmeldung in der Anwendung verwendet wurde, an:",
            requestSubject: "Betreff: Delete my DataGate data",
            deletedTitle: "Welche Daten gelöscht werden",
            deletedLead: "Nach Prüfung Ihrer Anfrage löschen wir dauerhaft die mit Ihrem Konto verbundenen Daten, darunter:",
            deletedItems: [
                "Benutzerkennungen (Installation ID, External User ID)",
                "Konto- und serverseitige Benutzerdatensätze",
                "Auf unseren Servern gespeicherte VPN-Konfigurationsdaten",
                "Mit Ihrem Konto verbundene Crash-/Fehlerberichte (falls vorhanden)",
            ],
            notCollectedTitle: "Welche Daten NICHT erfasst werden",
            notCollectedItems: [
                "Browserverlauf",
                "Verkehrsinhalte",
                "DNS-Anfragen",
                "Standortdaten",
            ],
            timeframeTitle: "Löschungszeitraum",
            timeframeText: "Anfragen zur Datenlöschung werden innerhalb von 30 Tagen nach Eingang bearbeitet.",
            retentionTitle: "Datenaufbewahrung",
            retentionText: "Einige Daten können aufbewahrt werden, wenn dies gesetzlich vorgeschrieben ist. Solche Daten werden nicht für andere Zwecke verwendet.",
        },
    },
    el: {
        meta: {
            language: "Γλώσσα",
            skipToMain: "Μετάβαση στο κύριο περιεχόμενο",
            lastUpdated: "Τελευταία ενημέρωση: Δεκέμβριος 2025",
        },
        header: {
            logoTag: "Open-source VPN stack",
            menuOpen: "Άνοιγμα μενού",
            menuClose: "Κλείσιμο μενού",
            navAria: "Κύρια πλοήγηση",
            nav: {
                home: "Αρχική",
                download: "Λήψη",
                server: "Server",
                contacts: "Επικοινωνία",
                about: "Σχετικά",
            },
            github: "GitHub",
            getDataGate: "Λήψη",
        },
        footer: {
            statement: "Open-source clients και server εργαλεία για ομάδες που θέλουν πλήρη έλεγχο του VPN.",
            download: "Λήψη",
            server: "Server",
            privacy: "Πολιτική απορρήτου",
        },
        home: {
            eyebrow: "Οικοσύστημα OpenVPN",
            title: "Το DataGate προσφέρει ένα ασφαλές open-source VPN stack που μπορείτε πραγματικά να ελέγχετε.",
            subtitle: "Clients, server εργαλεία και dashboard διαχείρισης σε ένα οικοσύστημα για deployments με έμφαση στην ιδιωτικότητα.",
            downloadClients: "Λήψη clients",
            downloadFor: "Λήψη για",
            exploreServer: "Προβολή server stack",
            highlights: [
                {
                    title: "Open source πρώτα",
                    description: "Κάθε βασικό μέρος του οικοσυστήματος είναι ελέγξιμο, self-hosted και σχεδιασμένο για ομάδες που θέλουν έλεγχο.",
                },
                {
                    title: "Clients για πολλές πλατφόρμες",
                    description: "Desktop και mobile εφαρμογές δίνουν συνεπή εμπειρία σύνδεσης χωρίς vendor lock-in.",
                },
                {
                    title: "Ορατότητα υποδομής",
                    description: "Το dashboard συγκεντρώνει χρήστες, πιστοποιητικά και συνδέσεις σε ένα σημείο.",
                },
            ],
            overviewLabel: "Γιατί DataGate",
            overviewTitle: "Σχεδιασμένο για ομάδες που δεν θέλουν black box.",
            overviewParagraphs: [
                "Το DataGate είναι μια ασφαλής λύση βασισμένη στο OpenVPN με έμφαση στην ιδιωτικότητα, τη διαφάνεια και τη σύγχρονη υποδομή. Ολόκληρος ο κώδικας είναι open source, ώστε να μπορεί να ελεγχθεί και να εγκατασταθεί ανεξάρτητα.",
                "Το DataGate προσφέρει επίσης web dashboard για διαχείριση VPN servers, χρηστών, πιστοποιητικών και συνδέσεων σε πραγματικό χρόνο.",
                "Μπορείτε να αναπτύξετε τον δικό σας OpenVPN server με το DataGate και να αυξήσετε την ασφάλεια τοποθετώντας τον πίσω από WSS proxy (WebSocket Secure). Αυτό βοηθά σε περιοριστικά δίκτυα και προσθέτει ένα επιπλέον transport layer.",
                "Το DataGate απευθύνεται σε developers και ομάδες που θέλουν πλήρη έλεγχο της VPN υποδομής τους χωρίς κλειστές λύσεις.",
            ],
            clientsLabel: "Clients",
            clientsTitle: "Desktop και mobile εφαρμογές",
            serverLabel: "Server stack",
            serverTitle: "Dashboard διαχείρισης και υποδομή",
            openRepository: "Άνοιγμα repository",
            clientRepos: [
                {
                    name: "Windows client",
                    description: "Desktop client για Windows με τον βασικό τρόπο σύνδεσης και πρόσβασης του DataGate.",
                    href: commonRepos.windows,
                },
                {
                    name: "Android client",
                    description: "Open-source mobile client για ασφαλή VPN πρόσβαση σε Android συσκευές.",
                    href: commonRepos.android,
                },
                {
                    name: "Linux client",
                    description: "Native desktop client για Linux με την ίδια ροή σύνδεσης του DataGate.",
                    href: commonRepos.linux,
                },
            ],
            serverRepos: [
                {
                    name: "Server management dashboard",
                    description: "Web dashboard και API layer για διαχείριση VPN υποδομής σε πραγματικό χρόνο.",
                    href: commonRepos.server,
                },
            ],
        },
        download: {
            eyebrow: "Λήψεις",
            title: "Επιλέξτε τον DataGate client σας",
            subtitle: "Επίσημα desktop και mobile builds με απευθείας συνδέσμους σε repositories και release pages.",
            desktop: "Desktop",
            mobile: "Mobile",
            comingSoon: "Σύντομα",
            items: [
                { id: "windows", name: "Windows", description: "Desktop client για Windows 10/11", href: commonRepos.windowsReleases, label: "Λήψη" },
                { id: "linux", name: "Linux", description: "Desktop client για Linux", href: commonRepos.linuxReleases, label: "Releases" },
                { id: "macos", name: "macOS", description: "Desktop client για Mac", label: "Σύντομα" },
                { id: "android", name: "Android", description: "Mobile app — APK και GitHub releases", href: commonRepos.androidReleases, label: "Releases" },
                { id: "ios", name: "iOS", description: "Mobile app για iPhone και iPad", label: "Μη διαθέσιμο" },
            ],
        },
        server: {
            title: "Server λύσεις",
            subtitle: "OpenVPN server stack με management API και web dashboard",
            webDashboard: "Web dashboard",
            webDashboardParagraph: "Το DataGate περιλαμβάνει web dashboard για διαχείριση VPN υποδομής. Μπορείτε να διαχειρίζεστε servers, χρήστες, πιστοποιητικά και να παρακολουθείτε συνδέσεις σε πραγματικό χρόνο. Το dashboard επικοινωνεί με τον server μέσω REST API.",
            sourceCode: "Πηγαίος κώδικας",
            serverSolution: "Server λύση",
            paragraphs: [
                "Η server πλευρά συνδυάζει OpenVPN με Web API για παραμετροποίηση και διαχείριση χρηστών. Έτσι έχετε ένα ενιαίο stack για VPN tunnels, κύκλο ζωής πιστοποιητικών και έλεγχο πρόσβασης.",
                "Προαιρετικά ο server μπορεί να τρέχει πίσω από proxy, όπως WSS (WebSocket Secure). Αυτό βοηθά σε περιοριστικά δίκτυα και προσθέτει ένα επιπλέον transport layer.",
                "Μαζί, το dashboard και η server λύση δίνουν πλήρη έλεγχο της VPN υποδομής σας με σύγχρονο API-driven setup.",
            ],
        },
        contacts: {
            title: "Επικοινωνία",
            subtitle: "Για ερωτήσεις και υποστήριξη, γράψτε μας:",
            cardTitle: "Άμεση επικοινωνία",
            cardText: "Αν έχετε ερώτηση για τους clients, το server stack ή τα releases, χρησιμοποιήστε τη φόρμα παρακάτω.",
            formName: "Το όνομά σας",
            formEmail: "Email",
            formMessage: "Μήνυμα",
            formSubmit: "Άνοιγμα email",
            formNote: "Δεν χρειάζεται backend: η φόρμα ανοίγει τον mail client σας με έτοιμο draft.",
            emailLabel: "Κύριο email",
            subjectPrefix: "Μήνυμα από το site του DataGate",
        },
        about: {
            title: "Σχετικά με το DataGate",
            paragraphs: [
                "Το DataGate είναι ένα ασφαλές, open-source οικοσύστημα OpenVPN με dashboard διαχείρισης. Εστιάζει στην ιδιωτικότητα, τη διαφάνεια και τη σύγχρονη υποδομή. Ο κώδικας είναι πλήρως ανοιχτός, ώστε να μπορεί να ελεγχθεί και να αναπτυχθεί ανεξάρτητα.",
                "Το DataGate περιλαμβάνει Android εφαρμογή, desktop clients για Windows και Linux, καθώς και web dashboard για διαχείριση VPN servers και χρηστών.",
            ],
            privacyLead: "Για λεπτομέρειες σχετικά με το πώς χειριζόμαστε τα δεδομένα σας, δείτε την ",
            privacyLink: "Πολιτική απορρήτου",
            privacyTail: ".",
        },
        privacy: {
            title: "Πολιτική απορρήτου",
            intro: "Το DataGate («εμείς», «μας») λειτουργεί την mobile εφαρμογή DataGate. Σεβόμαστε την ιδιωτικότητά σας και δεσμευόμαστε να προστατεύουμε τα προσωπικά σας δεδομένα.",
            collectTitle: "1. Ποιες πληροφορίες συλλέγουμε",
            collectLead: "Ενδέχεται να συλλέγουμε και να επεξεργαζόμαστε τα παρακάτω δεδομένα:",
            collectItems: [
                "Δεδομένα αυθεντικοποίησης (access tokens, refresh tokens)",
                "Αναγνωριστικά χρήστη (installation ID, external user ID)",
                "Μεταδεδομένα VPN σύνδεσης (κατάσταση σύνδεσης, επιλεγμένος server)",
                "Crash logs και διαγνωστικά σφαλμάτων",
                "Πληροφορίες συσκευής και λειτουργικού συστήματος",
            ],
            notCollectLead: "ΔΕΝ συλλέγουμε:",
            notCollectItems: [
                "Ιστορικό περιήγησης",
                "Περιεχόμενο κίνησης",
                "DNS queries",
                "Προσωπικά αρχεία",
                "Δεδομένα τοποθεσίας",
            ],
            useTitle: "2. Πώς χρησιμοποιούμε τα δεδομένα",
            useItems: [
                "Αυθεντικοποίηση χρηστών",
                "Δημιουργία και διατήρηση VPN συνδέσεων",
                "Βελτίωση σταθερότητας και απόδοσης της εφαρμογής",
                "Διάγνωση σφαλμάτων και κρασαρισμάτων",
            ],
            storageTitle: "3. Αποθήκευση δεδομένων",
            storageText: "Τα authentication tokens αποθηκεύονται με ασφάλεια στη συσκευή του χρήστη. Τα δεδομένα στην πλευρά του server αποθηκεύονται σε ασφαλείς servers.",
            thirdPartyTitle: "4. Υπηρεσίες τρίτων",
            thirdPartyText: "Η εφαρμογή μπορεί να χρησιμοποιεί υπηρεσίες τρίτων όπως Google Sign-In και backend infrastructure providers για τη λειτουργία της υπηρεσίας.",
            childrenTitle: "5. Απόρρητο παιδιών",
            childrenText: "Η εφαρμογή δεν προορίζεται για παιδιά κάτω των 13 ετών. Δεν συλλέγουμε εν γνώσει μας προσωπικά δεδομένα από παιδιά.",
            contactTitle: "6. Επικοινωνία",
            contactText: "Αν έχετε ερωτήσεις σχετικά με αυτή την Πολιτική απορρήτου, επικοινωνήστε μαζί μας στο:",
            deleteLead: "Για να ζητήσετε διαγραφή λογαριασμού και δεδομένων, δείτε ",
            deleteLink: "Διαγραφή λογαριασμού",
        },
        deleteAccount: {
            title: "Διαγραφή δεδομένων",
            intro: "Αυτή η σελίδα εξηγεί πώς να ζητήσετε διαγραφή των προσωπικών σας δεδομένων που σχετίζονται με το DataGate. Μπορείτε να ζητήσετε διαγραφή δεδομένων χωρίς να διαγράψετε τον λογαριασμό σας ή να διαγράψετε και τα δύο μαζί.",
            requestTitle: "Πώς να ζητήσετε διαγραφή δεδομένων",
            requestLead: "Στείλτε email από τον Google λογαριασμό που χρησιμοποιήθηκε για είσοδο στην εφαρμογή στο:",
            requestSubject: "Θέμα email: Delete my DataGate data",
            deletedTitle: "Ποια δεδομένα θα διαγραφούν",
            deletedLead: "Αφού επαληθευτεί το αίτημά σας, θα διαγράψουμε οριστικά τα δεδομένα που σχετίζονται με τον λογαριασμό σας, συμπεριλαμβανομένων:",
            deletedItems: [
                "Αναγνωριστικά χρήστη (installation ID, external user ID)",
                "Εγγραφές λογαριασμού και server-side user records",
                "Δεδομένα VPN ρυθμίσεων αποθηκευμένα στους servers μας",
                "Crash/error reports που σχετίζονται με τον λογαριασμό σας (αν υπάρχουν)",
            ],
            notCollectedTitle: "Ποια δεδομένα ΔΕΝ συλλέγονται",
            notCollectedItems: [
                "Ιστορικό περιήγησης",
                "Περιεχόμενο κίνησης",
                "DNS queries",
                "Δεδομένα τοποθεσίας",
            ],
            timeframeTitle: "Χρόνος διαγραφής",
            timeframeText: "Τα αιτήματα διαγραφής δεδομένων ολοκληρώνονται εντός 30 ημερών από την ημερομηνία παραλαβής του αιτήματος.",
            retentionTitle: "Διατήρηση δεδομένων",
            retentionText: "Ορισμένα δεδομένα μπορεί να διατηρηθούν αν απαιτείται από την ισχύουσα νομοθεσία ή κανονισμούς. Τα διατηρημένα δεδομένα δεν θα χρησιμοποιηθούν για άλλους σκοπούς.",
        },
    },
};
