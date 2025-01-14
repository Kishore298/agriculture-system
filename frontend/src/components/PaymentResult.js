import React from "react";
import { useLocation } from "react-router-dom";

const PaymentResult = () => {
  const location = useLocation();
  const { success } = location.state || { success: false };

  return (
    <div className="max-w-md mx-auto mt-10 text-center">
      <div className="mb-6">
        {success ? (
          <div className="animate-success">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="green"
              className="w-16 h-16 mx-auto"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12l2 2 4-4m6 6a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        ) : (
          <div className="animate-failure">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="red"
              className="w-16 h-16 mx-auto"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        )}
      </div>
      <h2 className="text-2xl font-bold mb-4">
        {success ? "Payment Successful" : "Payment Failed"}
      </h2>
      <p className="mb-4">
        {success
          ? "Thank you for your payment! You now have access to AI insights."
          : "Unfortunately, your payment could not be processed. Please try again."}
      </p>
    </div>
  );
};

export default PaymentResult;

