const Tarefa = require("./tarefa");

Tarefa.methos(['get', 'post', 'put', 'delete']);
Tarefa.updateOptions({new: true, runValidators: true});

module.exports = Tarefa;