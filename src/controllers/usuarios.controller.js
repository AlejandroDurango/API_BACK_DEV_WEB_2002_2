
//importar los servicios

const {leerDocumentos,agregarDocumento,modificarDocumento,eliminarDocumento} =require("../services/mongodb.service");


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
const modificarusuario = async (req, res) => {
    let respuesta={}
    try {
        let _id=  req.body["id"]
        respuesta.ok=true
        respuesta.message="Usuarios modificado  correctamente."
        //modificar usuario en la base de de datos
        let informacion=req.body
        let resultado = await modificarDocumento("usuarios",{_id},informacion)
        console.log(resultado)
        respuesta.info=resultado
        res.send(respuesta)
    } catch (error) {
        console.log(error)
        respuesta.ok=false
        respuesta.message="Ha ocurrido un error modificando el usuario."
        respuesta.info=error
        res.status(500).send(respuesta)
    }
} 

/**
 * 
 * @param {Request} req 
 * @param {Repsonse}res 
 */
 const eliminarUsuario = async (req, res) => {
    let respuesta={}
    try {
        let _id=  req.body["id"]
        respuesta.ok=true
        respuesta.message="Usuario eliminado  correctamente."
        //modificar usuario en la base de de datos
        let informacion=req.body
        let resultado = await eliminarDocumento("usuarios",{_id})
        console.log(resultado)
        respuesta.info=resultado
        res.send(respuesta)
    } catch (error) {
        console.log(error)
        respuesta.ok=false
        respuesta.message="Ha ocurrido un error al eliminar el usuario."
        respuesta.info=error
        res.status(500).send(respuesta)
    }
} 

/**
 * 
 * @param {Request} req 
 * @param {Repsonse}res 
 */
 const consultarUsuario = async(req, res) => {
    let respuesta={}
    try {
        let _id=  req.body["id"]
        respuesta.ok=true
        respuesta.message="Usuario consultado correctamente."
        //modificar usuario en la base de de datos
        let informacion=req.body
        let resultado = await leerDocumentos("usuarios",{_id})
        console.log(resultado)
        respuesta.info=resultado
        res.send(respuesta)
    } catch (error) {
        console.log(error)
        respuesta.ok=false
        respuesta.message="Ha ocurrido un error al consultar el usuario."
        respuesta.info=error
        res.status(500).send(respuesta)
    }
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
        let resultado = await leerDocumentos("usuarios")
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