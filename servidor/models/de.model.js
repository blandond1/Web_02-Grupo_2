/* Vamos a crear un esquema de los registros de la base de datos*/
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DeSchema = new Schema({
    dias_seguros:{type: Number, default: 0},
    dias: {type: Number, default: 0}, 
    indice_frecuencia: {type: Number, default: 0},
    indice_severidad: {type: Number, default: 0},
    sede: String
})

module.exports = mongoose.model("de", DeSchema);
