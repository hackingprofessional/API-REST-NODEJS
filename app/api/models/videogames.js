// Cargamos el módulo de mongoose
const mongoose = require('mongoose');
//Definimos el esquema
const Schema = mongoose.Schema;
// Creamos el objeto del esquema con sus correspondientes campos
const VideogameSchema = new Schema({
 name: {
  type: String,
  trim: true,  
  required: true,
 },
 released_on: {
  type: Date,
  trim: true,
  required: true
 }
});
// Exportamos el modelo para usarlo en otros ficheros
module.exports = mongoose.model('Videogame', VideogameSchema)