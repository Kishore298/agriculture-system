import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useParams, useNavigate} from 'react-router-dom';

const UpdateField = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [field, setField] = useState({ 
        name: '', 
        location: '', 
        cropType: '', 
        areaSize: '', 
        soilType: '', 
        irrigationType: '', 
        plantingDate: '', 
        harvestDate: '' 
    });

    const fetchField = async () => {
        try {
            const response = await axios.get(`https://agriculture-system.onrender.com/api/fields/${id}`);
            setField(response.data);
        } catch (error) {
            toast.error('Failed to fetch field data');
        }
    };

    const handleUpdateField = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`https://agriculture-system.onrender.com/api/fields/${id}`, field);
            toast.success('Field updated successfully');
            navigate('/fields'); 
        } catch (error) {
            toast.error('Failed to update field');
        }
    };

    useEffect(() => {
        fetchField();
    }, [id]);

    return (
        <div className="max-w-md mx-auto mt-10">
            <h2 className="text-2xl font-bold mb-4">Update Field</h2>
            <form onSubmit={handleUpdateField} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <input
                        type="text"
                        placeholder="Field Name"
                        value={field.name}
                        onChange={(e) => setField({ ...field, name: e.target.value })}
                        required
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="text"
                        placeholder="Location (latitude,longitude)"
                        value={field.location}
                        onChange={(e) => setField({ ...field, location: e.target.value })}
                        required
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="text"
                        placeholder="Crop Type"
                        value={field.cropType}
                        onChange={(e) => setField({ ...field, cropType: e.target.value })}
                        required
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="number"
                        placeholder="Area Size (in acres)"
                        value={field.areaSize}
                        onChange={(e) => setField({ ...field, areaSize: e.target.value })}
                        required
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="text"
                        placeholder="Soil Type"
                        value={field.soilType}
                        onChange={(e) => setField({ ...field, soilType: e.target.value })}
                        required
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="text"
                        placeholder="Irrigation Type"
                        value={field.irrigationType}
                        onChange={(e) => setField({ ...field, irrigationType: e.target.value })}
                        required
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="date"
                        placeholder="Planting Date"
                        value={field.plantingDate}
                        onChange={(e) => setField({ ...field, plantingDate: e.target.value })}
                        required
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="date"
                        placeholder="Harvest Date"
                        value={field.harvestDate}
                        onChange={(e) => setField({ ...field, harvestDate: e.target.value })}
                        required
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Update Field
                </button>
            </form>
        </div>
    );
};

export default UpdateField;
