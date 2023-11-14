const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

// Connect to MongoDB (make sure MongoDB is installed and running)
mongoose.connect('mongodb://localhost:27017/questdb', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

// Require routes
const adminRoutes = require('./routes/admin');
const userRoutes = require('./routes/user');

// Use routes
app.use('/admin', adminRoutes);
app.use('/', userRoutes);

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
