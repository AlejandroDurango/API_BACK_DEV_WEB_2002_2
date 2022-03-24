//Importación del framework de express
const express = require('express')

//Instanciando Un router
const router = express.Router()

//Importar controladores
const usuario_ctr =require("../controllers/usuarios.controller")

// Definición de los endpoints-rutas

const vs ="/api/v1"

router.get(vs + "/usuarios",usuario_ctr.consultarUsuarios)
      .get(vs + "/usuarios/:id",usuario_ctr.consultarUsuario) // /usuarios/1  usuarios/2
      .post(vs + "/usuarios",usuario_ctr.crearusuario)
      .put(vs + "/usuarios",usuario_ctr.modificarusuario)
      .delete(vs + "/usuarios",usuario_ctr.eliminarUsuario)


module.exports = router  