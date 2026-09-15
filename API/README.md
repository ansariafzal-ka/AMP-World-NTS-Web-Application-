# AMP NTS - CMS Backend API Integration Guide

This directory contains the CMS module for the AMP NTS Web Application, structured strictly according to the team's Express.js project architecture.

## 1. Files in this Package

| Source Location in Zip | Destination in Team's `API/` Repo | Purpose |
|------------------------|-----------------------------------|---------|
| `API/src/routes/web/admin/cms.routes.js` | `src/routes/web/admin/cms.routes.js` | Routes for CMS pages, blocks & users |
| `API/src/controllers/cms.controller.js` | `src/controllers/cms.controller.js` | Request handler methods |
| `API/src/services/cms.service.js` | `src/services/cms.service.js` | Direct MySQL queries |
| `API/src/validators/cms.validator.js` | `src/validators/cms.validator.js` | Request validation |
| `database/mysql_schema.sql` | `database/mysql_schema.sql` | MySQL Schema (executed in Workbench) |

## 2. Mounting the Route

In your `src/routes/web/admin/index.js` (or `src/routes/web/index.js`), mount the CMS router:

```javascript
const cmsRoutes = require('./cms.routes'); // or './admin/cms.routes'

router.use('/cms', cmsRoutes);
```

This exposes:
- `GET    /api/web/admin/cms/pages`
- `GET    /api/web/admin/cms/pages/:id`
- `POST   /api/web/admin/cms/pages`
- `PUT    /api/web/admin/cms/pages/:id`
- `DELETE /api/web/admin/cms/pages/:id`
- `GET    /api/web/admin/cms/public/pages/:slug`
- `GET    /api/web/admin/cms/users`
- `POST   /api/web/admin/cms/users`
- `DELETE /api/web/admin/cms/users/:id`
- `POST   /api/web/admin/cms/auth/login`

## 3. Database Schema

Execute `database/mysql_schema.sql` in MySQL Workbench on your `amp_nts` database. It creates:
- `cms_pages`
- `cms_page_blocks`
- `cms_users`
