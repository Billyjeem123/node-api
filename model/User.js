const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  pword: { type: String, required: true },
  image: { type: String },
  postCount: { type: Number, default:0 },
  isBlocked: { type: Boolean, default:false },
  isAdmin: { type: Boolean, default:false },
  user_role: { type: String, default:'user' },
  image: { type: String }

}, {
  timestamps: true
});

const users = mongoose.model('tbluser', userSchema); //Convert table to plural just like laravel

module.exports = users;