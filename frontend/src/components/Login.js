import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://agriculture-system.onrender.com/api/auth/login', { username, password });
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('username', username);
            toast.success('Login successful!');
            navigate("/home");
        } catch (error) {
            toast.error(error.response?.data?.message || 'Login failed');
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="w-11/12 lg:w-96 border border-md border-gray-300 p-4">
                <h2 className="text-2xl text-green-600 font-bold mb-4 mt-2 text-center">Login To Smart Agri</h2>
                <form onSubmit={handleLogin} className="px-8 pt-6 pb-8">
                    <div className="mb-4">
                        <input
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            className="shadow appearance-none border rounded w-full py-2 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="shadow appearance-none border rounded w-full py-2 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <button type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full">
                        Login
                    </button>
                </form>
                <p className="text-center">
                    Don't have an account?{' '}
                    <Link to="/signup" className="text-green-600 font-bold hover:underline">
                        Signup
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
