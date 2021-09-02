const controller = require('../controllers/register');
const router = require('express').Router();

router.post('/', controller.register);

module.exports = router;