const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv');
// const User = require('../models/sequelize');
const {User} = require('../models');


const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{8,20}/;


exports.signup = (req, res, next) => {
    const email    = req.body.email;
    const password = req.body.password;

    console.log(req.body)

    if(email == null || email == '' || password == null || password == '') {
        return res.status(400).json({ error: 'Tous les champs doivent être renseignés' });
    }
    if(!emailRegex.test(email)) {
        return res.status(400).json({ error: 'Adresse mail invalide' });
    }
    //if(!passwordRegex.test(password)) {
        //return res.status(400).json({ error: 'Le mot de passe doit contenir entre 8 et 20 caractères dont au moins une lettre majuscule, une lettre minusucle, un chiffre et un symbole' });
    //}
    //User.findOne({
      //  attributes: ['email'],
       // where: {
         //   email: email
       // }
    //})
    //.then(userExist => {
       // if(!userExist) {
            bcrypt.hash(password, 10)
            .then(hash => {
                const user = User.create({
                    prenom: req.body.prenom,
                    nom: req.body.nom,
                    email: req.body.email,
                    password: hash
                })
                .then((user) => {
                    console.log(user) 
                    res.status(201).json({ message: 'Utilisateur créé !' })
                });
            })
            .catch(error => {
                console.log(error)
                res.status(500).json({ error: 'Une erreur s\'est produite lors de la création de votre compte' })
            });
       // } else {
         //   return res.status(404).json({ error: 'Cet utilisateur existe déjà' })
        //}
    //})
    //.catch(error => res.status(500).json({ error: 'Une erreur s\'est produite !' }));
};


exports.login = (req, res, next) => {
    User.findOne({ where:{email: req.body.email} })
      .then(user => {
        if (!user) {
          return res.status(401).json({ error: 'Utilisateur non trouvé !' });
        }
        console.log("user: ", user)
        bcrypt.compare(req.body.password, user.password)
          .then(valid => {
            if (!valid) {
              return res.status(401).json({ error: 'Mot de passe incorrect !' });
            }
            console.log("is valid: ", valid)
            console.log("User id: ", user.id)
            res.status(200).json({
              userId: user.id,
              token: jwt.sign(
                { userId: user.id },
                'RANDOM_TOKEN_SECRET', 
                { expiresIn: '24h' }
              )
            });
          })
          .catch(error => {
            console.log(error);
            res.status(500).json({ error })});
      })
      .catch(error => res.status(500).json({ error }));
};

exports.getOneUser = (req, res, next) => {
  User.findOne ({ where: { id: req.params.id }})
      .then((user) => res.status(200).json(user))
      .catch(error => res.status(404).json({ error }));
};

exports.getAllUsers = (req, res, next) => {
  User.findAll({attributes: ['id', 'email','prenom','nom']}) 
      .then((users) => res.status(200).json(users))
      .catch(error => res.status(400).json({ error }));
};


exports.updateUser = (req, res, next) => {
  try {
    User.update({
        email: req.body.email
    }, {
        where: {
            id: (req.params.id)
        }
    });

    return res.status(200).send({
        message: "email modifiée"
    })
} catch (err) {
    return res.status(500).json(err);
}
}
