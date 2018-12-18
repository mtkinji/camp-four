const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Connected to MongoDB Atlas")
});

const dbURL = mongoose.connect('mongodb+srv://user123:user123@camp-four-ikqzz.mongodb.net/camp-four?retryWrites=true',{ useNewUrlParser: true });

// Separating userSchema from snackSchema follows a "normalized" or referential data model. However, I want to refactor this into a subdocument model... eventually
// SCHEMAS

const snackSchema = new mongoose.Schema({
  // owner:    { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  title:    { type: String, required: true },
  comment:  { type: String },
  tags:     { type: Array},
},
{ timestamps: { createdAt: 'created_at' } }
);
const userSchema = new mongoose.Schema({
  fname:    { type: String, required: true },
  lname:    { type: String, required: true },
  email:    { type: String, required: true, unique: true },
},
{ timestamps: { createdAt: 'created_at' } }
);

// METHODS
userSchema.methods.speak = function () {
  var greeting = this.fname
    ? "My name is " + this.fname + " " + this.lname
    : "I don't have a name";
  console.log(greeting);
}

snackSchema.methods.speak = function () {
  var showSnack = this.title
    ? "This Snack was added: " + this.title + " " + this.comment + " " + this.tags
    : "I don't have a name";
  console.log(showSnack);
}

// MODELS
const User = mongoose.model('User', userSchema);
const Snack = mongoose.model('Snack', snackSchema);

// Hard coded user creation
var createdUser = new User({
  fname: 'Blaire', lname: 'Whitaker', email: 'bwhita@gmail.com'});
console.log(createdUser);

createdUser.save(function (err, createdUser) {
  if (err) return console.error(err);
  createdUser.speak();
});

// Hard coded snack creation
var createdSnack = new Snack({
  title: 'This is a UX Snack, it\'s a morsel of research like an audio interview, or a quote from a user.', comment: 'This is an example of what a constructed Snack might look like', tags: ['tag 1', 'tag 2', 'tag 3'] });
console.log(createdSnack);

createdSnack.save(function (err, createdSnack) {
  if (err) return console.error(err);
  createdSnack.speak();
});

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));