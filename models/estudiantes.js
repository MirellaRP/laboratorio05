const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Basado en la pc2 de Claudia Pacori en https://github.com/Claudia-Pacori/pc2
const Estudiantes = new Schema ({
        codigo: {type: String, required: true, max: 9},
        nombre: {type: String, required: true, max: 50},
        apellido: {type: String, required: true, max: 50},
        email: {type: String, required: true, max: 20},
        estado: {type: String, required: true, max: 2}
});

module.exports = mongoose.model('Estudiantes', Estudiantes)
