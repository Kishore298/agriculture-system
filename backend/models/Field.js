const mongoose = require('mongoose');

const fieldSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    cropType: {
        type: String,
        required: true
    },
    areaSize: {
        type: Number,
        required: true
    },
    soilType: {
        type: String,
        required: true
    },
    irrigationType: {
        type: String,
        required: true
    },
    plantingDate: {
        type: Date,
        required: true
    },
    harvestDate: {
        type: Date,
        required: true
    },
    farmerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});

module.exports = mongoose.model('Field', fieldSchema);
