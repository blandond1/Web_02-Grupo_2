/* Vamos a crear un esquema de los registros de la base de datos*/
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SoSchema = new Schema({

    sede: String, 
    proceso: String, 
    tipo_enfermedad: String,
    tipo_trabajador: String,
    validacion: String,
    creado_por: String, 
    fecha:{type: Date, default: Date.now}, 
    lider_investigacion: String,
    validacion_investigacion: String,

})

module.exports = mongoose.model("so", SoSchema);