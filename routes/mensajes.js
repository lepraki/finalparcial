const express = require('express');
const router = express.Router();
//const { validarJWT } = require('../middlewares/validar-token');
const { crearMensaje, BuscarMensaje } = require('../controllers/mensajes');

//router.use(validarJWT);
// CRUD de listas
router.get('/', BuscarMensaje);
router.post('/', crearMensaje);

// Exportar Rutas
module.exports = router;