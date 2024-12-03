const express = require('express');
const User = require('../models/userModel'); 
const userController = require('../controller/userController');

const router = express.Router();
// POST
// CREAR USUARIO
router.post('/add', async (req, res) => {
    try {
        userController.addUser(req, res);
    } catch (error) {
        res.status(400).json({ mensaje: `No se pudo crear: ${error}`})
    }
});

// GET
// OBTENER TODOS LOS USUARIOS
router.get('/', async (req, res) => {
    try {
        await userController.getUsers(req, res);
    } catch (error) {
        res.status(400).json({ mensaje: `No se pudo obtener: ${error}`})
    }
})

// GET
// OBTENER UN USUARIO
router.get('/:id', async (req, res) => {
    try {
        userController.getUserById(req, res);
    } catch (error) {
        res.status(400).json({ mensaje: `No se pudo obtener: ${error}`})
    }
})

// OBTENER UN USUARIO
router.get('/user/:username', async (req, res) => {
    try {
        userController.getUser(req, res);
    } catch (error) {
        res.status(400).json({ mensaje: `No se pudo obtener: ${error}`})
    }
})

// PUT
// ACTUALIZAR USUARIO
router.put('/:id', async (req, res) => {
    try {
        userController.updateUser(req, res);
    } catch (error) {
        res.status(400).json({ mensaje: `No se pudo actualizar: ${error}`})
    }
})

// DELETE
// ELIMINAR USUARIO
router.delete('/:id', async (req, res) => {
    try {
        userController.deleteUser(req, res);
    } catch (error) {
        res.status(400).json({ mensaje: `No se pudo eliminar: ${error}`})
    }
})

module.exports = router;