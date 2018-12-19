const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const snackSchema = new Schema({
  title:        { type: String, required: true },
  description:  { type: String },
  fileType:     { type: String },
  tags:         { type: Array},
},
{ timestamps: { createdAt: 'created_at' } }
);

const userSchema = new Schema({
  fname:    { type: String, required: true },
  lname:    { type: String, required: true },
  email:    { type: String, required: true, unique: true },
},
{ timestamps: { createdAt: 'created_at' } }
);

const User = mongoose.model('User', userSchema);

// Hard coded user creation
// var createdUser = new User({
//   fname: 'Andy',
//   lname: 'Watanabe',
//   email: Math.random(),
//   }
// });

// createdUser.save(function (err, createdUser) {
//   if (err) return console.error(err);
//   console.log(createdUser);
// });

module.exports = User;