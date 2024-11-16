const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    marca: { type: String, required: true },
    modelo: { type: String, required: true },
    color: { type: String },
    imagen: { type: String },
    precio: { type: Number },
    anio: { type: Number },
    descripcion: { type: String },
});

module.exports = mongoose.model('Car', carSchema);