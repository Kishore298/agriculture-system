exports.getAIInsights = async (req, res) => {
    const { fieldId } = req.params;
    // Simulate AI insights
    const insights = {
        soilHealth: Math.random() > 0.5 ? 'Healthy' : 'Unhealthy',
        cropDiseaseProbability: Math.random() * 100,
        nutrientRecommendations: {
            nitrogen: Math.random() * 100,
            phosphorus: Math.random() * 100,
            potassium: Math.random() * 100,
        },
    };
    res.status(200).json({ fieldId, insights });
};
