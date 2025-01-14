import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate, Link } from 'react-router-dom';

const Signup = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('Farmer');
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/api/auth/signup', { username, password, role });
            toast.success(response.data.message);
            navigate("/home");
        } catch (error) {
            toast.error(error.response?.data?.error || 'Signup failed');
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="w-11/12 lg:w-96 border rounded-md border-md border-gray-300">
                <h2 className="text-2xl text-green-600 font-bold mb-4 mt-2 text-center">Signup To Smart Agri</h2>
                <form onSubmit={handleSignup} className="px-8 pt-6 pb-8">
                    <div className="mb-4">
                        <input
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-4">
                        <select
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        >
                            <option value="Farmer">Farmer</option>
                            <option value="Admin">Admin</option>
                        </select>
                    </div>
                    <button type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full">
                        Signup
                    </button>
                </form>
                <p className="mb-4 text-center">
                    Already have an account?{' '}
                    <Link to="/" className="text-green-600 font-bold hover:underline">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Signup;

