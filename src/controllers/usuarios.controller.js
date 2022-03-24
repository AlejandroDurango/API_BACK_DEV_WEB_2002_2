
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
    res.send("Consultar Usuarios")
} 

module.exports={
    crearusuario,
    modificarusuario,
    eliminarUsuario,
    consultarUsuario,
    consultarUsuarios}