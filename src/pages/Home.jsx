import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Home = () => {
    /* -------------------------------------------------------------------------- */
    /*                                  Variables                                 */
    /* -------------------------------------------------------------------------- */
    const URL = "localhost";
    const PORT = 3006;

    const [cars, setCars] = useState([]);

    /* -------------------------------------------------------------------------- */
    /*                      Entro al componente y se ejecuta:                     */
    /* -------------------------------------------------------------------------- */
    useEffect(() => {
        getCars();
    }, []);

    /* -------------------------------------------------------------------------- */
    /*                                  Funciones                                 */
    /* -------------------------------------------------------------------------- */
    const getCars = async () => {
        const response = await axios.get(`http://${URL}:${PORT}/api/cars`);
        setCars(response.data);
    }


    /* -------------------------------------------------------------------------- */
    /*                                    Front                                   */
    /* -------------------------------------------------------------------------- */
    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold text-center mb-6">Autos</h1>
            <Link to="/add-car" className="block mb-6 bg-blue-500 text-white py-2 px-4 rounded hover:bg-yellow-500"> Agregar auto </Link>

            <div className="grid grid-cols-3 gap-6">
                { cars.map((car) => 
                    <div key={car._id} className="border rounded-lg p-4 shadow hover:shadow-lg transition">  
                        <h2 className="text-xl font-semibold"> { car.marca } - { car.modelo } </h2>
                        <p className="text-sm"> { car.color } </p>
                        <p className="text-sm"> Año: { car.anio } </p>
                        <p className="text-sm"> Precio: ${ car.precio } </p>
                        <p className="text-sm"> Descripcion: { car.descripcion } </p>
                        <Link to={`/viewCar/${car._id}`} className="mt-4 block text-blue-500 hover:underline">
                            Ver auto
                        </Link> 
                    </div>
                )}
            </div> 
        </div>
    )
}

export default Home;