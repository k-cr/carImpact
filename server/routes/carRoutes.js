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

// Obtener un auto:
router.get('/:id', async (req, res) => {
    try {
        console.log(req.params)
        const car = await Car.findById(req.params.id);
        res.json(car);
    } catch (error) {
        res.status(400).json({ mensaje: `No se pudo obtener: ${error}`})
    }
})

// Actualizar un auto:
router.put('/:id', async (req, res) => {
    try {
        const car = await Car.findByIdAndUpdate(req.params.id, req.body);
        res.json(car);
    } catch (error) {
        res.status(400).json({ mensaje: `No se pudo actualizar: ${error}`})
    }
})

module.exports = router;