const controller = require('../controllers/users');
const router = require('express').Router();

// Les méthodes de ==> CRUD 

router
  .get('/', controller.getAllUsers)
  .get('/:id', controller.getUser)
  .put('/:id', controller.updateUser)
  .delete('/:id', controller.deleteUser)

module.exports = router;