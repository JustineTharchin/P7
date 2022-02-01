const express = require('express');
const router = express.Router();
//const auth = require('../middleware/auth');

const postCtrl = require('../controllers/post');

router.post('/new', postCtrl.createPost);
router.get('/:id', postCtrl.getOnePost);
router.get('/', postCtrl.getAllPosts);
router.delete('/:id', postCtrl.deletePost);

module.exports = router;