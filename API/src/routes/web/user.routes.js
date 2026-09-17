const express = require('express');
const router = express.Router();
const cmsController = require('../../controllers/cms.controller');
const { verifyJWT, authorizeRoles } = require('../../middleware/auth.middleware');
const { validateUserPayload } = require('../../validators/cms.validator');

// Protected User Management Routes
router.get('/', verifyJWT, cmsController.getAllUsers);
router.post('/', verifyJWT, authorizeRoles('Admin'), validateUserPayload, cmsController.saveUser);
router.delete('/:id', verifyJWT, authorizeRoles('Admin'), cmsController.deleteUser);

module.exports = router;