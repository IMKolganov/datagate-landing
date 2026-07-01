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
        themeLight: string;
        themeDark: string;
    };
    footer: {
        statement: string;
        download: string;
        server: string;
        privacy: string;
        deleteAccount: string;
        cookieSettings: string;
    };
    cookieBanner: {
        title: string;
        description: string;
        acceptAll: string;
        rejectNonEssential: string;
        privacyLink: string;
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
        dashboard: {
            label: string;
            title: string;
            subtitle: string;
            tryDemo: string;
            tryDemoNote: string;
            screenshots: Array<{ alt: string; caption: string }>;
        };
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
        tryDashboard: string;
        tryDashboardNote: string;
        webDashboard: string;
        webDashboardParagraph: string;
        featuresTitle: string;
        features: Array<{ title: string; description: string }>;
        sourceCode: string;
        repos: Repo[];
        infrastructureTitle: string;
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
        controllerTitle: string;
        controllerText: string;
        collectTitle: string;
        collectLead: string;
        collectItems: string[];
        websiteTitle: string;
        websiteLead: string;
        websiteItems: string[];
        cookiesTitle: string;
        cookiesLead: string;
        cookiesItems: string[];
        notCollectLead: string;
        notCollectItems: string[];
        useTitle: string;
        useItems: string[];
        legalBasisTitle: string;
        legalBasisItems: string[];
        storageTitle: string;
        storageText: string;
        rightsTitle: string;
        rightsLead: string;
        rightsItems: string[];
        thirdPartyTitle: string;
        thirdPartyText: string;
        childrenTitle: string;
        childrenText: string;
        supervisorTitle: string;
        supervisorText: string;
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
    openVpnManager: "https://github.com/IMKolganov/DataGateOpenVpnManager",
    dashboardLive: "https://dash.datagateapp.com/",
};

