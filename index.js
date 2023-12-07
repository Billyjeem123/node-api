const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const db_server = require('./config/index');
const userRoutes = require('./routes/user/userRoute');


const baseApiPath = '/api/v0.1/users';

// Mount userRoutes with the modified base URL
app.use(`${baseApiPath}`, userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
  console.log(`Server is running on port ${PORT}`);
});
