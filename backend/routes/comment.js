const express = require('express');
const router = express.Router();
//const auth = require('../middleware/auth');

const commentCtrl = require('../controllers/comment');

router.post('/new', commentCtrl.createComment);
router.get('/:id', commentCtrl.getOneComment);
router.get('/', commentCtrl.getAllComments);
router.delete('/:id', commentCtrl.deleteComment);

module.exports = router;

