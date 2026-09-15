/**
 * Centralized API Endpoints
 * Conforms strictly to the backend route hierarchy:
 * /api/web/auth/...
 * /api/web/users/...
 * /api/web/admin/cms/...
 */

export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/api/web/auth/login',
    LOGOUT: '/api/web/auth/logout',
    ME: '/api/web/auth/me',
  },
  USERS: {
    BASE: '/api/web/users',
    BY_ID: (id: string) => `/api/web/users/${id}`,
  },
  CMS: {
    PAGES: '/api/web/admin/cms/pages',
    PAGE_BY_ID: (id: string) => `/api/web/admin/cms/pages/${id}`,
    PUBLIC_PAGE_BY_SLUG: (slug: string) => `/api/web/admin/cms/public/pages/${slug}`,
  },
} as const;
