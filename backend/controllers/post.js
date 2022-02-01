require('dotenv');
const { Post } = require('../models');

exports.createPost = (req, res, next) => {
    const post = {
        // userId: req.body.userId,
        UserId: req.body.userId,
        content: req.body.content
    }; 
    console.log(post)
    Post.create(post)
        .then(() => res.status(201).json({ message: "Message envoyé!" }))
        .catch(error => res.status(400).json({ error }));
};

exports.getOnePost = (req, res, next) => {
    Post.findOne({where: {id: req.params.id }})
      .then(post => res.status(200).json(post))
      .catch(error => res.status(404).json({ error }));
};

exports.getAllPosts = (req, res, next) => {
    Post.findAll()
      .then((posts) =>  res.status(200).json(posts))
      .catch((error) =>  res.status(400).json({ error }));
};

exports.deletePost = (req, res, next) => {
  Post.findOne({ where: { id: req.params.id }})
  .then((post) => {
      Post.destroy({ where: { id: req.params.id } })
          .then(() => res.status(200).json({ message: 'Message supprimé' }))
          .catch(error => res.status(400).json({ error }));
  })
  .catch(error => res.status(500).json({ error }));
};