export const translations: Record<Language, Translation> = {
    ru: {
        meta: {
            language: "Язык",
            skipToMain: "Перейти к основному содержимому",
            lastUpdated: "Последнее обновление: июль 2026",
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
            themeLight: "Светлая тема",
            themeDark: "Тёмная тема",
        },
        footer: {
            statement: "Открытые клиенты и серверные инструменты для команд, которым нужен полный контроль над VPN.",
            download: "Скачать",
            server: "Сервер",
            privacy: "Политика конфиденциальности",
            deleteAccount: "Удаление данных",
            cookieSettings: "Настройки cookies",
        },
        cookieBanner: {
            title: "Мы используем cookies и localStorage",
            description:
                "Этот сайт сохраняет ваш выбор темы и языка только после согласия. Аналитика и рекламные трекеры не используются. Подробнее — в",
            acceptAll: "Принять",
            rejectNonEssential: "Только необходимые",
            privacyLink: "Политике конфиденциальности",
        },
        home: {
            eyebrow: "Open-source VPN-платформа",
            title: "DataGate — клиенты, сервер и панель управления в одной открытой экосистеме.",
            subtitle: "OpenVPN и Xray, desktop- и mobile-приложения, REST API и web-dashboard для команд, которым нужен полный контроль над VPN.",
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
            overviewTitle: "Для команд, которым важны прозрачность и контроль над VPN.",
            overviewParagraphs: [
                "DataGate — это безопасное решение на базе OpenVPN и Xray с упором на приватность, прозрачность и современную инфраструктуру. Весь код проекта открыт, поэтому систему можно проверять, разворачивать и использовать независимо.",
                "DataGate также включает web-панель для управления серверами OpenVPN и Xray, пользователями, сертификатами и соединениями в реальном времени.",
                "Серверы OpenVPN и Xray можно размещать за WSS-прокси (WebSocket Secure), чтобы обходить ограничения сети и добавлять дополнительный транспортный уровень защиты.",
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
                    name: "DataGate Monitor",
                    description: "Backend, REST API и web-dashboard: OpenVPN, Xray, пользователи, квоты, карты трафика и Telegram-бот.",
                    href: commonRepos.server,
                },
                {
                    name: "DataGateOpenVpnManager",
                    description: "Docker-образ OpenVPN sidecar с .NET management API, Easy-RSA и интеграцией с DataGate Monitor.",
                    href: commonRepos.openVpnManager,
                },
            ],
            dashboard: {
                label: "DataGate Monitor",
                title: "Панель управления VPN-инфраструктурой",
                subtitle: "OpenVPN и Xray в одном dashboard: подключённые пользователи, трафик, API, Telegram-бот, GeoLite, 2FA для админов, квоты, уведомления и email-рассылка.",
                tryDemo: "Открыть демо dashboard",
                tryDemoNote: "На публичном demo доступны не все функции: настройки и часть разделов открыты только администратору. Чтобы протестировать dashboard полностью, установите DataGate Monitor на свой сервер.",
                screenshots: [
                    {
                        alt: "DataGate Monitor — обзор серверов, сессий и трафика",
                        caption: "Обзор всех серверов: сессии, трафик и пользователи за выбранный период",
                    },
                    {
                        alt: "DataGate Monitor — настройки системы",
                        caption: "Настройки: квоты, GeoLite DB, Telegram-бот, 2FA и email-рассылка",
                    },
                    {
                        alt: "DataGate Monitor — 3D-карта трафика в реальном времени",
                        caption: "Интерактивные карты с анимацией потоков трафика между клиентами и серверами",
                    },
                ],
            },
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
                {
                    id: "ios",
                    name: "iOS",
                    description:
                        "На текущий момент я не могу опубликовать приложение DataGate. Владельцам iPhone просьба использовать XRay-клиенты, доступные в App Store. Для получения доступа пройдите по ссылке.",
                    href: "https://dash.datagateapp.com/xray/",
                    label: "Перейти по ссылке",
                },
            ],
        },
        server: {
            title: "Серверные решения",
            subtitle: "OpenVPN, Xray, REST API и web-dashboard для полного контроля над VPN-инфраструктурой",
            tryDashboard: "Попробовать dashboard",
            tryDashboardNote: "На публичном demo доступны не все функции: настройки и часть разделов открыты только администратору. Чтобы протестировать dashboard полностью, установите DataGate Monitor на свой сервер.",
            webDashboard: "DataGate Monitor",
            webDashboardParagraph: "DataGate Monitor — web-панель и backend для управления VPN-инфраструктурой. Поддерживаются OpenVPN и Xray: можно видеть подключённых пользователей, сессии и трафик, управлять серверами и сертификатами. Панель работает через REST API и интегрируется с Telegram-ботом. Познакомиться и протестировать можно на живом demo.",
            featuresTitle: "Возможности серверной части",
            features: [
                {
                    title: "OpenVPN и Xray",
                    description: "Единая панель для двух VPN-стеков: управление серверами, пользователями и конфигурацией.",
                },
                {
                    title: "Подключённые пользователи",
                    description: "Мониторинг активных сессий, трафика IN/OUT и статуса серверов в реальном времени.",
                },
                {
                    title: "REST API",
                    description: "Программное управление серверами, пользователями, квотами и конфигурацией.",
                },
                {
                    title: "Telegram-бот",
                    description: "Уведомления и взаимодействие с инфраструктурой через Telegram.",
                },
                {
                    title: "GeoLite DB",
                    description: "Геолокация подключений и аналитика по регионам на базе GeoLite.",
                },
                {
                    title: "2FA для админов",
                    description: "Двухфакторная аутентификация для администраторов панели.",
                },
                {
                    title: "Уведомления и email",
                    description: "Настройка VPN-уведомлений и массовых email-рассылок пользователям.",
                },
                {
                    title: "Квоты пользователей",
                    description: "Тарифные планы и лимиты трафика для отдельных пользователей.",
                },
                {
                    title: "Карты трафика",
                    description: "Несколько интерактивных карт с анимацией потоков трафика в реальном времени.",
                },
            ],
            sourceCode: "Исходный код",
            repos: [
                {
                    name: "DataGate Monitor (OpenVpnGateMonitor)",
                    description: "Backend, REST API и web-dashboard — ядро серверной экосистемы DataGate.",
                    href: commonRepos.server,
                },
                {
                    name: "DataGateOpenVpnManager",
                    description: "Docker-образ с OpenVPN, Easy-RSA и .NET management API. Sidecar для DataGate Monitor.",
                    href: commonRepos.openVpnManager,
                },
            ],
            infrastructureTitle: "Инфраструктура",
            paragraphs: [
                "DataGateOpenVpnManager — готовый Docker-контейнер с OpenVPN-сервером, Easy-RSA и management API. Контейнер инициализирует PKI, генерирует конфигурацию и работает вместе с backend DataGate Monitor.",
                "Сервер можно разместить за proxy, например WSS (WebSocket Secure), чтобы обходить ограничения сети и добавить транспортный уровень защиты.",
                "Вместе dashboard, API и OpenVPN sidecar дают полный контроль над VPN-инфраструктурой в современном API-driven формате.",
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
                "DataGate — это безопасная открытая экосистема OpenVPN и Xray с панелью управления. Проект ориентирован на приватность, прозрачность и современную инфраструктуру. Исходный код полностью открыт, поэтому систему можно проверять, разворачивать и использовать независимо.",
                "DataGate включает Android-приложение, desktop-клиенты для Windows и Linux, а также web-панель для управления серверами OpenVPN и Xray и пользователями.",
            ],
            privacyLead: "Подробнее о том, как обрабатываются данные, смотрите в ",
            privacyLink: "Политике конфиденциальности",
            privacyTail: ".",
        },
        privacy: {
            title: "Политика конфиденциальности",
            intro: "DataGate («мы», «нас», «наш») управляет мобильным приложением DataGate, клиентами, серверным ПО и сайтом datagateapp.com. Мы уважаем вашу конфиденциальность и обрабатываем персональные данные в соответствии с Общим регламентом по защите данных (GDPR) и применимым законодательством.",
            controllerTitle: "1. Оператор данных",
            controllerText: "Оператором персональных данных является владелец проекта DataGate. По вопросам обработки данных: imkolganov@gmail.com.",
            collectTitle: "2. Данные в приложениях и сервисах",
            collectLead: "В приложениях и связанных сервисах мы можем собирать и обрабатывать следующие данные:",
            collectItems: [
                "Данные аутентификации (access tokens, refresh tokens)",
                "Идентификаторы пользователя (installation ID, external user ID)",
                "Метаданные VPN-подключения (состояние подключения, выбранный сервер)",
                "Crash logs и диагностические данные об ошибках",
                "Информацию об устройстве и операционной системе",
            ],
            websiteTitle: "3. Данные на сайте",
            websiteLead: "Сайт datagateapp.com не использует аналитику, рекламные пиксели и сторонние трекеры. Мы можем обрабатывать:",
            websiteItems: [
                "Данные, которые вы указываете в форме контактов (имя, email, сообщение) — только если вы сами отправите письмо через почтовый клиент",
                "Технические журналы веб-сервера (IP-адрес, user agent, время запроса) для обеспечения безопасности и работоспособности",
            ],
            cookiesTitle: "4. Cookies и localStorage",
            cookiesLead: "На сайте используются следующие категории хранения:",
            cookiesItems: [
                "Необходимые: запись вашего выбора по cookies (ключ datagate-consent)",
                "Предпочтения (только с согласия): выбранная тема (datagate-theme) и язык интерфейса (datagate-language)",
            ],
            notCollectLead: "Мы НЕ собираем:",
            notCollectItems: [
                "Историю браузера",
                "Содержимое трафика",
                "DNS-запросы",
                "Личные файлы",
                "Данные о местоположении",
            ],
            useTitle: "5. Как мы используем данные",
            useItems: [
                "Аутентификация пользователей",
                "Установка и поддержка VPN-соединений",
                "Повышение стабильности и производительности приложения",
                "Диагностика ошибок и сбоев",
                "Отображение выбранной темы и языка на сайте (при согласии)",
            ],
            legalBasisTitle: "6. Правовые основания обработки (GDPR)",
            legalBasisItems: [
                "Исполнение договора или преддоговорные меры — для предоставления VPN-сервиса и аккаунта",
                "Законный интерес — для обеспечения безопасности, диагностики сбоев и защиты инфраструктуры",
                "Согласие — для сохранения предпочтений сайта (тема, язык) в localStorage",
                "Юридическая обязанность — когда хранение данных требуется законом",
            ],
            storageTitle: "7. Хранение данных",
            storageText: "Токены аутентификации безопасно хранятся на устройстве пользователя. Данные на стороне сервера хранятся на защищённых серверах. Предпочтения сайта хранятся в браузере до их удаления или отзыва согласия.",
            rightsTitle: "8. Ваши права по GDPR",
            rightsLead: "Вы имеете право:",
            rightsItems: [
                "Получить доступ к своим персональным данным",
                "Исправить неточные данные",
                "Запросить удаление данных («право быть забытым»)",
                "Ограничить обработку",
                "Получить данные в переносимом формате",
                "Возразить против обработки на основании законного интереса",
                "Отозвать согласие в любое время (не влияет на законность обработки до отзыва)",
            ],
            thirdPartyTitle: "9. Сторонние сервисы",
            thirdPartyText: "Приложение может использовать сторонние сервисы, такие как Google Sign-In и backend-провайдеры инфраструктуры, для работы сервиса. Сайт не передаёт данные рекламным сетям.",
            childrenTitle: "10. Конфиденциальность детей",
            childrenText: "Сервис не предназначен для детей младше 13 лет (16 лет в ЕС). Мы сознательно не собираем персональные данные детей.",
            supervisorTitle: "11. Надзорный орган",
            supervisorText: "Вы вправе подать жалобу в надзорный орган по защите данных в стране вашего проживания, места работы или предполагаемого нарушения.",
            contactTitle: "12. Контакты",
            contactText: "По вопросам этой Политики конфиденциальности и реализации ваших прав свяжитесь с нами:",
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
            lastUpdated: "Last updated: July 2026",
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
            themeLight: "Light theme",
            themeDark: "Dark theme",
        },
        footer: {
            statement: "Secure, open-source clients and server tooling for teams that want full VPN control.",
            download: "Download",
            server: "Server",
            privacy: "Privacy Policy",
            deleteAccount: "Data deletion",
            cookieSettings: "Cookie settings",
        },
        cookieBanner: {
            title: "We use cookies and localStorage",
            description:
                "This site stores your theme and language preferences only after you consent. We do not use analytics or advertising trackers. Learn more in our",
            acceptAll: "Accept",
            rejectNonEssential: "Essential only",
            privacyLink: "Privacy Policy",
        },
        home: {
            eyebrow: "Open-source VPN platform",
            title: "DataGate — clients, server, and management dashboard in one open ecosystem.",
            subtitle: "OpenVPN and Xray, desktop and mobile apps, REST API, and a web dashboard for teams that need full VPN control.",
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
            overviewTitle: "For teams that value transparency and full VPN control.",
            overviewParagraphs: [
                "DataGate is a secure solution built on OpenVPN and Xray with a strong focus on privacy, transparency, and modern infrastructure. The entire codebase is fully open source, allowing anyone to audit, verify, and deploy the system independently.",
                "DataGate also provides a web-based dashboard for managing OpenVPN and Xray servers, users, certificates, and connections in real time.",
                "You can deploy OpenVPN and Xray servers with DataGate and enhance security by running them behind a WSS (WebSocket Secure) proxy. This approach helps bypass restrictive networks and adds an additional transport-layer security mechanism.",
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
                    name: "DataGate Monitor",
                    description: "Backend, REST API, and web dashboard: OpenVPN, Xray, users, quotas, traffic maps, and Telegram bot.",
                    href: commonRepos.server,
                },
                {
                    name: "DataGateOpenVpnManager",
                    description: "OpenVPN Docker sidecar with .NET management API, Easy-RSA, and DataGate Monitor integration.",
                    href: commonRepos.openVpnManager,
                },
            ],
            dashboard: {
                label: "DataGate Monitor",
                title: "VPN infrastructure management dashboard",
                subtitle: "OpenVPN and Xray in one dashboard: connected users, traffic, API, Telegram bot, GeoLite, admin 2FA, quotas, notifications, and email broadcast.",
                tryDemo: "Open live dashboard demo",
                tryDemoNote: "The public demo does not include every feature: settings and some sections are admin-only. Deploy DataGate Monitor on your own server to try the full dashboard.",
                screenshots: [
                    {
                        alt: "DataGate Monitor — server overview, sessions, and traffic",
                        caption: "All-servers overview: sessions, traffic, and users for the selected period",
                    },
                    {
                        alt: "DataGate Monitor — system settings",
                        caption: "Settings: quotas, GeoLite DB, Telegram bot, 2FA, and email broadcast",
                    },
                    {
                        alt: "DataGate Monitor — real-time 3D traffic globe",
                        caption: "Interactive maps with animated traffic flows between clients and servers",
                    },
                ],
            },
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
                {
                    id: "ios",
                    name: "iOS",
                    description:
                        "At the moment I cannot publish the DataGate app. iPhone owners are asked to use XRay clients available in the App Store. To get access, follow the link.",
                    href: "https://dash.datagateapp.com/xray/",
                    label: "Open XRay",
                },
            ],
        },
        server: {
            title: "Server solutions",
            subtitle: "OpenVPN, Xray, REST API, and a web dashboard for full VPN infrastructure control",
            tryDashboard: "Try the dashboard",
            tryDashboardNote: "The public demo does not include every feature: settings and some sections are admin-only. Deploy DataGate Monitor on your own server to try the full dashboard.",
            webDashboard: "DataGate Monitor",
            webDashboardParagraph: "DataGate Monitor is the web dashboard and backend for managing VPN infrastructure. It supports OpenVPN and Xray: view connected users, sessions, and traffic, manage servers and certificates. The panel works via REST API and integrates with a Telegram bot. You can explore and test it on the live demo.",
            featuresTitle: "Server-side capabilities",
            features: [
                {
                    title: "OpenVPN and Xray",
                    description: "One dashboard for both VPN stacks: manage servers, users, and configuration.",
                },
                {
                    title: "Connected users",
                    description: "Monitor active sessions, IN/OUT traffic, and server status in real time.",
                },
                {
                    title: "REST API",
                    description: "Programmatic control of servers, users, quotas, and configuration.",
                },
                {
                    title: "Telegram bot",
                    description: "Notifications and infrastructure interaction via Telegram.",
                },
                {
                    title: "GeoLite DB",
                    description: "Connection geolocation and regional analytics powered by GeoLite.",
                },
                {
                    title: "Admin 2FA",
                    description: "Two-factor authentication for dashboard administrators.",
                },
                {
                    title: "Notifications and email",
                    description: "Configure VPN notifications and bulk email broadcasts to users.",
                },
                {
                    title: "User quotas",
                    description: "Traffic plans and limits for individual users.",
                },
                {
                    title: "Traffic maps",
                    description: "Multiple interactive maps with real-time animated traffic flows.",
                },
            ],
            sourceCode: "Source code",
            repos: [
                {
                    name: "DataGate Monitor (OpenVpnGateMonitor)",
                    description: "Backend, REST API, and web dashboard — the core of the DataGate server ecosystem.",
                    href: commonRepos.server,
                },
                {
                    name: "DataGateOpenVpnManager",
                    description: "Docker image with OpenVPN, Easy-RSA, and .NET management API. Sidecar for DataGate Monitor.",
                    href: commonRepos.openVpnManager,
                },
            ],
            infrastructureTitle: "Infrastructure",
            paragraphs: [
                "DataGateOpenVpnManager is a ready-to-run Docker container with an OpenVPN server, Easy-RSA, and management API. The container initializes PKI, generates configuration, and works alongside the DataGate Monitor backend.",
                "The server can run behind a proxy such as WSS (WebSocket Secure) to bypass network restrictions and add a transport security layer.",
                "Together, the dashboard, API, and OpenVPN sidecar give you full control over VPN infrastructure in a modern, API-driven setup.",
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
                "DataGate is a secure, open-source OpenVPN and Xray ecosystem with a management dashboard. It focuses on privacy, transparency, and modern infrastructure. The project is fully open source so anyone can audit, verify, and deploy it independently.",
                "DataGate includes a mobile app for Android, desktop clients for Windows and Linux, and a web dashboard for managing OpenVPN and Xray servers and users.",
            ],
            privacyLead: "For details on how we handle your data, see our ",
            privacyLink: "Privacy Policy",
            privacyTail: ".",
        },
        privacy: {
            title: "Privacy Policy",
            intro: "DataGate (\"we\", \"our\", or \"us\") operates the DataGate mobile application, clients, server software, and the datagateapp.com website. We respect your privacy and process personal data in accordance with the General Data Protection Regulation (GDPR) and applicable law.",
            controllerTitle: "1. Data Controller",
            controllerText: "The data controller for personal data is the owner of the DataGate project. For data protection inquiries: imkolganov@gmail.com.",
            collectTitle: "2. Data in Applications and Services",
            collectLead: "In our applications and related services, we may collect and process the following data:",
            collectItems: [
                "Authentication data (access tokens, refresh tokens)",
                "User identifiers (installation ID, external user ID)",
                "VPN connection metadata (connection state, selected server)",
                "Crash logs and error diagnostics",
                "Device and operating system information",
            ],
            websiteTitle: "3. Website Data",
            websiteLead: "The datagateapp.com website does not use analytics, advertising pixels, or third-party trackers. We may process:",
            websiteItems: [
                "Information you provide via the contact form (name, email, message) — only if you choose to send an email through your mail client",
                "Technical web server logs (IP address, user agent, request time) to ensure security and availability",
            ],
            cookiesTitle: "4. Cookies and localStorage",
            cookiesLead: "The website uses the following storage categories:",
            cookiesItems: [
                "Essential: your cookie consent choice (datagate-consent key)",
                "Preferences (with consent only): selected theme (datagate-theme) and interface language (datagate-language)",
            ],
            notCollectLead: "We do NOT collect:",
            notCollectItems: [
                "Browsing history",
                "Traffic contents",
                "DNS queries",
                "Personal files",
                "Location data",
            ],
            useTitle: "5. How We Use Data",
            useItems: [
                "Authenticate users",
                "Establish and maintain VPN connections",
                "Improve application stability and performance",
                "Diagnose errors and crashes",
                "Display your chosen theme and language on the website (with consent)",
            ],
            legalBasisTitle: "6. Legal Basis for Processing (GDPR)",
            legalBasisItems: [
                "Contract performance or pre-contractual steps — to provide the VPN service and account",
                "Legitimate interest — to ensure security, diagnose failures, and protect infrastructure",
                "Consent — to store website preferences (theme, language) in localStorage",
                "Legal obligation — when retention is required by law",
            ],
            storageTitle: "7. Data Storage",
            storageText: "Authentication tokens are stored securely on the user's device. Server-side data is stored on secure servers. Website preferences are stored in the browser until deleted or consent is withdrawn.",
            rightsTitle: "8. Your Rights under GDPR",
            rightsLead: "You have the right to:",
            rightsItems: [
                "Access your personal data",
                "Rectify inaccurate data",
                "Request erasure of your data (\"right to be forgotten\")",
                "Restrict processing",
                "Receive your data in a portable format",
                "Object to processing based on legitimate interest",
                "Withdraw consent at any time (without affecting lawfulness of processing before withdrawal)",
            ],
            thirdPartyTitle: "9. Third-Party Services",
            thirdPartyText: "The application may use third-party services such as Google Sign-In and backend infrastructure providers to operate the service. The website does not share data with advertising networks.",
            childrenTitle: "10. Children's Privacy",
            childrenText: "The service is not intended for children under 13 (16 in the EU). We do not knowingly collect personal data from children.",
            supervisorTitle: "11. Supervisory Authority",
            supervisorText: "You have the right to lodge a complaint with a data protection supervisory authority in your country of residence, workplace, or where an alleged infringement occurred.",
            contactTitle: "12. Contact",
            contactText: "For questions about this Privacy Policy and exercising your rights, contact us at:",
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
            lastUpdated: "Dernière mise à jour : juillet 2026",
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
            themeLight: "Thème clair",
            themeDark: "Thème sombre",
        },
        footer: {
            statement: "Clients open source et outils serveur pour les équipes qui veulent un contrôle total du VPN.",
            download: "Télécharger",
            server: "Serveur",
            privacy: "Politique de confidentialité",
            deleteAccount: "Suppression des données",
            cookieSettings: "Paramètres cookies",
        },
        cookieBanner: {
            title: "Nous utilisons des cookies et localStorage",
            description:
                "Ce site enregistre vos préférences de thème et de langue uniquement après votre consentement. Aucune analyse ni traceur publicitaire n'est utilisé. En savoir plus dans notre",
            acceptAll: "Accepter",
            rejectNonEssential: "Essentiels uniquement",
            privacyLink: "Politique de confidentialité",
        },
        home: {
            eyebrow: "Plateforme VPN open source",
            title: "DataGate — clients, serveur et tableau de bord dans un écosystème ouvert.",
            subtitle: "OpenVPN et Xray, applications desktop et mobile, API REST et dashboard web pour les équipes qui veulent un contrôle total sur leur VPN.",
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
            overviewTitle: "Pour les équipes qui privilégient la transparence et le contrôle VPN.",
            overviewParagraphs: [
                "DataGate est une solution sécurisée basée sur OpenVPN et Xray, centrée sur la confidentialité, la transparence et une infrastructure moderne. L'ensemble du code est open source, ce qui permet un audit, une vérification et un déploiement indépendants.",
                "DataGate propose également un tableau de bord web pour gérer les serveurs OpenVPN et Xray, les utilisateurs, les certificats et les connexions en temps réel.",
                "Vous pouvez déployer des serveurs OpenVPN et Xray avec DataGate et renforcer la sécurité en les plaçant derrière un proxy WSS (WebSocket Secure). Cela aide à contourner les réseaux restrictifs et ajoute une couche de sécurité transport.",
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
                    name: "DataGate Monitor",
                    description: "Backend, API REST et tableau de bord web : OpenVPN, Xray, utilisateurs, quotas, cartes de trafic et bot Telegram.",
                    href: commonRepos.server,
                },
                {
                    name: "DataGateOpenVpnManager",
                    description: "Sidecar Docker OpenVPN avec API .NET, Easy-RSA et intégration DataGate Monitor.",
                    href: commonRepos.openVpnManager,
                },
            ],
            dashboard: {
                label: "DataGate Monitor",
                title: "Tableau de bord de gestion VPN",
                subtitle: "OpenVPN et Xray dans un seul dashboard : utilisateurs connectés, trafic, API, bot Telegram, GeoLite, 2FA admin, quotas, notifications et email.",
                tryDemo: "Ouvrir la démo du dashboard",
                tryDemoNote: "La démo publique n'inclut pas toutes les fonctionnalités : les paramètres et certaines sections sont réservés aux administrateurs. Déployez DataGate Monitor sur votre serveur pour tout tester.",
                screenshots: [
                    {
                        alt: "DataGate Monitor — vue d'ensemble des serveurs et du trafic",
                        caption: "Vue d'ensemble : sessions, trafic et utilisateurs pour la période sélectionnée",
                    },
                    {
                        alt: "DataGate Monitor — paramètres système",
                        caption: "Paramètres : quotas, GeoLite DB, bot Telegram, 2FA et email",
                    },
                    {
                        alt: "DataGate Monitor — globe 3D du trafic en temps réel",
                        caption: "Cartes interactives avec animation des flux de trafic en temps réel",
                    },
                ],
            },
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
                {
                    id: "ios",
                    name: "iOS",
                    description:
                        "Pour le moment, je ne peux pas publier l'application DataGate. Les utilisateurs d'iPhone sont priés d'utiliser les clients XRay disponibles sur l'App Store. Pour obtenir l'accès, suivez le lien.",
                    href: "https://dash.datagateapp.com/xray/",
                    label: "Ouvrir XRay",
                },
            ],
        },
        server: {
            title: "Solutions serveur",
            subtitle: "OpenVPN, Xray, API REST et tableau de bord web pour un contrôle complet de l'infrastructure VPN",
            tryDashboard: "Essayer le dashboard",
            tryDashboardNote: "La démo publique n'inclut pas toutes les fonctionnalités : les paramètres et certaines sections sont réservés aux administrateurs. Déployez DataGate Monitor sur votre serveur pour tout tester.",
            webDashboard: "DataGate Monitor",
            webDashboardParagraph: "DataGate Monitor est le tableau de bord web et le backend pour gérer l'infrastructure VPN. Il prend en charge OpenVPN et Xray : utilisateurs connectés, sessions, trafic, serveurs et certificats. Le panneau fonctionne via API REST et s'intègre avec un bot Telegram. Explorez et testez-le sur la démo en ligne.",
            featuresTitle: "Fonctionnalités côté serveur",
            features: [
                { title: "OpenVPN et Xray", description: "Un seul dashboard pour les deux piles VPN." },
                { title: "Utilisateurs connectés", description: "Surveillance des sessions actives et du trafic en temps réel." },
                { title: "API REST", description: "Contrôle programmatique des serveurs, utilisateurs et quotas." },
                { title: "Bot Telegram", description: "Notifications et interaction via Telegram." },
                { title: "GeoLite DB", description: "Géolocalisation des connexions et analyses régionales." },
                { title: "2FA admin", description: "Authentification à deux facteurs pour les administrateurs." },
                { title: "Notifications et email", description: "Configuration des alertes VPN et envois email en masse." },
                { title: "Quotas utilisateurs", description: "Plans de trafic et limites par utilisateur." },
                { title: "Cartes de trafic", description: "Cartes interactives avec flux de trafic animés en temps réel." },
            ],
            sourceCode: "Code source",
            repos: [
                {
                    name: "DataGate Monitor (OpenVpnGateMonitor)",
                    description: "Backend, API REST et tableau de bord web — cœur de l'écosystème serveur DataGate.",
                    href: commonRepos.server,
                },
                {
                    name: "DataGateOpenVpnManager",
                    description: "Image Docker avec OpenVPN, Easy-RSA et API .NET. Sidecar pour DataGate Monitor.",
                    href: commonRepos.openVpnManager,
                },
            ],
            infrastructureTitle: "Infrastructure",
            paragraphs: [
                "DataGateOpenVpnManager est un conteneur Docker prêt à l'emploi avec serveur OpenVPN, Easy-RSA et API de gestion. Il initialise la PKI, génère la configuration et fonctionne avec le backend DataGate Monitor.",
                "Le serveur peut fonctionner derrière un proxy WSS (WebSocket Secure) pour contourner les restrictions réseau.",
                "Ensemble, dashboard, API et sidecar OpenVPN offrent un contrôle complet de l'infrastructure VPN.",
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
                "DataGate est un écosystème OpenVPN et Xray sécurisé et open source avec un tableau de bord d'administration. Le projet met l'accent sur la confidentialité, la transparence et une infrastructure moderne. Le code source est entièrement ouvert, ce qui permet un audit, une vérification et un déploiement indépendants.",
                "DataGate comprend une application Android, des clients desktop pour Windows et Linux, ainsi qu'un tableau de bord web pour gérer les serveurs OpenVPN et Xray et les utilisateurs.",
            ],
            privacyLead: "Pour savoir comment nous traitons vos données, consultez notre ",
            privacyLink: "Politique de confidentialité",
            privacyTail: ".",
        },
        privacy: {
            title: "Politique de confidentialité",
            intro: "DataGate (« nous », « notre », « nos ») exploite l'application mobile DataGate, les clients, le logiciel serveur et le site datagateapp.com. Nous respectons votre vie privée et traitons les données personnelles conformément au Règlement général sur la protection des données (RGPD) et à la loi applicable.",
            controllerTitle: "1. Responsable du traitement",
            controllerText: "Le responsable du traitement des données personnelles est le propriétaire du projet DataGate. Pour toute question relative à la protection des données : imkolganov@gmail.com.",
            collectTitle: "2. Données dans les applications et services",
            collectLead: "Dans nos applications et services associés, nous pouvons collecter et traiter les données suivantes :",
            collectItems: [
                "Données d'authentification (access tokens, refresh tokens)",
                "Identifiants utilisateur (installation ID, external user ID)",
                "Métadonnées de connexion VPN (état de la connexion, serveur sélectionné)",
                "Journaux de crash et diagnostics d'erreur",
                "Informations sur l'appareil et le système d'exploitation",
            ],
            websiteTitle: "3. Données du site web",
            websiteLead: "Le site datagateapp.com n'utilise pas d'analytique, de pixels publicitaires ni de traceurs tiers. Nous pouvons traiter :",
            websiteItems: [
                "Les informations que vous fournissez via le formulaire de contact (nom, email, message) — uniquement si vous choisissez d'envoyer un email via votre client mail",
                "Les journaux techniques du serveur web (adresse IP, user agent, heure de la requête) pour assurer la sécurité et la disponibilité",
            ],
            cookiesTitle: "4. Cookies et localStorage",
            cookiesLead: "Le site utilise les catégories de stockage suivantes :",
            cookiesItems: [
                "Essentiels : votre choix de consentement aux cookies (clé datagate-consent)",
                "Préférences (avec consentement uniquement) : thème sélectionné (datagate-theme) et langue de l'interface (datagate-language)",
            ],
            notCollectLead: "Nous ne collectons PAS :",
            notCollectItems: [
                "Historique de navigation",
                "Contenu du trafic",
                "Requêtes DNS",
                "Fichiers personnels",
                "Données de localisation",
            ],
            useTitle: "5. Comment nous utilisons les données",
            useItems: [
                "Authentifier les utilisateurs",
                "Établir et maintenir les connexions VPN",
                "Améliorer la stabilité et les performances de l'application",
                "Diagnostiquer les erreurs et les crashs",
                "Afficher le thème et la langue choisis sur le site (avec consentement)",
            ],
            legalBasisTitle: "6. Base juridique du traitement (RGPD)",
            legalBasisItems: [
                "Exécution du contrat ou mesures précontractuelles — pour fournir le service VPN et le compte",
                "Intérêt légitime — pour assurer la sécurité, diagnostiquer les pannes et protéger l'infrastructure",
                "Consentement — pour stocker les préférences du site (thème, langue) dans localStorage",
                "Obligation légale — lorsque la conservation est exigée par la loi",
            ],
            storageTitle: "7. Stockage des données",
            storageText: "Les jetons d'authentification sont stockés de manière sécurisée sur l'appareil de l'utilisateur. Les données côté serveur sont stockées sur des serveurs sécurisés. Les préférences du site sont stockées dans le navigateur jusqu'à leur suppression ou au retrait du consentement.",
            rightsTitle: "8. Vos droits au titre du RGPD",
            rightsLead: "Vous avez le droit de :",
            rightsItems: [
                "Accéder à vos données personnelles",
                "Rectifier les données inexactes",
                "Demander l'effacement de vos données (droit à l'oubli)",
                "Limiter le traitement",
                "Recevoir vos données dans un format portable",
                "Vous opposer au traitement fondé sur l'intérêt légitime",
                "Retirer votre consentement à tout moment (sans affecter la licéité du traitement antérieur)",
            ],
            thirdPartyTitle: "9. Services tiers",
            thirdPartyText: "L'application peut utiliser des services tiers tels que Google Sign-In et des fournisseurs d'infrastructure backend pour fonctionner. Le site ne partage pas de données avec des réseaux publicitaires.",
            childrenTitle: "10. Vie privée des enfants",
            childrenText: "Le service n'est pas destiné aux enfants de moins de 13 ans (16 ans dans l'UE). Nous ne collectons pas sciemment de données personnelles concernant des enfants.",
            supervisorTitle: "11. Autorité de contrôle",
            supervisorText: "Vous avez le droit d'introduire une réclamation auprès d'une autorité de protection des données dans votre pays de résidence, de travail ou du lieu de la violation présumée.",
            contactTitle: "12. Contact",
            contactText: "Pour toute question concernant cette politique de confidentialité et l'exercice de vos droits, contactez-nous à l'adresse suivante :",
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
            lastUpdated: "Zuletzt aktualisiert: Juli 2026",
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
            themeLight: "Helles Design",
            themeDark: "Dunkles Design",
        },
        footer: {
            statement: "Open-Source-Clients und Server-Tools für Teams, die vollständige Kontrolle über ihr VPN wollen.",
            download: "Download",
            server: "Server",
            privacy: "Datenschutz",
            deleteAccount: "Datenlöschung",
            cookieSettings: "Cookie-Einstellungen",
        },
        cookieBanner: {
            title: "Wir verwenden Cookies und localStorage",
            description:
                "Diese Website speichert Ihre Theme- und Spracheinstellungen nur nach Ihrer Einwilligung. Es werden keine Analyse- oder Werbe-Tracker verwendet. Mehr in unserer",
            acceptAll: "Akzeptieren",
            rejectNonEssential: "Nur notwendige",
            privacyLink: "Datenschutzerklärung",
        },
        home: {
            eyebrow: "Open-Source-VPN-Plattform",
            title: "DataGate — Clients, Server und Verwaltungs-Dashboard in einem offenen Ökosystem.",
            subtitle: "OpenVPN und Xray, Desktop- und Mobile-Apps, REST-API und Web-Dashboard für Teams mit vollem VPN-Kontrollbedarf.",
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
            overviewTitle: "Für Teams, denen Transparenz und VPN-Kontrolle wichtig sind.",
            overviewParagraphs: [
                "DataGate ist eine sichere Lösung auf Basis von OpenVPN und Xray mit starkem Fokus auf Datenschutz, Transparenz und moderne Infrastruktur. Die gesamte Codebasis ist Open Source und kann unabhängig geprüft, verifiziert und bereitgestellt werden.",
                "DataGate bietet außerdem ein webbasiertes Dashboard zur Verwaltung von OpenVPN- und Xray-Servern, Benutzern, Zertifikaten und Verbindungen in Echtzeit.",
                "Sie können OpenVPN- und Xray-Server mit DataGate betreiben und die Sicherheit erhöhen, indem Sie sie hinter einem WSS-Proxy (WebSocket Secure) ausführen. Das hilft in restriktiven Netzwerken und fügt eine zusätzliche Transportschicht hinzu.",
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
                    name: "DataGate Monitor",
                    description: "Backend, REST-API und Web-Dashboard: OpenVPN, Xray, Benutzer, Quotas, Traffic-Karten und Telegram-Bot.",
                    href: commonRepos.server,
                },
                {
                    name: "DataGateOpenVpnManager",
                    description: "OpenVPN-Docker-Sidecar mit .NET-API, Easy-RSA und DataGate-Monitor-Integration.",
                    href: commonRepos.openVpnManager,
                },
            ],
            dashboard: {
                label: "DataGate Monitor",
                title: "VPN-Infrastruktur-Dashboard",
                subtitle: "OpenVPN und Xray in einem Dashboard: verbundene Benutzer, Traffic, API, Telegram-Bot, GeoLite, Admin-2FA, Quotas, Benachrichtigungen und E-Mail.",
                tryDemo: "Live-Dashboard öffnen",
                tryDemoNote: "In der öffentlichen Demo sind nicht alle Funktionen verfügbar: Einstellungen und einige Bereiche sind nur für Administratoren zugänglich. Installieren Sie DataGate Monitor auf Ihrem Server, um das volle Dashboard zu testen.",
                screenshots: [
                    {
                        alt: "DataGate Monitor — Server-Übersicht und Traffic",
                        caption: "Gesamtübersicht: Sitzungen, Traffic und Benutzer für den gewählten Zeitraum",
                    },
                    {
                        alt: "DataGate Monitor — Systemeinstellungen",
                        caption: "Einstellungen: Quotas, GeoLite DB, Telegram-Bot, 2FA und E-Mail-Versand",
                    },
                    {
                        alt: "DataGate Monitor — 3D-Traffic-Globus in Echtzeit",
                        caption: "Interaktive Karten mit animierten Traffic-Flüssen in Echtzeit",
                    },
                ],
            },
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
                {
                    id: "ios",
                    name: "iOS",
                    description:
                        "Aktuell kann ich die DataGate-App nicht im App Store veröffentlichen. iPhone-Nutzer werden gebeten, XRay-Clients aus dem App Store zu verwenden. Für den Zugriff folgen Sie dem Link.",
                    href: "https://dash.datagateapp.com/xray/",
                    label: "XRay öffnen",
                },
            ],
        },
        server: {
            title: "Serverlösungen",
            subtitle: "OpenVPN, Xray, REST-API und Web-Dashboard für volle Kontrolle über die VPN-Infrastruktur",
            tryDashboard: "Dashboard testen",
            tryDashboardNote: "In der öffentlichen Demo sind nicht alle Funktionen verfügbar: Einstellungen und einige Bereiche sind nur für Administratoren zugänglich. Installieren Sie DataGate Monitor auf Ihrem Server, um das volle Dashboard zu testen.",
            webDashboard: "DataGate Monitor",
            webDashboardParagraph: "DataGate Monitor ist das Web-Dashboard und Backend zur Verwaltung der VPN-Infrastruktur. OpenVPN und Xray werden unterstützt: verbundene Benutzer, Sitzungen, Traffic, Server und Zertifikate. Das Panel arbeitet über REST-API und integriert einen Telegram-Bot. Erkunden und testen Sie es in der Live-Demo.",
            featuresTitle: "Server-Funktionen",
            features: [
                { title: "OpenVPN und Xray", description: "Ein Dashboard für beide VPN-Stacks." },
                { title: "Verbundene Benutzer", description: "Überwachung aktiver Sitzungen und Traffic in Echtzeit." },
                { title: "REST-API", description: "Programmatische Steuerung von Servern, Benutzern und Quotas." },
                { title: "Telegram-Bot", description: "Benachrichtigungen und Interaktion über Telegram." },
                { title: "GeoLite DB", description: "Geolokalisierung und regionale Analysen." },
                { title: "Admin-2FA", description: "Zwei-Faktor-Authentifizierung für Administratoren." },
                { title: "Benachrichtigungen und E-Mail", description: "VPN-Alerts und Massen-E-Mail-Versand konfigurieren." },
                { title: "Benutzer-Quotas", description: "Traffic-Pläne und Limits pro Benutzer." },
                { title: "Traffic-Karten", description: "Interaktive Karten mit animierten Traffic-Flüssen in Echtzeit." },
            ],
            sourceCode: "Quellcode",
            repos: [
                {
                    name: "DataGate Monitor (OpenVpnGateMonitor)",
                    description: "Backend, REST-API und Web-Dashboard — Kern der DataGate-Server-Ökosystem.",
                    href: commonRepos.server,
                },
                {
                    name: "DataGateOpenVpnManager",
                    description: "Docker-Image mit OpenVPN, Easy-RSA und .NET-API. Sidecar für DataGate Monitor.",
                    href: commonRepos.openVpnManager,
                },
            ],
            infrastructureTitle: "Infrastruktur",
            paragraphs: [
                "DataGateOpenVpnManager ist ein einsatzbereiter Docker-Container mit OpenVPN-Server, Easy-RSA und Management-API. Er initialisiert PKI, erzeugt Konfiguration und arbeitet mit dem DataGate-Monitor-Backend zusammen.",
                "Der Server kann hinter einem WSS-Proxy (WebSocket Secure) betrieben werden, um Netzwerkbeschränkungen zu umgehen.",
                "Zusammen geben Dashboard, API und OpenVPN-Sidecar volle Kontrolle über die VPN-Infrastruktur.",
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
                "DataGate ist ein sicheres Open-Source-Ökosystem für OpenVPN und Xray mit Verwaltungs-Dashboard. Das Projekt setzt auf Datenschutz, Transparenz und moderne Infrastruktur. Der gesamte Quellcode ist offen, sodass das System unabhängig geprüft, verifiziert und bereitgestellt werden kann.",
                "DataGate umfasst eine Android-App, Desktop-Clients für Windows und Linux sowie ein Web-Dashboard zur Verwaltung von OpenVPN- und Xray-Servern und Benutzern.",
            ],
            privacyLead: "Details zum Umgang mit Ihren Daten finden Sie in unserer ",
            privacyLink: "Datenschutzerklärung",
            privacyTail: ".",
        },
        privacy: {
            title: "Datenschutzerklärung",
            intro: "DataGate („wir“, „uns“, „unser“) betreibt die mobile Anwendung DataGate, Clients, Server-Software und die Website datagateapp.com. Wir respektieren Ihre Privatsphäre und verarbeiten personenbezogene Daten gemäß der Datenschutz-Grundverordnung (DSGVO) und geltendem Recht.",
            controllerTitle: "1. Verantwortlicher",
            controllerText: "Verantwortlicher für personenbezogene Daten ist der Eigentümer des DataGate-Projekts. Bei Datenschutzanfragen: imkolganov@gmail.com.",
            collectTitle: "2. Daten in Anwendungen und Diensten",
            collectLead: "In unseren Anwendungen und zugehörigen Diensten können wir folgende Daten erfassen und verarbeiten:",
            collectItems: [
                "Authentifizierungsdaten (Access Tokens, Refresh Tokens)",
                "Benutzerkennungen (Installation ID, External User ID)",
                "VPN-Verbindungsmetadaten (Verbindungsstatus, ausgewählter Server)",
                "Crash-Logs und Fehlerdiagnosen",
                "Geräte- und Betriebssysteminformationen",
            ],
            websiteTitle: "3. Website-Daten",
            websiteLead: "Die Website datagateapp.com verwendet keine Analyse-, Werbe-Pixel oder Drittanbieter-Tracker. Wir können verarbeiten:",
            websiteItems: [
                "Angaben im Kontaktformular (Name, E-Mail, Nachricht) — nur wenn Sie eine E-Mail über Ihren Mail-Client senden",
                "Technische Webserver-Logs (IP-Adresse, User Agent, Anfragezeit) zur Sicherheit und Verfügbarkeit",
            ],
            cookiesTitle: "4. Cookies und localStorage",
            cookiesLead: "Die Website verwendet folgende Speicherkategorien:",
            cookiesItems: [
                "Notwendig: Ihre Cookie-Einwilligung (Schlüssel datagate-consent)",
                "Präferenzen (nur mit Einwilligung): gewähltes Theme (datagate-theme) und Sprache (datagate-language)",
            ],
            notCollectLead: "Wir erfassen NICHT:",
            notCollectItems: [
                "Browserverlauf",
                "Verkehrsinhalte",
                "DNS-Anfragen",
                "Persönliche Dateien",
                "Standortdaten",
            ],
            useTitle: "5. Wie wir Daten verwenden",
            useItems: [
                "Benutzer authentifizieren",
                "VPN-Verbindungen herstellen und aufrechterhalten",
                "Stabilität und Leistung der Anwendung verbessern",
                "Fehler und Abstürze diagnostizieren",
                "Gewähltes Theme und Sprache auf der Website anzeigen (mit Einwilligung)",
            ],
            legalBasisTitle: "6. Rechtsgrundlage der Verarbeitung (DSGVO)",
            legalBasisItems: [
                "Vertragserfüllung oder vorvertragliche Maßnahmen — Bereitstellung des VPN-Dienstes und Kontos",
                "Berechtigtes Interesse — Sicherheit, Fehlerdiagnose und Schutz der Infrastruktur",
                "Einwilligung — Speicherung von Website-Präferenzen (Theme, Sprache) in localStorage",
                "Rechtliche Verpflichtung — wenn die Aufbewahrung gesetzlich vorgeschrieben ist",
            ],
            storageTitle: "7. Datenspeicherung",
            storageText: "Authentifizierungstoken werden sicher auf dem Gerät des Benutzers gespeichert. Serverseitige Daten werden auf gesicherten Servern gespeichert. Website-Präferenzen werden im Browser gespeichert, bis sie gelöscht werden oder die Einwilligung widerrufen wird.",
            rightsTitle: "8. Ihre Rechte nach DSGVO",
            rightsLead: "Sie haben das Recht:",
            rightsItems: [
                "Auf Ihre personenbezogenen Daten zuzugreifen",
                "Unrichtige Daten zu berichtigen",
                "Die Löschung Ihrer Daten zu verlangen (Recht auf Vergessenwerden)",
                "Die Verarbeitung einzuschränken",
                "Ihre Daten in einem übertragbaren Format zu erhalten",
                "Der Verarbeitung auf Grundlage berechtigten Interesses zu widersprechen",
                "Ihre Einwilligung jederzeit zu widerrufen (ohne die Rechtmäßigkeit der vorherigen Verarbeitung zu beeinträchtigen)",
            ],
            thirdPartyTitle: "9. Dienste Dritter",
            thirdPartyText: "Die Anwendung kann Dienste Dritter wie Google Sign-In und Backend-Infrastruktur-Anbieter nutzen. Die Website gibt keine Daten an Werbenetzwerke weiter.",
            childrenTitle: "10. Datenschutz von Kindern",
            childrenText: "Der Dienst ist nicht für Kinder unter 13 Jahren (16 in der EU) bestimmt. Wir erfassen wissentlich keine personenbezogenen Daten von Kindern.",
            supervisorTitle: "11. Aufsichtsbehörde",
            supervisorText: "Sie haben das Recht, bei einer Datenschutzaufsichtsbehörde in Ihrem Wohnsitz-, Arbeits- oder Ort des mutmaßlichen Verstoßes Beschwerde einzulegen.",
            contactTitle: "12. Kontakt",
            contactText: "Bei Fragen zu dieser Datenschutzerklärung und zur Ausübung Ihrer Rechte kontaktieren Sie uns unter:",
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
            lastUpdated: "Τελευταία ενημέρωση: Ιούλιος 2026",
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
            themeLight: "Φωτεινό θέμα",
            themeDark: "Σκοτεινό θέμα",
        },
        footer: {
            statement: "Open-source clients και server εργαλεία για ομάδες που θέλουν πλήρη έλεγχο του VPN.",
            download: "Λήψη",
            server: "Server",
            privacy: "Πολιτική απορρήτου",
            deleteAccount: "Διαγραφή δεδομένων",
            cookieSettings: "Ρυθμίσεις cookies",
        },
        cookieBanner: {
            title: "Χρησιμοποιούμε cookies και localStorage",
            description:
                "Αυτό το site αποθηκεύει τις προτιμήσεις θέματος και γλώσσας μόνο μετά τη συγκατάθεσή σας. Δεν χρησιμοποιούμε analytics ή διαφημιστικά trackers. Μάθετε περισσότερα στην",
            acceptAll: "Αποδοχή",
            rejectNonEssential: "Μόνο απαραίτητα",
            privacyLink: "Πολιτική απορρήτου",
        },
        home: {
            eyebrow: "Open-source VPN πλατφόρμα",
            title: "DataGate — clients, server και dashboard διαχείρισης σε ένα ανοιχτό οικοσύστημα.",
            subtitle: "OpenVPN και Xray, desktop και mobile εφαρμογές, REST API και web dashboard για ομάδες που θέλουν πλήρη έλεγχο του VPN.",
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
            overviewTitle: "Για ομάδες που εκτιμούν τη διαφάνεια και τον πλήρη έλεγχο VPN.",
            overviewParagraphs: [
                "Το DataGate είναι μια ασφαλής λύση βασισμένη σε OpenVPN και Xray με έμφαση στην ιδιωτικότητα, τη διαφάνεια και τη σύγχρονη υποδομή. Ολόκληρος ο κώδικας είναι open source, ώστε να μπορεί να ελεγχθεί και να εγκατασταθεί ανεξάρτητα.",
                "Το DataGate προσφέρει επίσης web dashboard για διαχείριση servers OpenVPN και Xray, χρηστών, πιστοποιητικών και συνδέσεων σε πραγματικό χρόνο.",
                "Μπορείτε να αναπτύξετε servers OpenVPN και Xray με το DataGate και να αυξήσετε την ασφάλεια τοποθετώντας τους πίσω από WSS proxy (WebSocket Secure). Αυτό βοηθά σε περιοριστικά δίκτυα και προσθέτει ένα επιπλέον transport layer.",
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
                    name: "DataGate Monitor",
                    description: "Backend, REST API και web dashboard: OpenVPN, Xray, χρήστες, quotas, χάρτες traffic και Telegram bot.",
                    href: commonRepos.server,
                },
                {
                    name: "DataGateOpenVpnManager",
                    description: "OpenVPN Docker sidecar με .NET API, Easy-RSA και ενσωμάτωση DataGate Monitor.",
                    href: commonRepos.openVpnManager,
                },
            ],
            dashboard: {
                label: "DataGate Monitor",
                title: "Dashboard διαχείρισης VPN υποδομής",
                subtitle: "OpenVPN και Xray σε ένα dashboard: συνδεδεμένοι χρήστες, traffic, API, Telegram bot, GeoLite, admin 2FA, quotas, ειδοποιήσεις και email.",
                tryDemo: "Άνοιγμα live demo dashboard",
                tryDemoNote: "Το public demo δεν περιλαμβάνει όλες τις λειτουργίες: ρυθμίσεις και ορισμένα τμήματα είναι διαθέσιμα μόνο σε admins. Εγκαταστήστε το DataGate Monitor στον δικό σας server για πλήρη δοκιμή.",
                screenshots: [
                    {
                        alt: "DataGate Monitor — επισκόπηση servers και traffic",
                        caption: "Επισκόπηση: sessions, traffic και χρήστες για την επιλεγμένη περίοδο",
                    },
                    {
                        alt: "DataGate Monitor — ρυθμίσεις συστήματος",
                        caption: "Ρυθμίσεις: quotas, GeoLite DB, Telegram bot, 2FA και email",
                    },
                    {
                        alt: "DataGate Monitor — 3D χάρτης traffic σε πραγματικό χρόνο",
                        caption: "Διαδραστικοί χάρτες με animation ροών traffic σε πραγματικό χρόνο",
                    },
                ],
            },
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
                {
                    id: "ios",
                    name: "iOS",
                    description:
                        "Προς το παρόν δεν μπορώ να δημοσιεύσω την εφαρμογή DataGate στο App Store. Οι χρήστες iPhone παρακαλούνται να χρησιμοποιούν XRay clients που είναι διαθέσιμοι στο App Store. Για πρόσβαση, ακολουθήστε τον σύνδεσμο.",
                    href: "https://dash.datagateapp.com/xray/",
                    label: "Άνοιγμα XRay",
                },
            ],
        },
        server: {
            title: "Server λύσεις",
            subtitle: "OpenVPN, Xray, REST API και web dashboard για πλήρη έλεγχο VPN υποδομής",
            tryDashboard: "Δοκιμή dashboard",
            tryDashboardNote: "Το public demo δεν περιλαμβάνει όλες τις λειτουργίες: ρυθμίσεις και ορισμένα τμήματα είναι διαθέσιμα μόνο σε admins. Εγκαταστήστε το DataGate Monitor στον δικό σας server για πλήρη δοκιμή.",
            webDashboard: "DataGate Monitor",
            webDashboardParagraph: "Το DataGate Monitor είναι το web dashboard και backend για διαχείριση VPN υποδομής. Υποστηρίζει OpenVPN και Xray: συνδεδεμένοι χρήστες, sessions, traffic, servers και πιστοποιητικά. Το panel λειτουργεί μέσω REST API και ενσωματώνει Telegram bot. Μπορείτε να το δοκιμάσετε στο live demo.",
            featuresTitle: "Δυνατότητες server",
            features: [
                { title: "OpenVPN και Xray", description: "Ένα dashboard για και τα δύο VPN stacks." },
                { title: "Συνδεδεμένοι χρήστες", description: "Παρακολούθηση ενεργών sessions και traffic σε πραγματικό χρόνο." },
                { title: "REST API", description: "Προγραμματιστικός έλεγχος servers, χρηστών και quotas." },
                { title: "Telegram bot", description: "Ειδοποιήσεις και αλληλεπίδραση μέσω Telegram." },
                { title: "GeoLite DB", description: "Γεωεντοπισμός συνδέσεων και περιφερειακή ανάλυση." },
                { title: "Admin 2FA", description: "Two-factor authentication για διαχειριστές." },
                { title: "Ειδοποιήσεις και email", description: "Ρύθμιση VPN alerts και μαζικών email." },
                { title: "Quotas χρηστών", description: "Πλάνα traffic και όρια ανά χρήστη." },
                { title: "Χάρτες traffic", description: "Διαδραστικοί χάρτες με animation ροών σε πραγματικό χρόνο." },
            ],
            sourceCode: "Πηγαίος κώδικας",
            repos: [
                {
                    name: "DataGate Monitor (OpenVpnGateMonitor)",
                    description: "Backend, REST API και web dashboard — πυρήνας του server οικοσυστήματος DataGate.",
                    href: commonRepos.server,
                },
                {
                    name: "DataGateOpenVpnManager",
                    description: "Docker image με OpenVPN, Easy-RSA και .NET API. Sidecar για DataGate Monitor.",
                    href: commonRepos.openVpnManager,
                },
            ],
            infrastructureTitle: "Υποδομή",
            paragraphs: [
                "Το DataGateOpenVpnManager είναι έτοιμο Docker container με OpenVPN server, Easy-RSA και management API. Αρχικοποιεί PKI, δημιουργεί configuration και λειτουργεί με το backend του DataGate Monitor.",
                "Ο server μπορεί να τρέχει πίσω από WSS proxy (WebSocket Secure) για παράκαμψη περιορισμών δικτύου.",
                "Μαζί, dashboard, API και OpenVPN sidecar δίνουν πλήρη έλεγχο της VPN υποδομής.",
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
                "Το DataGate είναι ένα ασφαλές, open-source οικοσύστημα OpenVPN και Xray με dashboard διαχείρισης. Εστιάζει στην ιδιωτικότητα, τη διαφάνεια και τη σύγχρονη υποδομή. Ο κώδικας είναι πλήρως ανοιχτός, ώστε να μπορεί να ελεγχθεί και να αναπτυχθεί ανεξάρτητα.",
                "Το DataGate περιλαμβάνει Android εφαρμογή, desktop clients για Windows και Linux, καθώς και web dashboard για διαχείριση servers OpenVPN και Xray και χρηστών.",
            ],
            privacyLead: "Για λεπτομέρειες σχετικά με το πώς χειριζόμαστε τα δεδομένα σας, δείτε την ",
            privacyLink: "Πολιτική απορρήτου",
            privacyTail: ".",
        },
        privacy: {
            title: "Πολιτική απορρήτου",
            intro: "Το DataGate («εμείς», «μας») λειτουργεί την mobile εφαρμογή DataGate, clients, server λογισμικό και τον ιστότοπο datagateapp.com. Σεβόμαστε την ιδιωτικότητά σας και επεξεργαζόμαστε προσωπικά δεδομένα σύμφωνα με τον Γενικό Κανονισμό Προστασίας Δεδομένων (GDPR) και την ισχύουσα νομοθεσία.",
            controllerTitle: "1. Υπεύθυνος επεξεργασίας",
            controllerText: "Υπεύθυνος επεξεργασίας προσωπικών δεδομένων είναι ο ιδιοκτήτης του έργου DataGate. Για θέματα προστασίας δεδομένων: imkolganov@gmail.com.",
            collectTitle: "2. Δεδομένα σε εφαρμογές και υπηρεσίες",
            collectLead: "Στις εφαρμογές και τις σχετικές υπηρεσίες μας, ενδέχεται να συλλέγουμε και να επεξεργαζόμαστε τα παρακάτω δεδομένα:",
            collectItems: [
                "Δεδομένα αυθεντικοποίησης (access tokens, refresh tokens)",
                "Αναγνωριστικά χρήστη (installation ID, external user ID)",
                "Μεταδεδομένα VPN σύνδεσης (κατάσταση σύνδεσης, επιλεγμένος server)",
                "Crash logs και διαγνωστικά σφαλμάτων",
                "Πληροφορίες συσκευής και λειτουργικού συστήματος",
            ],
            websiteTitle: "3. Δεδομένα ιστότοπου",
            websiteLead: "Ο ιστότοπος datagateapp.com δεν χρησιμοποιεί analytics, διαφημιστικά pixels ή trackers τρίτων. Ενδέχεται να επεξεργαζόμαστε:",
            websiteItems: [
                "Πληροφορίες που παρέχετε μέσω της φόρμας επικοινωνίας (όνομα, email, μήνυμα) — μόνο αν επιλέξετε να στείλετε email μέσω του mail client σας",
                "Τεχνικά logs web server (IP διεύθυνση, user agent, ώρα αιτήματος) για ασφάλεια και διαθεσιμότητα",
            ],
            cookiesTitle: "4. Cookies και localStorage",
            cookiesLead: "Ο ιστότοπος χρησιμοποιεί τις ακόλουθες κατηγορίες αποθήκευσης:",
            cookiesItems: [
                "Απαραίτητα: η επιλογή συγκατάθεσης cookies (κλειδί datagate-consent)",
                "Προτιμήσεις (μόνο με συγκατάθεση): επιλεγμένο θέμα (datagate-theme) και γλώσσα διεπαφής (datagate-language)",
            ],
            notCollectLead: "ΔΕΝ συλλέγουμε:",
            notCollectItems: [
                "Ιστορικό περιήγησης",
                "Περιεχόμενο κίνησης",
                "DNS queries",
                "Προσωπικά αρχεία",
                "Δεδομένα τοποθεσίας",
            ],
            useTitle: "5. Πώς χρησιμοποιούμε τα δεδομένα",
            useItems: [
                "Αυθεντικοποίηση χρηστών",
                "Δημιουργία και διατήρηση VPN συνδέσεων",
                "Βελτίωση σταθερότητας και απόδοσης της εφαρμογής",
                "Διάγνωση σφαλμάτων και κρασαρισμάτων",
                "Εμφάνιση του επιλεγμένου θέματος και γλώσσας στον ιστότοπο (με συγκατάθεση)",
            ],
            legalBasisTitle: "6. Νομική βάση επεξεργασίας (GDPR)",
            legalBasisItems: [
                "Εκτέλεση σύμβασης ή προσυμβατικά μέτρα — για την παροχή της υπηρεσίας VPN και του λογαριασμού",
                "Έννομο συμφέρον — για ασφάλεια, διάγνωση σφαλμάτων και προστασία της υποδομής",
                "Συγκατάθεση — για αποθήκευση προτιμήσεων ιστότοπου (θέμα, γλώσσα) στο localStorage",
                "Νομική υποχρέωση — όταν η διατήρηση απαιτείται από τον νόμο",
            ],
            storageTitle: "7. Αποθήκευση δεδομένων",
            storageText: "Τα authentication tokens αποθηκεύονται με ασφάλεια στη συσκευή του χρήστη. Τα δεδομένα στην πλευρά του server αποθηκεύονται σε ασφαλείς servers. Οι προτιμήσεις ιστότοπου αποθηκεύονται στον browser μέχρι να διαγραφούν ή να ανακληθεί η συγκατάθεση.",
            rightsTitle: "8. Τα δικαιώματά σας βάσει GDPR",
            rightsLead: "Έχετε το δικαίωμα να:",
            rightsItems: [
                "Αποκτήσετε πρόσβαση στα προσωπικά σας δεδομένα",
                "Διορθώσετε ανακριβή δεδομένα",
                "Ζητήσετε διαγραφή των δεδομένων σας (δικαίωμα στη λήθη)",
                "Περιορίσετε την επεξεργασία",
                "Λάβετε τα δεδομένα σας σε φορητή μορφή",
                "Αντιταχθείτε στην επεξεργασία βάσει έννομου συμφέροντος",
                "Ανακαλέσετε τη συγκατάθεσή σας ανά πάσα στιγμή (χωρίς να επηρεάζεται η νομιμότητα της προηγούμενης επεξεργασίας)",
            ],
            thirdPartyTitle: "9. Υπηρεσίες τρίτων",
            thirdPartyText: "Η εφαρμογή μπορεί να χρησιμοποιεί υπηρεσίες τρίτων όπως Google Sign-In και backend infrastructure providers. Ο ιστότοπος δεν μοιράζεται δεδομένα με διαφημιστικά δίκτυα.",
            childrenTitle: "10. Απόρρητο παιδιών",
            childrenText: "Η υπηρεσία δεν προορίζεται για παιδιά κάτω των 13 ετών (16 στην ΕΕ). Δεν συλλέγουμε εν γνώσει μας προσωπικά δεδομένα από παιδιά.",
            supervisorTitle: "11. Εποπτική αρχή",
            supervisorText: "Έχετε το δικαίωμα να υποβάλετε καταγγελία σε εποπτική αρχή προστασίας δεδομένων στη χώρα διαμονής, εργασίας ή του εικοζόμενου παραβίασης.",
            contactTitle: "12. Επικοινωνία",
            contactText: "Για ερωτήσεις σχετικά με αυτή την Πολιτική απορρήτου και την άσκηση των δικαιωμάτων σας, επικοινωνήστε μαζί μας στο:",
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
