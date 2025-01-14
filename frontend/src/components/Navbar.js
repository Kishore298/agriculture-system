import React from 'react';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS

const Navbar = () => {
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('username'); 

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        window.location.href = '/'; 
    };

    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-lg font-bold">Agriculture Management</div>
                <div className="flex items-center">
                    {token && (
                        <>
                            <Link to="/fields" className="text-white mx-2">Field List</Link>
                            {username && (
                                <span className="text-green-600 mx-2 flex items-center">
                                    <i className="fas fa-user mr-2"></i>
                                    {username}
                                </span>
                            )}
                            <button onClick={handleLogout} className="text-white mx-2">Logout</button>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

