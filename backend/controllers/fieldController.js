const Field = require('../models/Field');

// Create a new field
exports.createField = async (req, res) => {
    const { name, location, cropType, areaSize, soilType, irrigationType, plantingDate, harvestDate } = req.body;
    try {
        const newField = new Field({ name, location, cropType, areaSize, soilType, irrigationType, plantingDate, harvestDate, farmerId: req.user.id });
        await newField.save();
        res.status(201).json(newField);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get all fields for a farmer
exports.getFields = async (req, res) => {
    try {
        const fields = await Field.find({ farmerId: req.user.id });
        res.status(200).json(fields);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all fields for admin
exports.getAllFields = async (req, res) => {
    if (req.user.role !== 'Admin') {
        return res.status(403).json({ error: 'Access denied' });
    }
    try {
        const fields = await Field.find();
        res.status(200).json(fields);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update a field
exports.updateField = async (req, res) => {
    const { id } = req.params;
    const { name, location, cropType, areaSize, soilType, irrigationType, plantingDate, harvestDate } = req.body;
    try {
        const updatedField = await Field.findByIdAndUpdate(id, { name, location, cropType, areaSize, soilType, irrigationType, plantingDate, harvestDate }, { new: true });
        res.status(200).json(updatedField);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete a field
exports.deleteField = async (req, res) => {
    const { id } = req.params;
    try {
        await Field.findByIdAndDelete(id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
