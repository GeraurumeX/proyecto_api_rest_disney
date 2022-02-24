const express = require('express');
const router = express.Router();

// Incluir Middleware para proteger URL


// Controllers
const AuthController = require('./controllers/AuthController');
//Ruta
router.get('/', (req, res) => res.json({ hello: "World" }));



//Rutas de autenticación de usuarios
router.post('/auth/login', AuthController.signIn);
router.post('/auth/register', AuthController.signUp);

module.exports = router;