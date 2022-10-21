//Intanciar del servidor
const { application } = require('express');
const express = require('express');
const app = express();

//Configuración del puerto
const puerto = 8081;
app.set('port', process.env.PORT || puerto);
app.set('json spaces', 2);

//midleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

const cliente = require('./cliente_data.json');

//API
app.get('/', (req, res) => {
    res.send("Inicio del sitio");
});

app.use(require('./rutas/clientes.js'));
app.get('/clientes', (req, res) => {
    res.json(cliente)
});

//Crear un cliente
app.post('/cliente/post', (req, res ) => {
    const { doc_ident, nombre, apellido, email_cliente, telefono_cliente  } = req.body;
    if(doc_ident && nombre && apellido && email_cliente && telefono_cliente) {
        const id = cliente.length + 1;
        const newCliente = {id, ...req.body};
        cliente.push(newCliente);
        res.json(cliente);
        console.log(newCliente);
    } else {
        res.json('Petición erronea')
    }
});

//Inicialización del servidor
app.listen(app.get('port'), () => {
    console.log(`Servidor escuchando por el puerto ${puerto}`);
});