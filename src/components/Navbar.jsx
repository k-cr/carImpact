import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='bg-blue-800 text-white p-3 shadow'>
            <div className='container mx-auto flex justify-between items-center'>
                <Link to='/' className="text-2xl font-bold">
                    CAR IMPACT
                </Link>

                <div className='flex space-x-3'>
                    <Link to='/' className='hover:text-yellow-500 transition'>
                        Home
                    </Link>
                </div>

                <div className='flex space-x-3'>
                    <Link to='/add-car' className='hover:text-yellow-500 transition'>
                        Agregar auto
                    </Link>
                </div>

                <div className='flex space-x-3'>
                    <Link to='/' className='hover:text-yellow-500 transition'>
                        Reseñar auto
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;