// Cargamos el modulo express
const express = require('express');
const router = express.Router();
// Cargamos el controlador de videojuegos
const videogameController = require('../app/api/controllers/videogames');
// Especificamos nuestras rutas teniendo en cuenta los metodos creados en nuestro controlador
router.get('/', videogameController.getAll);
router.post('/', videogameController.create);
router.get('/:videogameId', videogameController.getById);
router.put('/:videogameId', videogameController.updateById);
router.delete('/:videogameId', videogameController.deleteById);
module.exports = router;