const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const snackSchema = new Schema({
  title:    { type: String, required: true },
  comment:  { type: String },
  tags:     { type: Array},
},
{ timestamps: { createdAt: 'created_at' } }
);

const userSchema = new Schema({
  fname:    { type: String, required: true },
  lname:    { type: String, required: true },
  email:    { type: String, required: true, unique: true },
  snacks:   [snackSchema]
},
{ timestamps: { createdAt: 'created_at' } }
);

const User = mongoose.model('User', userSchema);

module.exports = User;