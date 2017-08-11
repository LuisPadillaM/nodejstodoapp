let express = require('express');
let router = express.Router();
let Controller = require('../controller/todoCtrl');

router.get('/',Controller.get);
router.get('/:id', Controller.getOne);
router.delete('/:id', Controller.delete);
router.post('/', Controller.post);
router.put('/:id', Controller.update);

module.exports = router;

