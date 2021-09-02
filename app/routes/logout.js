const controller = require('../controllers/logout');
const router = require('express').Router();

router.get('/', controller.logout);

module.exports = router;
