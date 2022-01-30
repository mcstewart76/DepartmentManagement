const router = require('express').Router();
const departments = require('./departmentRoutes');

router.use('/department', departments);

module.exports = router;