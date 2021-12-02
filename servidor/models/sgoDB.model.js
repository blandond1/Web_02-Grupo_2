 /* Vamos a crear un esquema de los registros de la base de datos*/
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SgoDBSchema = new Schema({

    nombre: String, 
    apellido: String, 
    fecha: {type: Date, min: '1987-09-28'},
    sede: String, 
    creador: String, 
    proceso: String, 
    validacion: String,
    descripcionIncidente: String, 
    investigadorLider: String, 
    severidad: String,
    tipoIncidente: String,
    tipoTrabajador: String, 
    validacionInvestigacion: String,
    diasPerdidos:{type:Number,default:0},
    date:{type: Date, default: Date.now},
    activo: String,

})

module.exports = mongoose.model("sgoDB", SgoDBSchema);