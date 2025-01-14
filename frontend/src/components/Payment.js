import React from 'react';

const Payment = () => {
    const handlePayment = () => {
        // Redirect to the Razorpay payment page
        window.location.href = 'https://rzp.io/rzp/MZdmNTL';
    };

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="w-[90%] lg:w-[60%] text-center">
                <h2 className="text-2xl font-bold mb-4 text-green-500">Payment for AI Insights</h2>
                <p className="mb-4">Click the button below to proceed with the payment for AI insights.</p>
                <button 
                    onClick={handlePayment} 
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                >
                    Pay Now
                </button>
            </div>
        </div>
    );
};

export default Payment;
