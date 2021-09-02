const controller = require('../controllers/videos');
const router = require('express').Router();

// Les méthodes de ==> CRUD  

router  
  .get('/', controller.getAllVideos)
  .get('/:id', controller.getVideo)
  .post('/', controller.addVideo)
  .put('/:id', controller.updateVideo)
  .delete('/:id', controller.deleteVideo);

module.exports = router;