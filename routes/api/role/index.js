const router = require('express').Router();
const roles = require('./roleRoutes');

router.use('/roles', roles);

module.exports = router;