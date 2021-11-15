// Aquí se crean las funciones y en empleados.router.js se agregan las rutas
const So = require("../models/so.model");

let response = {
    msg: "",
    exito: false
}
exports.create = function (req, res) {
    let so = new So({

        sede: req.body.sede,
        proceso: req.body.proceso,
        tipo_enfermedad: req.body.tipo_enfermedad,
        tipo_trabajador: req.body.tipo_trabajador,
        validacion: req.body.validacion,
        creado_por: req.body.creado_por,
        fecha: req.body.fecha,
        lider_investigacion: req.body.lider_investigacion,
        validacion_investigacion: req.body.validacion_investigacion

    })
    so.save(function (err) {
        if (err) {
            console.log = false;
            response.exito = false,
                response.msg = "Error al guardar la informacion"
            res.json(response)
            return;
        }
        response.exito = true,
            response.msg = "La informacion se guardó correctamente"
        res.json(response)
    })
}
exports.find = function (req, res) {
    So.find(function (err, so) {
        res.json(so)
    })
}

exports.findOne = function (req, res) {
    So.findOne({ _id: req.params.id }, function (err, so) {
        res.json(so)
    })
}

exports.update = function(req, res) {
    let so = {

        sede: req.body.sede,
        proceso: req.body.proceso,
        tipo_enfermedad: req.body.tipo_enfermedad,
        tipo_trabajador: req.body.tipo_trabajador,
        validacion: req.body.validacion,
        creado_por: req.body.creado_por,
        fecha: req.body.fecha,
        lider_investigacion: req.body.lider_investigacion,
        validacion_investigacion: req.body.validacion_investigacion

    }

    So.findByIdAndUpdate(req.params.id, { $set: so }, function(err) {
        if (err) {
            console.error(err),
            response.exito = false,
            response.msg = 'Error al modificar la informacion',
            res.json(response)
            return;
        }
        response.exito = true
        response.msg = 'La informacion se modificó correctamente'
        res.json(response)
    })
}

exports.remove = function (req, res) {
    So.findByIdAndRemove({ _id: req.params.id }, function(err) {
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