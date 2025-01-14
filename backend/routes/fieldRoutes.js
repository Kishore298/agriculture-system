const express = require('express');
const { createField, getFields, getAllFields, updateField, deleteField } = require('../controllers/fieldController');
const { authenticate } = require('../middleware/authMiddleware');

const router = express.Router();

// Create a new field
router.post('/', authenticate, createField);

// Get all fields for a farmer
router.get('/', authenticate, getFields);

// Get all fields for admin
router.get('/all', getAllFields);

// Update a field
router.put('/:id', authenticate, updateField);

// Delete a field
router.delete('/:id', authenticate, deleteField);

module.exports = router;
