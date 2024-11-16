require('dotenv').config(); // <-- ?????
// El server
const express = require('express');
// La BD
const mongoose = require('mongoose');
// Formatea el cuerpo de las respuestas
const bodyParser = require('body-parser');
// Para que no tire error de seguridad
const cors = require('cors');

// Inicializamos el server.
const app = express();

// Configuramos las cosas que hagan falta: 
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Conexión a Mongoose
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log('Se contectó de 10'))
        .catch((err) => console.error(`Se produjo un error en la conexión: ${err}`))

// Importamos las rutas / modelos
const carRoutes = require('./routes/carRoutes');
app.use('/api/cars', carRoutes);

// Puerto de conexión
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`))
