const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

const dbURL = mongoose.connect('mongodb+srv://user123:user123@camp-four-ikqzz.mongodb.net/camp-four?retryWrites=true',{ useNewUrlParser: true });

const userSchema = new mongoose.Schema({
  fname:    { type: String, required: true },
  lname:    { type: String, required: true },
  email:    { type: String, required: true },
  team:     { type: String},
},
{ timestamps: { createdAt: 'created_at' } }
);

const objectiveSchema = new mongoose.Schema({
  objective:    { type: String, required: true },
  type:         { type: String, required: true },
  email:    { type: String, required: true },
  team:     { type: String, required: true},
  created:  { type: Date, default: Date.now }
});

userSchema.methods.speak = function () {
  var greeting = this.fname
    ? "My name is " + this.fname + " " + this.lname
    : "I don't have a name";
  console.log(greeting);
}

const User = mongoose.model('User', userSchema);

var createdUser = new User({
  fname: 'Blaire', lname: 'Whitaker', email: 'bwhita@gmail.com'});
console.log(createdUser);

createdUser.save(function (err, andy) {
  if (err) return console.error(err);
  createdUser.speak();
});

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Connected to MongoDB Atlas")
});