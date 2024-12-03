const User = require('../models/userModel');

/* -------------------------------------------------------------------------- */
/*                              MODELO DE FUNCIÓN                             */
/* -------------------------------------------------------------------------- */
// const <nombreFuncion> = async (req, res) => {
//     try {
//         const <variable> = await <funcion>();
//         res.status(200).json({ mensaje: "<mensaje obtenido con éxito>", objeto: <variable> });
//     } catch (error) {
//         res.status(400).json({ mensaje: 'Error al buscar lo que quería' });
//     }
// }


const addUser = async (req, res) => {
    const data = req.body;

    // Verifica si falta algún campo. Si falta, te rebota
    if (!data.username || !data.email || !data.contrasena || !data.rol) {
        res.status(400).json({ mensaje: 'Faltan llenar campos' });
    }

    // Instanciar el usuario
    const user = new User(data);

    try {
        // Buscar usuario con el mismo nombre de usuario
        const userFound = await User.findOne({ username: user.username });
        if (userFound) {
            res.status(400).json({ mensaje: 'El usuario ya existe' });
        }

        const userFoundEmail = await User.findOne({ email: user.email });
        if (userFoundEmail) {
            res.status(400).json({ mensaje: 'El correo ya existe' });
        }

        await user.save();
        res.status(201).json({ mensaje: "Usuario creado con éxito", objeto: user });
    
    } catch (error) {
        if (err) {
            res.status(400).json({ mensaje: 'Error al buscar usuario' });
        }
    }
}

const getUser = async (req, res) => {
    // Obtener 1 usuario
    const username = req.params.username;
    try {
        const user = await User.findOne({ username });
        res.status(200).json({ mensaje: "Usuario obtenido con éxito", objeto: user });
    } catch (error) {
        res.status(400).json({ mensaje: 'Error al buscar usuario' });
    }
}

const getUsers = async (req, res) => {
    try {
        // Obtener todos los usuarios
        const users = await User.find();
        res.status(200).json({ mensaje: "Usuarios obtenidos con éxito", objeto: users });
    } catch (error) {
        res.status(400).json({ mensaje: 'Error al buscar usuario' });
    }
}

const getUserById = async (req, res) => {
    // Obtener 1 usuario
    const id = req.params.id;
    try {
        const user = await User.findOne({ id });
        res.status(200).json({ mensaje: "Usuario obtenido con éxito", objeto: user });
    } catch (error) {
        res.status(400).json({ mensaje: 'Error al buscar usuario' });
    }
}

const updateUser = async (req, res) => {
    const id = req.params.id;
    const data = req.body;
    try {
        const user = await User.findByIdAndUpdate(id, data);
        res.status(200).json({ mensaje: "Usuario obtenido con éxito", objeto: user });
    } catch (error) {
        res.status(400).json({ mensaje: 'Error al buscar usuario' });
    }
}

const deleteUser = async (req, res) => {
    // Obtener 1 usuario
    const id = req.params.id;

    try {
        const user = await User.findByIdAndDelete(id);
        res.status(200).json({ mensaje: "Usuario obtenido con éxito", objeto: user });
    } catch (error) {
        res.status(400).json({ mensaje: 'Error al buscar usuario' });
    }
}

module.exports = {
    addUser,
    getUser,
    getUsers,
    getUserById,
    updateUser,
    deleteUser,
}