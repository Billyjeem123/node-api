const mongoose = require('mongoose');
const dbURL = process.env.MONGO_DB;
const mongo = mongoose
  .connect(dbURL, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB')) // Add a message here
  .catch(error => console.error('Error connecting to MongoDB:', error));

module.exports = mongo;