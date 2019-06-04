const port = 3003

//Parser do corpo da requisição, Formulario, JSON, XML
const bodyParser = require("body-parser");
//Servidor web que roda em cima do node
const express = require("express");
const server = express();
const allowCors = require("./cors");

server.use(bodyParser.urlencoded({extended: true})); //formulario
server.use(bodyParser.json());
server.use(allowCors);

server.listen(port, function(){
    console.log("BACKEND está rodando, joinha!!")
});

module.exports = server;