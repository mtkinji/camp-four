const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/schema');

const app = express();
const port = 3000;

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Connected to MongoDB Atlas")
});

const dbURL = mongoose.connect('mongodb+srv://user123:user123@camp-four-ikqzz.mongodb.net/camp-four?retryWrites=true',{ useNewUrlParser: true });

// Hard coded user creation
var createdUser = new User({
  fname: 'Andy',
  lname: 'Watanabe',
  email: Math.random(),
  snacks: {
    title: 'This is a title',
    comment: 'This is a comment',
    tags: ['tag 1','tag 2','tag 3','tag 4']
  }
});

createdUser.save(function (err, createdUser) {
  if (err) return console.error(err);
  console.log(createdUser);
});

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));