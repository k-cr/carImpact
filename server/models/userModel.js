const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    contrasena: { type: String, required: true },
    rol: { type: String, required: true },
});

module.exports = mongoose.model('User', userSchema);