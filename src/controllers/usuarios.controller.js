
//importar los servicios

const {leerDocumento,agregarDocumento,modificarDocumento,eliminarDocumento} =require("../services/mongodb.service");


//Controlador de usuarios
///nfn crear funciones
/**
 * 
 * @param {Request} req 
 * @param {Repsonse}res 
 */
const crearusuario = async (req, res) => {

    let respuesta={}
    try {
        respuesta.ok=true
        respuesta.message="Usuarios agregado correctamente."
        //agregar a la base de de datos
        let informacion=req.body
        let resultado = await agregarDocumento("usuarios",informacion)
        console.log(resultado)
        respuesta.info=resultado
        res.send(respuesta)
    } catch (error) {
        console.log(error)
        respuesta.ok=false
        respuesta.message="Ha ocurrido un error agregando el usuario."
        respuesta.info=error
        res.status(500).send(respuesta)
    }
     
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
 const consultarUsuarios = async(req, res) => {

    let respuesta={}
    try {
        respuesta.ok=true
        respuesta.message="Usuarios consultados correctamente."
        //consulta a la base de de datos
        let resultado = await leerDocumento("usuarios")
        console.log(resultado)
        respuesta.info=resultado
        res.send(respuesta)
    } catch (error) {
        console.log(error)
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