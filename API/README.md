# AMP NTS - CMS Backend API Integration Guide

This directory contains the CMS module for the AMP NTS Web Application, structured strictly according to the team's Express.js project architecture.

## 1. Files in this Package

| Source Location in Zip | Destination in Team's `API/` Repo | Purpose |
|------------------------|-----------------------------------|---------|
| `API/src/routes/web/admin/cms.routes.js` | `src/routes/web/admin/cms.routes.js` | Routes for CMS pages, blocks & users |
| `API/src/controllers/cms.controller.js` | `src/controllers/cms.controller.js` | Request handler methods |
| `API/src/services/cms.service.js` | `src/services/cms.service.js` | T-SQL Stored Procedure execution (`CMS.SP_*`) |
| `API/src/validators/cms.validator.js` | `src/validators/cms.validator.js` | Request validation |
| `database/schema_mssql.sql` | `database/schema_mssql.sql` | Microsoft SQL Server Schema & Stored Procedures |

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
- `GET    /api/web/users`
- `POST   /api/web/users`
- `DELETE /api/web/users/:id`
- `POST   /api/web/auth/login`

## 3. Database Schema

Execute `database/schema_mssql.sql` in SQL Server Management Studio (SSMS) on your local SQL Server instance. It creates:
- `CMS` schema namespace
- Tables: `CMS.Pages`, `CMS.PageBlocks`, `CMS.Users`
- 13 T-SQL Stored Procedures (`CMS.SP_*`)
