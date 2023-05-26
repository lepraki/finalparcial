const express = require('express');
const Mensaje = require('../modelo/mensajes');

async function crearMensaje (req, res = express.request) {
    const mensaje = new Mensaje(req.body);

    try {
        mensaje.user = req.uid;
        const saved = await mensaje.save();

        // Retorna el  Creado
        res.json({
            ok: true,
            mensaje: saved
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            mensaje: 'Internal Error'
        });
    }
}

async function BuscarMensaje(req, res = express.request) {
    const mensajes = await Mensaje.find()
    try {
        res.status(200).json({
            ok: true,
            mensajes
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Internal Error'
        });
    }
}

module.exports = {crearMensaje, BuscarMensaje};