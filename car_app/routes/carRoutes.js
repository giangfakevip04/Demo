// routes/carRoutes.js
const express = require('express');
const router = express.Router();
const Car = require('../models/Car');

// API để tạo một chiếc xe mới
router.post('/cars', async (req, res) => {
    try {
        const { MaXe, Name, Price, Year, Brand } = req.body;
        const newCar = new Car({ MaXe, Name, Price, Year, Brand });
        await newCar.save();
        res.status(201).json({ message: 'Ô tô đã được tạo thành công', car: newCar });
    } catch (error) {
        res.status(400).json({ message: 'Lỗi khi tạo Ô tô', error: error.message });
    }
});

// API để lấy danh sách các xe ô tô
router.get('/cars', async (req, res) => {
    try {
        const cars = await Car.find({})
        res.json(cars);
    } catch (error) {
        res.status(500).json({ message: 'Lỗi khi lấy danh sách Ô tô', error: error.message });
    }
});

module.exports = router;
