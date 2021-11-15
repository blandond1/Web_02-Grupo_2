// Aquí se crean las funciones y en empleados.router.js se agregan las rutas
const Ci = require("../models/ci.model");

let response = {
    msg: "",
    exito: false
}
exports.create = function (req, res) {
    let ci = new Ci({

        observador: req.body.observador,
        sede: req.body.sede,
        tipo_riesgo: req.body.tipo_riesgo,
        nivel_riesgo: req.body.nivel_riesgo,
        fecha: req.body.fecha,
        responsable: req.body.responsable,
        descrpcion: req.body.descrpcion,
        anexos: req.body.anexos,

    })
    ci.save(function (err) {
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
    Ci.find(function (err, ci) {
        res.json(ci)
    })
}

exports.findOne = function (req, res) {
    Ci.findOne({ _id: req.params.id }, function (err, ci) {
        res.json(ci)
    })
}

exports.update = function(req, res) {
    let ci = {

        observador: req.body.observador,
        sede: req.body.sede,
        tipo_riesgo: req.body.tipo_riesgo,
        nivel_riesgo: req.body.nivel_riesgo,
        fecha: req.body.fecha,
        responsable: req.body.responsable,
        descrpcion: req.body.descrpcion,
        anexos: req.body.anexos,

    }

    Ci.findByIdAndUpdate(req.params.id, { $set: ci }, function(err) {
        if (err) {
            console.error(err),
            response.exito = false,
            response.msg = 'Error al modificar la condicion',
            res.json(response)
            return;
        }
        response.exito = true
        response.msg = 'La condicion se modificó correctamente',
        res.json(response)
    })
}

exports.remove = function (req, res) {
    Ci.findByIdAndRemove({ _id: req.params.id }, function(err) {
        if (err) {
            console.error(err),
            response.exito = false,
            response.msg = 'Error al eliminar la condicion',
            res.json(response)
            return;
        }
        response.exito = true
        response.msg = 'La condicion se eliminó correctamente'
        res.json(response)
    })
}