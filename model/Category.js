const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  cat_name: { type: String, required: true },

});

const users = mongoose.model('tblcategory', categorySchema); //Convert table to plural just like laravel

module.exports = users;