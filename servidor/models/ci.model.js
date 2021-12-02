/* Vamos a crear un esquema de los registros de la base de datos*/
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CiSchema = new Schema({
    observador: String, 
    sede: String, 
    tipo_riesgo: String,
    nivel_riesgo: String,
    fecha:{type: Date, min: '1987-09-28'},
    responsable: String, 
    descripcion: String,
    anexos: String,
})

module.exports = mongoose.model("ci", CiSchema);