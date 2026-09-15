const express = require('express');
const router = express.Router();
const authController = require('../../controllers/auth.controller');
const { verifyJWT } = require('../../middleware/auth.middleware');

// Public Auth Endpoints
router.post('/login', authController.login);
router.post('/logout', authController.logout);

// Protected Auth Profile
router.get('/me', verifyJWT, authController.getCurrentUser);

module.exports = router;
