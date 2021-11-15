// Aquí se crean las funciones y en empleados.router.js se agregan las rutas
const Au = require("../models/au.model");

let response = {
    msg: "",
    exito: false
}
exports.create = function (req, res) {
    let au = new Au({

        fecha_inicio: req.body.fecha_inicio,
        fecha_final: req.body.fecha_final,
        sede: req.body.sede,
        proceso: req.body.proceso,
        dias_totales: req.body.dias_totales,
        tipo_trabajador: req.body.tipo_trabajador,
        validacion: req.body.validacion,
        creado_por: req.body.creado_por,
        fecha: req.body.fecha

    })
    au.save(function (err) {
        if (err) {
            console.log = false;
            response.exito = false,
                response.msg = "Error al guardar la incapacidad"
            res.json(response)
            return;
        }
        response.exito = true,
            response.msg = "La incapacidad se guardó correctamente"
        res.json(response)
    })
}
exports.find = function (req, res) {
    Au.find(function (err, au) {
        res.json(au)
    })
}

exports.findOne = function (req, res) {
    Au.findOne({ _id: req.params.id }, function (err, au) {
        res.json(au)
    })
}

exports.update = function(req, res) {
    let au = {

        fecha_inicio: req.body.fecha_inicio,
        fecha_final: req.body.fecha_final,
        sede: req.body.sede,
        proceso: req.body.proceso,
        dias_totales: req.body.dias_totales,
        tipo_trabajador: req.body.tipo_trabajador,
        validacion: req.body.validacion,
        creado_por: req.body.creado_por,
        fecha: req.body.fecha

    }

    Au.findByIdAndUpdate(req.params.id, { $set: au }, function(err) {
        if (err) {
            console.error(err),
            response.exito = false,
            response.msg = 'Error al modificar la incapacidad',
            res.json(response)
            return;
        }
        response.exito = true
        response.msg = 'La incapacidad se modificó correctamente'
        res.json(response)
    })
}

exports.remove = function (req, res) {
    Au.findByIdAndRemove({ _id: req.params.id }, function(err) {
        if (err) {
            console.error(err),
            response.exito = false,
            response.msg = 'Error al eliminar la incapacidad',
            res.json(response)
            return;
        }
        response.exito = true
        response.msg = 'La incapacidad se eliminó correctamente'
        res.json(response)
    })
}