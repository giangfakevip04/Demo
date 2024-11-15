// app.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const carRoutes = require('./routes/carRoutes');

const app = express();


mongoose.connect('mongodb+srv://giangtvph38936:admin123@cluster0.a4j5d.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 30000, // Tăng lên 30 giây
    socketTimeoutMS: 45000, // Thêm socket timeout
}).then(() => console.log('Đã kết nối thành công với MongoDB'))
    .catch(err => console.error('Lỗi kết nối MongoDB:', err));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Phục vụ file tĩnh từ thư mục 'public'
app.use(express.static('public'));

// Route cho trang chính (GET /)
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.use('/api', carRoutes);

const PORT = 3001; // Hoặc bất kỳ cổng nào khác mà bạn muốn
app.listen(PORT, () => {
    console.log(`Server đang chạy tại http://localhost:${PORT}`);
});
