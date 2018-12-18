const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userSchema = new Schema({
  fname:    { type: String, required: true },
  lname:    { type: String, required: true },
  email:    { type: String, required: true, unique: true },
  snacks:   [snackSchema]
},
{ timestamps: { createdAt: 'created_at' } }
);

const snackSchema = new Schema({
  // this should be "owned" by a user, and perhaps even be a subdocument of the user model.
  title:    { type: String, required: true },
  comment:  { type: String },
  tags:     { type: Array},
},
{ timestamps: { createdAt: 'created_at' } }
);

const User = mongoose.model('User', userSchema);

module.exports = User;