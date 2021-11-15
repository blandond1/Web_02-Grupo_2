 /* Vamos a crear un esquema de los registros de la base de datos*/
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SgoDBSchema = new Schema({

    nombre: {type: String, required: [true, 'Nombre obligatorio']}, 
    apellido: {type: String, required: [true, 'Apellido obligatorio']},
    fecha: {type: Date, min: '1987-09-28'},
    sede: {type: String, required: [true, 'Sede obligatoria']}, 
    creador: {type: String, required: [true, 'Relator Obligatorio']}, 
    proceso: {type: String, required: [true, 'Proceso obligatorio']}, 
    validacion: String,
    descripcionIncidente: {type: String, required: [true, 'Proceso obligatorio']},
    investigadorLider: {type: String, required: [true, 'Investigador Obligatorio']}, 
    severidad: String,
    tipoIncidente: String,
    tipoTrabajador: String, 
    validacionInvestigacion: String,
    diasPerdidos:{type:Number,default:0},
    date:{type: Date, default: Date.now},
    activo:{ type:Boolean,default:true }

})

module.exports = mongoose.model("sgoDB", SgoDBSchema);