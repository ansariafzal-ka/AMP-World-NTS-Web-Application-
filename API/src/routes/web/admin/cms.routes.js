const express = require('express');
const router = express.Router();
const cmsController = require('../../../controllers/cms.controller');
const { verifyJWT, authorizeRoles } = require('../../../middleware/auth.middleware');
const { validatePagePayload } = require('../../../validators/cms.validator');

// Public dynamic page lookup
router.get('/public/pages/:slug', cmsController.getPageBySlug);

// Protected CMS Page Management Routes
router.get('/pages', verifyJWT, cmsController.getAllPages);
router.get('/pages/:id', verifyJWT, cmsController.getPageById);
router.post('/pages', verifyJWT, authorizeRoles('Admin', 'Editor'), validatePagePayload, cmsController.savePage);
router.put('/pages/:id', verifyJWT, authorizeRoles('Admin', 'Editor'), validatePagePayload, cmsController.savePage);
router.delete('/pages/:id', verifyJWT, authorizeRoles('Admin'), cmsController.deletePage);

module.exports = router;