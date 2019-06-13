const videogameModel = require('../models/videogames');
module.exports = {
// Metodo para la busqueda de videojuegos por ID
 getById: function(req, res, next) {
  console.log(req.body);
  videogameModel.findById(req.params.videogameId, function(err, videogameInfo){
   if (err) {
    next(err);
   } else {
    res.json({status:"success", message: "Videogame found!!!", data:{videogames: videogameInfo}});
   }
  });
 },
//Metodo para retornar todos los videojuegos registrados en la base de datos
getAll: function(req, res, next) {
  let videogamesList = [];
videogameModel.find({}, function(err, videogames){
   if (err){
    next(err);
   } else{
    for (let videogame of videogames) {
     videogamesList.push({id: videogame._id, name: videogame.name, released_on: videogame.released_on});
    }
    res.json({status:"success", message: "Videogames list found!!!", data:{videogames: videogamesList}});
       
   }
});
 },
//Metodo para actualizar algun registro de la base de datos
updateById: function(req, res, next) {
  videogameModel.findByIdAndUpdate(req.params.videogameId,{name:req.body.name}, function(err, videogameInfo){
if(err)
    next(err);
   else {
    res.json({status:"success", message: "Videogame updated successfully!!!", data:null});
   }
  });
 },
//Metodo para eliminar algun registro de la base de datos
deleteById: function(req, res, next) {
  videogameModel.findByIdAndRemove(req.params.videogameId, function(err, videogameInfo){
   if(err)
    next(err);
   else {
    res.json({status:"success", message: "Videogame deleted successfully!!!", data:null});
   }
  });
 },
//Metodo para crear algun registro nuevo
create: function(req, res, next) {
  videogameModel.create({ name: req.body.name, released_on: req.body.released_on }, function (err, result) {
      if (err) 
       next(err);
      else
       res.json({status: "success", message: "Videogame added successfully!!!", data: null});
      
    });
 },
}