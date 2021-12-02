// Aquí se crean las funciones y en empleados.router.js se agregan las rutas
const SgoDB = require("../models/sgoDB.model");

let response = {
    msg: "",
    exito: false
}
exports.create = function (req, res) {
    let sgoDB = new SgoDB({

        nombre: req.body.nombre,
        apellido: req.body.apellido,
        fecha: req.body.fecha,
        sede: req.body.sede,
        creador: req.body.creador,
        proceso: req.body.proceso,
        validacion: req.body.validacion,
        descripcionIncidente: req.body.descripcionIncidente,
        investigadorLider: req.body.investigadorLider,
        severidad: req.body.severidad,
        tipoIncidente: req.body. tipoIncidente,
        tipoTrabajador: req.body.tipoTrabajador,
        validacionInvestigacion: req.body.validacionInvestigacion,
        diasPerdidos: req.body.diasPerdidos,
        date: req.body.date,
        activo: req.body.activo,

    })
    sgoDB.save(function (err) {
        if (err) {
            console.log = false;
            response.exito = false,
                response.msg = "Error al guardar el incidente"
            res.json(response)
            return;
        }
        response.exito = true,
            response.msg = "El incidente se guardó correctamente"
        res.json(response)
    })
}
exports.find = function (req, res) {
    SgoDB.find(function (err, sgoDB) {
        res.json(sgoDB)
    })
}

exports.findOne = function (req, res) {
    SgoDB.findOne({ _id: req.params.id }, function (err, sgoDB) {
        res.json(sgoDB)
    })
}

exports.update = function(req, res) {
    let sgoDB = {

        nombre: req.body.nombre,
        apellido: req.body.apellido,
        fecha: req.body.fecha,
        sede: req.body.sede,
        creador: req.body.creador,
        proceso: req.body.proceso,
        validacion: req.body.validacion,
        descripcionIncidente: req.body.descripcionIncidente,
        investigadorLider: req.body.investigadorLider,
        severidad: req.body.severidad,
        tipoIncidente: req.body. tipoIncidente,
        tipoTrabajador: req.body.tipoTrabajador,
        validacionInvestigacion: req.body.validacionInvestigacion,
        diasPerdidos: req.body.diasPerdidos,
        date: req.body.date,
        activo: req.body.activo

    }

    SgoDB.findByIdAndUpdate(req.params.id, { $set: sgoDB }, function(err) {
        if (err) {
            console.error(err),
            response.exito = false,
            response.msg = 'Error al modificar el incidente',
            res.json(response)
            return;
        }
        response.exito = true
        response.msg = 'El incidente se modificó correctamente'
        res.json(response)
    })
}

exports.remove = function (req, res) {
    SgoDB.findByIdAndRemove({ _id: req.params.id }, function(err) {
        if (err) {
            console.error(err),
            response.exito = false,
            response.msg = 'Error al eliminar el Incidente',
            res.json(response)
            return;
        }
        response.exito = true
        response.msg = 'El Incidente se eliminó correctamente'
        res.json(response)
    })
}