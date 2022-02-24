const { User } = require('../models/index');

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');


module.exports = {
    //Sign In / Login

    signIn(req, res) {
        let { name, email, password } = req.body;

        //Buscar usuario por email que debe ser unico
        User.findOne({
            where: {
                email: email
            }
        }).then(user => {
            if(!user) {
                res.status(404).json({ msg: "Usuario con este correo no fue encontrado" });
            } else {
                if(bcrypt.compareSync(password, user.password)) {
                    //Se devuelve el token
                    let token = jwt.sign({ user: user }, authConfig.secret, {
                        expiresIn: authConfig.expires
                    });
                    res.json({
                        user: user,
                        token: token
                    })
                } else {
                    //acceso denegado
                    res.status(401).json({ msg: "Password incorrecto" });
                }
            }
        }).catch(err => {
            res.status(500).json(err);
        })
    },


    // Register / SignUp
    signUp(req, res) {
        //se encripta el password
        let password = bcrypt.hashSync(req.body.password, Number.parseInt(authConfig.rounds));

        //Se crea el usuario
        User.create({
            name: req.body.name,
            email: req.body.email,
            password: password
        }).then(user => {
            //Se crea el token
            let token = jwt.sign({ user: user }, authConfig.secret, {
                expiresIn:authConfig.expires
            });

            res.json({
                user: user,
                token: token
            });
        }).catch(err => {
            res.status(500).json(err);
        });
    }
}