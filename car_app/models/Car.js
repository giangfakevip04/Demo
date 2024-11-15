// models/Car.js
const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    MaXe: { type: String, required: true, unique: true },
    Name: { type: String, required: true, match: /^[a-zA-Z\s]+$/ },
    Price: { type: Number, required: true },
    Year: { type: Number, required: true, min: 1980, max: 2024 },
    Brand: { type: String, required: true }
});

module.exports = mongoose.model('Car', carSchema);
