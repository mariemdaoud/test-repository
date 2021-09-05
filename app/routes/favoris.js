const controller = require('../controllers/favoris');
const router = require('express').Router();

router
    .get('/', controller.findFavorisByUser)
    .post('/', controller.addFavorisByUser);


module.exports = router;