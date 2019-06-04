const express = require("express");

module.exports = function(server){
    //API Rounters
    const router = express.Router();
    server.use("/api", router);

    //Tarefa Ruotes
    const tarefaService = require("../api/tarefas/tarefaService");
    tarefaService.register(router, "/tarefas")
}