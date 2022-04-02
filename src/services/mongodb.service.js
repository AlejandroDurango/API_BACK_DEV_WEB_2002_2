
const { MongoClient, ObjectId } = require("mongodb");

// Connection URI
const uri = process.env.URI_MONGODB;

// Create a new MongoClient
const client = new MongoClient(uri);

const conectarDB = async  ()=>{
//connect the client to the server
await client.connect();
let DB = client.db(process.env.DB_MONGODB)
return DB;
}

/**
 * 
 * @param {*} filtro 
 * @param {*} nuevoDocumento 
 * @returns 
 */
const obtenerFiltroId = (filtro,nuevoDocumento,esConsulta=false) => { 
  if (esConsulta ) {
    //cuando viene de leer documentos
    if (filtro && filtro._id) {
      filtro._id = new ObjectId(filtro._id)
    }    
  } else {
    //cuando viene de modificar o eliminar documento
    if (filtro && filtro._id) {
      filtro._id = new ObjectId(filtro._id)
      if (nuevoDocumento) { //validación !=null, && !=undefined && !=false
        nuevoDocumento._id = filtro._id
      }
    } else {
      throw new Error("el id es obligatorio")
    }
  }
}
const leerDocumentos = async  (nombreColeccion,filtro)=>{
  let db = await conectarDB();
  let coleccion =db.collection(nombreColeccion)
  filtro=filtro ?filtro :{}
  obtenerFiltroId(filtro,null,true) //lo invoco para cuando sea la consulta para un usuario en especifico
  return coleccion.find().toArray()
  }

const agregarDocumento = async (nombreColeccion,informacion) => { 
  let db = await conectarDB();
  let coleccion =db.collection(nombreColeccion)
  return await coleccion.insertOne(informacion)
 }

 const eliminarDocumento = async(nombreColeccion,filtro) => { 
  obtenerFiltroId(filtro)
  let db = await conectarDB();
  let coleccion =db.collection(nombreColeccion)
  return await coleccion.deleteOne(filtro)
 }
 const modificarDocumento = async(nombreColeccion,filtro,nuevoDocumento) => { 
  obtenerFiltroId(filtro,nuevoDocumento)
  let db = await conectarDB();
  let coleccion =db.collection(nombreColeccion)
  return await coleccion.replaceOne(filtro,nuevoDocumento)
 }

module.exports= {leerDocumentos,agregarDocumento,modificarDocumento,eliminarDocumento}
