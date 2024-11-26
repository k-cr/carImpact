import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const AddCar = () => {
    /* -------------------------------- Variables ------------------------------- */
    const URL = "localhost";
    const PORT = 3006;

    const [car, setCar] = useState({
        marca: "",
        modelo: "",
        color: "",
        // imagen: "",
        precio: 0,
        anio: 0,
        descripcion: "",
    });
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    /* -------------------------------- Funciones ------------------------------- */
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const response = await axios.post(`http://${URL}:${PORT}/api/cars/add`, car);
        setLoading(false);
        if (response.status === 201) {
            setSuccess(true);
            setCar({
                marca: "",
                modelo: "",
                color: "",
                // imagen: "",
                precio: 0,
                anio: 0,
                descripcion: "",
            });
        } else {
            setErrors(response.data);
        }
    }

    return (
        <div className="p-6 max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-4"> Agregar auto </h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="marca" className="block mb-2 text-sm font-medium text-gray-900">Marca</label>
                    <input type="text" id="marca" name="marca" value={car.marca} onChange={(e) => setCar({ ...car, marca: e.target.value })} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-300 dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Marca" />
                    { errors.marca && <p className="text-red-500 text-xs italic">{ errors.marca }</p> }
                </div>
                <div className="mb-4">
                    <label htmlFor="modelo" className="block mb-2 text-sm font-medium text-gray-900">Modelo</label>
                    <input type="text" id="modelo" name="modelo" value={car.modelo} onChange={(e) => setCar({ ...car, modelo: e.target.value })} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-300 dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Modelo" />
                    { errors.modelo && <p className="text-red-500 text-xs italic">{ errors.modelo }</p> }
                    <p className="text-xs italic text-gray-500">Ej: Corolla, Civic, Accord, Camry</p>
                </div>
                <div className="mb-4">
                    <label htmlFor="color" className="block mb-2 text-sm font-medium text-gray-900">Color</label>
                    <input type="text" id="color" name="color" value={car.color} onChange={(e) => setCar({ ...car, color: e.target.value })} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-300 dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Color" />
                    { errors.color && <p className="text-red-500 text-xs italic">{ errors.color }</p> }
                    <p className="text-xs italic text-gray-500">Ej: Blanco, Negro, Rojo, Amarillo</p>
                </div>
                <div className="mb-4">
                    <label htmlFor="precio" className="block mb-2 text-sm font-medium text-gray-900">Precio</label>
                    <input type="number" id="precio" name="precio" value={car.precio} onChange={(e) => setCar({ ...car, precio: e.target.value })} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-300 dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Precio" />
                    { errors.precio && <p className="text-red-500 text-xs italic">{ errors.precio }</p> }
                    <p className="text-xs italic text-gray-500">Ej: 10000, 20000, 30000, 40000</p>
                </div>
                <div className="mb-4">
                    <label htmlFor="anio" className="block mb-2 text-sm font-medium text-gray-900">Año</label>
                    <input type="number" id="anio" name="anio" value={car.anio} onChange={(e) => setCar({ ...car, anio: e.target.value })} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-300 dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Año" />
                    { errors.anio && <p className="text-red-500 text-xs italic">{ errors.anio }</p> }
                    <p className="text-xs italic text-gray-500">Ej: 2000, 2001, 2002, 2003</p>
                </div>
                <div className="mb-4">
                    <label htmlFor="descripcion" className="block mb-2 text-sm font-medium text-gray-900">Descripcion</label>
                    <textarea id="descripcion" name="descripcion" value={car.descripcion} onChange={(e) => setCar({ ...car, descripcion: e.target.value })} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-300 dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Descripcion" />
                    { errors.descripcion && <p className="text-red-500 text-xs italic">{ errors.descripcion }</p> }
                    <p className="text-xs italic text-gray-500">Ej: Este auto es muy bueno</p>
                </div>
                <div className="flex justify-end">
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-yellow-500">Agregar</button>
                </div>
            </form>
        </div>
    )
}

export default AddCar;