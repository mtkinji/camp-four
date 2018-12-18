const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  fname:    { type: String, required: true },
  lname:    { type: String, required: true },
  email:    { type: String, required: true, unique: true },
},
{ timestamps: { createdAt: 'created_at' } }
);

const User = mongoose.model('User', userSchema);

module.exports = User;