import React from "react";

const Home = () => {
  return (
    <div className="w-[90%] mx-auto mt-10 mb-10">
      <div className="w-[90%] flex flex-col mx-auto">
        <h1 className="text-3xl lg:text-6xl text-green-500 text-center font-bold mb-4">
          Welcome to the Smart Agriculture System
        </h1>
        <p className="mb-4 text-gray-600 text-xl">
          This system allows farmers to monitor, manage, and analyze field data
          effectively. Here are some of the key features:
        </p>
      </div>
      {/* Features Heading */}
      <div className="mt-10 mb-6">
        <h2 className="text-4xl lg:text-5xl font-bold text-green-500 underline text-center">
          Features
        </h2>
      </div>
      {/* Features List */}
      <div className="space-y-16 mt-10">
        {/* Feature 1 */}
        <div className="flex flex-col lg:flex-row items-center gap-8 text-center lg:text-left">
          <div className="lg:w-1/2">
            <img
              src="./assets/field-image.jpg"
              alt="Field Management"
              className="rounded-lg shadow-lg w-full h-80 object-cover"
            />
          </div>
          <div className="lg:w-1/2 flex flex-col items-center lg:items-start">
            <h3 className="text-2xl font-semibold text-teal-500 mb-4">
              Field Management
            </h3>
            <p className="text-xl lg:text-3xl text-gray-600 mb-6">
              Add, update, and delete field data with details like field name,
              location, crop type, and area size.
            </p>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-8 text-center lg:text-left">
          <div className="lg:w-1/2 flex flex-col items-center lg:items-start">
            <h3 className="text-2xl font-semibold text-teal-500 mb-4">
              AI Insights
            </h3>
            <p className="text-xl lg:text-3xl text-gray-600 mb-4">
              Access AI-generated insights on soil health and crop health
              analysis.
            </p>
            <p className="text-lg text-yellow-500 font-semibold flex items-center">
              <span className="mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-5 h-5 text-yellow-500"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.5 8V6a4.5 4.5 0 1 1 9 0v2h.5A1.5 1.5 0 0 1 14.5 9.5v5A1.5 1.5 0 0 1 13 16H3a1.5 1.5 0 0 1-1.5-1.5v-5A1.5 1.5 0 0 1 3 8h.5zm1 0h7V6a3.5 3.5 0 1 0-7 0v2z" />
                </svg>
              </span>
              Requires Subscription
            </p>
          </div>
          <div className="lg:w-1/2">
            <img
              src="./assets/ai-insights.webp"
              alt="AI Insights"
              className="rounded-lg shadow-lg w-full h-80 object-cover"
            />
          </div>
        </div>

        {/* Feature 3 */}
        <div className="flex flex-col lg:flex-row items-center gap-8 text-center lg:text-left">
          <div className="lg:w-1/2">
            <img
              src="./assets/data-visualization.webp"
              alt="Data Visualization"
              className="rounded-lg shadow-xl w-full h-80 object-cover border border-md border-gray-300"
            />
          </div>
          <div className="lg:w-1/2 flex flex-col items-center lg:items-start">
            <h3 className="text-2xl font-semibold text-teal-500 mb-4">
              Data Visualization
            </h3>
            <p className="text-xl lg:text-3xl text-gray-600 mb-6">
              Visualize field data such as crop yield trends and health
              statistics using interactive charts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
