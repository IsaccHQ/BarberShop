//Intanciar del servidor
const express = require('express');
const app = express();

//Configuración del puerto
const puerto = 8081;
app.set('port', process.env.PORT || puerto);

//midleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//API
app.get('/', (req, res) => {
    res.send("Inicio del sitio");
});

app.use(require('./rutas/clientes'));
app.get('/clientes', (req, res) => {
    res.send("Listado de clientes");
});


//Inicialización del servidor
app.listen(app.get('port'), () => {
    console.log(`Servidor escuchando por el puerto ${puerto}`);
});