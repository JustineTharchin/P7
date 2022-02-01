require('dotenv');
const { Comment } = require('../models');

exports.createComment = (req, res, next) => {
    const comment = {
        PostId: req.body.postId,
        UserId: req.body.userId,
        comment: req.body.comment
    }; 
    console.log(comment)
    Comment.create(comment)
        .then(() => res.status(201).json({ message: "Commentaire posté!" }))
        .catch(error => res.status(400).json({ error }));
};

exports.getOneComment = (req, res, next) => {
    Comment.findOne({ where: { id: req.params.id } })
        .then((comment) => res.status(200).json(message))
        .catch(error => res.status(404).json({ error }));
};

exports.getAllComments = (req, res, next) => {
    Comment.findAll({
        include: ["user", "post"]
    })
        .then((messages) => res.status(200).json(messages))
        .catch(error => res.status(400).json({ error }));
};

exports.deleteComment = (req, res, next) => {
    Comment.findOne({ where: { id: req.params.id }})
    .then((comment) => {
        Comment.destroy({ where: { id: req.params.id } })
            .then(() => res.status(200).json({ message: 'Message supprimé' }))
            .catch(error => res.status(400).json({ error }));
    })
    .catch(error => res.status(500).json({ error }));
};