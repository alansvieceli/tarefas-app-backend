const restfull = require("node-restful");
const mongoose = restfull.mongoose

const tarefaSchema = new mongoose.Schema({
    descricao: {type: String, require: true},
    finalizada: {type: Boolean, require: true, default: false},
    criacao: {type: Date, default: Date.now}
});

module.exports = restfull.model("Tarefa", tarefaSchema)