const express = require('express');
const { getAIInsights } = require('../controllers/aiController');
const { authenticate } = require('../middleware/authMiddleware');

const router = express.Router();

// Get AI insights for a specific field
router.get('/insights/:fieldId', authenticate, getAIInsights);

module.exports = router;
