const express = require('express');
const app = express();
const argv = require('./config/yargs').argv;


console.log("Command: ", argv._[0]);

let APP_PORT = 3000;

if( argv.port ) {
    APP_PORT = argv.port;
}

app.get('/function-test', function(req, res) {

    console.log("Entrando a la funcion...", new Date().toUTCString);

    res.send('Hello World, my name is George!');

});

console.log( "Aplicación corriendo en el puerto ", APP_PORT );

app.listen( APP_PORT );
