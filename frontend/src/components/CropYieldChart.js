import React from 'react';
import { Bar } from 'react-chartjs-2';

const CropYieldChart = ({ data }) => {
    const chartData = {
        labels: data.map(item => item.date),
        datasets: [
            {
                label: 'Crop Yield',
                data: data.map(item => item.yield),
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    return (
        <div className="max-w-4xl mx-auto mt-10">
            <h2 className="text-2xl font-bold mb-4">Crop Yield Trends</h2>
            <Bar data={chartData} options={options} />
        </div>
    );
};

export default CropYieldChart;
