
//importar los servicios

const run =require("../services/mongodb.service");

//Controlador de usuarios
///nfn crear funciones
/**
 * 
 * @param {Request} req 
 * @param {Repsonse}res 
 */
const crearusuario = (req, res) => {
    res.send("Crear usuario")
} 

/**
 * 
 * @param {Request} req 
 * @param {Repsonse}res 
 */
const modificarusuario = (req, res) => {
    res.send("Modificar usuario")
} 

/**
 * 
 * @param {Request} req 
 * @param {Repsonse}res 
 */
 const eliminarUsuario = (req, res) => {
    res.send("Eliminar Usuario")
} 

/**
 * 
 * @param {Request} req 
 * @param {Repsonse}res 
 */
 const consultarUsuario = (req, res) => {
    res.send("Consultar Usuario")
} 

/**
 * 
 * @param {Request} req 
 * @param {Repsonse}res 
 */
 const consultarUsuarios = (req, res) => {

    let respuesta={}
    try {
        respuesta.ok=true
        respuesta.message="Usuarios consultados correctamente."
        //consulta a la base de de datos
        run().catch(console.dir);
        respuesta.info=[{nombre:"Juan"}]
        res.send(respuesta)
    } catch (error) {
        respuesta.ok=false
        respuesta.message="Ha ocurrido un error consultado los usuarios."
        respuesta.info=error
        res.status(500).send(respuesta)
    }
    

 
}  

module.exports={
    crearusuario,
    modificarusuario,
    eliminarUsuario,
    consultarUsuario,
    consultarUsuarios}