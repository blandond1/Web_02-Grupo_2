/* Vamos a crear un esquema de los registros de la base de datos*/
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CiSchema = new Schema({
    observador: String, 
    sede: String, 
    tipo_riesgo: String,
    nivel_riesgo: String,
    fecha:{type: Date, default: Date.now},
    responsable: String, 
    descrpcion: String,
    anexos: String,
})

module.exports = mongoose.model("ci", CiSchema);