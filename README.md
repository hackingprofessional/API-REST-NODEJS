# API-REST-NODEJS
Creacion de una API REST con NodeJS, ExpressJS, Bcrypt, MongoDB, JWT.

Te invito a leer el siguiente post donde explico la creacion de este desarrollo.  
[POST](https://hackingprofessional.github.io/Security/Aprende-nodejs-creando-un-API-REST-con-JWT/)

## Resultado de la aplicacion
Probando Nuestra API.

Registro de usuarios.  
**POST http://localhost:3000/users/register**    

<figure>
  <img src="https://hackingprofessional.github.io/Security/images/CrearUsuarioPOST.png" width="40%" height="55%">
	<figcaption>
    <a href="https://hackingprofessional.github.io/Security/images/CrearUsuarioPOST.png" title="Validando el servicio de registro de usuarios">Validando el servicio de registro de usuarios</a>.
  </figcaption>
</figure>

**Servicio de autenticacion, para generar el token**  
**POST http://localhost:3000/users/authenticate**  

<figure>
  <img src="https://hackingprofessional.github.io/Security/images/AuthPOST.png" width="40%" height="55%">
	<figcaption>
    <a href="https://hackingprofessional.github.io/Security/images/AuthPOST.png" title="Validando el servicio de autenticacion sobre un usuario registrado">Validando el servicio de autenticacion</a>
  </figcaption>
</figure>

**Listado completo de videojuegos sin token de autenticacion**  
**GET http://localhost:3000/videogames**  

<figure>
  <img src="https://hackingprofessional.github.io/Security/images/ErrorJWT.png" width="40%" height="55%">
	<figcaption>
    <a href="https://hackingprofessional.github.io/Security/images/ErrorJWT.png" title="Intentando consumir un servicio protegido sin ningun token">Intentando consumir un servicio protegido sin ningun token</a>
  </figcaption>
</figure>

**Listado completo de videojuegos con token de autenticacion**  
**GET http://localhost:3000/videogames**  

<figure>
  <img src="https://hackingprofessional.github.io/Security/images/LeerRegistroGET.png" width="40%" height="55%">
	<figcaption>
    <a href="https://hackingprofessional.github.io/Security/images/LeerRegistroGET.png" title="Consumiendo un servicio protegido con un token de autenticacion">Consumiendo un servicio protegido con un token de autenticacion</a>
  </figcaption>
</figure>

**Listado de videojuegos por ID (Listado Dinamico)**
**GET http://localhost:3000/videogames/XXXXXXX**  
<figure>
  <img src="https://hackingprofessional.github.io/Security/images/LeerDinamicoGET.png" width="40%" height="55%">
	<figcaption>
    <a href="https://hackingprofessional.github.io/Security/images/LeerDinamicoGET.png" title="Consumiendo un servicio protegido con un token de autenticacion">Consumiendo un servicio protegido con un token de autenticacion</a>
  </figcaption>
</figure>  

**Actualizacion de videojuegos por ID**
**PUT http://localhost:3000/videogames/XXXXXXX**  
<figure>
  <img src="https://hackingprofessional.github.io/Security/images/ActualizarRegistroPUT.png" width="40%" height="55%">
	<figcaption>
    <a href="https://hackingprofessional.github.io/Security/images/ActualizarRegistroPUT.png" title="Actualizar un registro existente de la base de datos">Actualizar un registro existente de la base de datos</a>
  </figcaption>
</figure>

**Eliminacion de videojuegos por ID**
**DELETE http://localhost:3000/videogames/XXXXXXX**  
<figure>
  <img src="https://hackingprofessional.github.io/Security/images/EliminarRegistro.png" width="40%" height="55%">
	<figcaption>
    <a href="https://hackingprofessional.github.io/Security/images/EliminarRegistro.png" title="Actualizar un registro existente de la base de datos">Actualizar un registro existente de la base de datos</a>
  </figcaption>
</figure>

