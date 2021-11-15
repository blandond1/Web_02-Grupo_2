/* Vamos a crear un esquema de los registros de la base de datos*/
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AuSchema = new Schema({
    fecha_inicio: {type: Date, min: '1987-09-28'},
    fecha_final: {type: Date, min: '1987-09-28'},
    sede: String, 
    proceso: String, 
    dias_totales: {type: Number, default: 0},
    tipo_trabajador: String,
    validacion: String, 
    creado_por: String,
    fecha:{type: Date, default: Date.now}
})

module.exports = mongoose.model("au", AuSchema);