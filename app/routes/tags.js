const controller = require('../controllers/tags');
const router = require('express').Router();

// Les méthodes de ==> CRUD  

router
  .get('/', controller.getAllTags)
  .get('/:id', controller.getTag)
  .post('/', controller.addTag)
  .put('/:id', controller.updateTag)
  .delete('/:id', controller.deleteTag);

  module.exports = router;