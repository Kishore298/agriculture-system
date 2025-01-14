import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const AIInsights = () => {
    const { fieldId } = useParams();
    const [insights, setInsights] = useState(null);
    const [hasAccess, setHasAccess] = useState(false);

    const fetchAIInsights = async () => {
        try {
            const response = await axios.get(`http://localhost:8000/api/ai/insights/${fieldId}`);
            setInsights(response.data.insights);
        } catch (error) {
            toast.error('Failed to fetch AI insights');
        }
    };

    const checkAccess = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/payments/history');
            if (response.data.length > 0) {
                setHasAccess(true);
            } else {
                setHasAccess(false);
            }
        } catch (error) {
            toast.error('Failed to check payment status');
        }
    };

    useEffect(() => {
        checkAccess();
    }, []);

    useEffect(() => {
        if (hasAccess) {
            fetchAIInsights();
        }
    }, [hasAccess]);

    return (
        <div className="max-w-md mx-auto mt-10">
            <h2 className="text-2xl font-bold mb-4">AI Insights</h2>
            {hasAccess ? (
                insights ? (
                    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <p><strong>Soil Health:</strong> {insights.soilHealth}</p>
                        <p><strong>Crop Disease Probability:</strong> {insights.cropDiseaseProbability.toFixed(2)}%</p>
                        <p><strong>Nutrient Recommendations:</strong></p>
                        <ul>
                            <li>Nitrogen: {insights.nutrientRecommendations.nitrogen.toFixed(2)} kg/ha</li>
                            <li>Phosphorus: {insights.nutrientRecommendations.phosphorus.toFixed(2)} kg/ha</li>
                            <li>Potassium: {insights.nutrientRecommendations.potassium.toFixed(2)} kg/ha</li>
                        </ul>
                    </div>
                ) : (
                    <p>Loading insights...</p>
                )
            ) : (
                <div>
                    <p>You need to make a payment to access AI insights.</p>
                    <Link to="/payment" className="inline-block px-4 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md">Pay now</Link>
                </div>
            )}
        </div>
    );
};

export default AIInsights;
