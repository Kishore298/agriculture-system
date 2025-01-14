import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
    const [fields, setFields] = useState([]);
    const [isAdmin, setIsAdmin] = useState(false);

    const fetchFields = async () => {
        try {
            const response = await axios.get('https://agriculture-system.onrender.com/api/fields/all');
            if (response.status === 403) {
                setIsAdmin(false);
                toast.error('Access denied. You are not an admin.');
                return;
            }
            setFields(response.data);
            setIsAdmin(true);
        } catch (error) {
            if (error.response && error.response.status === 403) {
                setIsAdmin(false);
                toast.error('Access denied. You are not an admin.');
            } else {
                toast.error('Failed to fetch fields');
            }
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`https://agriculture-system.onrender.com/api/fields/${id}`);
            fetchFields();
            toast.success('Field deleted successfully');
        } catch (error) {
            toast.error('Failed to delete field');
        }
    };

    useEffect(() => {
        fetchFields();
    }, []);

    return (
        <div className="max-w-4xl mx-auto mt-10">
            <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>
            {!isAdmin ? (
                <p className="text-red-500">You do not have permission to access this page.</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {fields.map(field => (
                        <div key={field._id} className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300">
                            <img src="https://via.placeholder.com/300x200" alt="Field" className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold text-gray-800">{field.name}</h3>
                                <p className="text-gray-600 mt-2">Location: {field.location}</p>
                                <p className="text-gray-600 mt-2">Crop Type: {field.cropType}</p>
                                <p className="text-gray-600 mt-2">Area Size: {field.areaSize} sq.m</p>
                                <p className="text-gray-600 mt-2">Soil Type: {field.soilType}</p>
                                <p className="text-gray-600 mt-2">Irrigation Type: {field.irrigationType}</p>
                                <div className="mt-4 flex justify-between items-center">
                                    <Link to={`/update-field/${field._id}`} className="text-blue-500 hover:underline">Edit</Link>
                                    <button onClick={() => handleDelete(field._id)} className="text-red-500 hover:underline">Delete</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default AdminDashboard;