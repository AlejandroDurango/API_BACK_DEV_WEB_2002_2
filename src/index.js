//Importación del framework de express
const express = require('express')

//Instanciar la aplicación de express
const app = express()

//Integrando el router con la app
const router = require("./routers/index.router")
app.use(router)


//Puerto donde se levanta el servidor web
//Puerto dodne esta escuchando la API
const PORT = 3000

//levantar  la API
//1.primer parametro: Puerto
//2.Segundo  parametro :Callback
app.listen(PORT, () => {
    console.log(`API escuchando en http://localhost:${PORT}`)
})
