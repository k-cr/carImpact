import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const ViewCar = () => {
    /* -------------------------------- Variables ------------------------------- */
    const URL = "localhost";
    const PORT = 3006;

    const { id } = useParams();
    const [car, setCar] = useState({});

    /* -------------------------------- Entro al componente -------------------- */
    useEffect(() => {
        getCar();
    }, []);

    /* -------------------------------- Funciones ------------------------------- */
    const getCar = async () => {
        const response = await axios.get(`http://${URL}:${PORT}/api/cars/${id}`);
        setCar(response.data);
    }

    if (!car) return <div>Car no encontrada</div>

    return (
        <div className="bg-white">
            <div className="pt-6">
                {/* Product info */}
                <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
                <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                    <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{car.marca} - {car.modelo}</h1> 
                </div>

                {/* Options */}
                <div className="mt-4 lg:row-span-3 lg:mt-0">
                    <p className="text-3xl tracking-tight text-gray-900">{car.precio}</p>
                </div>

                <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
                    {/* Description and details */}
                    <div>
                        <h3 className="sr-only">Descripción</h3>

                        <div className="space-y-6">
                            <p className="text-base text-gray-900">{car.descripcion}</p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
        </div>
    )
}

export default ViewCar;