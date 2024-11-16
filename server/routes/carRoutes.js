const express = require('express');
const router = express.Router();
const Car = require('../models/Car');

// Crear auto
router.post('/add', async (req, res) => {
    try {
        const car = new Car(req.body);
        const carSaved = await car.save();
        res.status(201).json(carSaved);
    } catch (error) {
        res.status(400).json({ mensaje: `No se pudo crear: ${error}`})
    }
});

// Obtener los autos:
router.get('/', async (req, res) => {
    try {
        const cars = await Car.find();
        res.json(cars);
    } catch (error) {
        res.status(400).json({ mensaje: `No se pudo obtener: ${error}`})
    }
})

module.exports = router;