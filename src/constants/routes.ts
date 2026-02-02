export const ROUTES = {
    HOME: "/",
    DOWNLOAD: "/download",
    SERVER: "/server",
    CONTACTS: "/contacts",
    ABOUT: "/about",
    PRIVACY: "/privacy",
    DELETE_ACCOUNT: "/delete-account",
} as const;

export type RoutePath = (typeof ROUTES)[keyof typeof ROUTES];
