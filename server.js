const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

const dbURL = mongoose.connect('mongodb+srv://user123:user123@camp-four-ikqzz.mongodb.net/test?retryWrites=true',{ useNewUrlParser: true });

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Connected to MongoDB Atlas")
});

var kittySchema = new mongoose.Schema({
  name: String
});

var Kitten = mongoose.model('Kitten', kittySchema);