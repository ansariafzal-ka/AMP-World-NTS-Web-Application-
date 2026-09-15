const express = require('express');
const router = express.Router();
const cmsRoutes = require('./cms.routes');

// Mount CMS routes under /cms
router.use('/cms', cmsRoutes);

module.exports = router;
