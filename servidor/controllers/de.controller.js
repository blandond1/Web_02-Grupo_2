// Aquí se crean las funciones y en empleados.router.js se agregan las rutas
const De = require("../models/de.model");

let response = {
    msg: "",
    exito: false
}
exports.create = function (req, res) {
    let de = new De({

        dias_seguros: req.body.dias_seguros,
        dias: req.body.dias,
        indice_frecuencia: req.body.indice_frecuencia,
        indice_severidad: req.body.indice_severidad,
        sede: req.body.sede

    })
    de.save(function (err) {
        if (err) {
            console.log = false;
            response.exito = false,
                response.msg = "Error al guardar la información"
            res.json(response)
            return;
        }
        response.exito = true,
            response.msg = "La informacion se guardó correctamente"
        res.json(response)
    })
}
exports.find = function (req, res) {
    De.find(function (err, de) {
        res.json(de)
    })
}

exports.findOne = function (req, res) {
    De.findOne({ _id: req.params.id }, function (err, de) {
        res.json(de)
    })
}

exports.update = function(req, res) {
    let de = {

        dias_seguros: req.body.dias_seguros,
        dias: req.body.dias,
        indice_frecuencia: req.body.indice_frecuencia,
        indice_severidad: req.body.indice_severidad,
        sede: req.body.sede

    }

    De.findByIdAndUpdate(req.params.id, { $set: de }, function(err) {
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
    De.findByIdAndRemove({ _id: req.params.id }, function(err) {
        if (err) {
            console.error(err),
            response.exito = false,
            response.msg = 'Error al eliminar la informacion',
            res.json(response)
            return;
        }
        response.exito = true
        response.msg = 'La informacion se eliminó correctamente'
        res.json(response)
    })
}