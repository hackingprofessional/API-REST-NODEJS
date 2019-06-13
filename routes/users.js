// Cargamos el modulo express
const express = require('express');
const router = express.Router();
// Cargamos el controlador del usuario
const userController = require('../app/api/controllers/users');
// Especificamos nuestras rutas teniendo en cuenta los metodos creados en nuestro controlador, y especificando que seran rutas que usaran el metodo POST
router.post('/register', userController.create);
router.post('/authenticate', userController.authenticate);
module.exports = router;