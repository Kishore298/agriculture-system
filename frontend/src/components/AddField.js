import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const AddField = () => {
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [cropType, setCropType] = useState('');
    const [areaSize, setAreaSize] = useState('');
    const [soilType, setSoilType] = useState('');
    const [irrigationType, setIrrigationType] = useState('');
    const [plantingDate, setPlantingDate] = useState('');
    const [harvestDate, setHarvestDate] = useState('');
    const navigate = useNavigate();

    const handleAddField = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8000/api/fields', { 
                name, 
                location, 
                cropType, 
                areaSize, 
                soilType, 
                irrigationType, 
                plantingDate, 
                harvestDate 
            });
            toast.success('Field added successfully');
            navigate('/fields');
        } catch (error) {
            toast.error('Failed to add field');
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10">
            <h2 className="text-2xl font-bold mb-4">Add Field</h2>
            <form onSubmit={handleAddField} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <input
                        type="text"
                        placeholder="Field Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="text"
                        placeholder="Location (latitude,longitude)"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        required
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="text"
                        placeholder="Crop Type"
                        value={cropType}
                        onChange={(e) => setCropType(e.target.value)}
                        required
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="number"
                        placeholder="Area Size (in acres)"
                        value={areaSize}
                        onChange={(e) => setAreaSize(e.target.value)}
                        required
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="text"
                        placeholder="Soil Type"
                        value={soilType}
                        onChange={(e) => setSoilType(e.target.value)}
                        required
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="text"
                        placeholder="Irrigation Type"
                        value={irrigationType}
                        onChange={(e) => setIrrigationType(e.target.value)}
                        required
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="date"
                        placeholder="Planting Date"
                        value={plantingDate}
                        onChange={(e) => setPlantingDate(e.target.value)}
                        required
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="date"
                        placeholder="Harvest Date"
                        value={harvestDate}
                        onChange={(e) => setHarvestDate(e.target.value)}
                        required
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Add Field
                </button>
            </form>
        </div>
    );
};

export default AddField;
