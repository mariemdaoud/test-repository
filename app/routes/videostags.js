const controller = require('../controllers/videostags');
const router = require('express').Router();

router
  .get('/', controller.getVidosByTag)
  .post('/', controller.addVideoByTag)
  .delete('/:id', controller.deleteVideoByTag);

module.exports = router;