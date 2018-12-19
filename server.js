const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/schema');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Connected to MongoDB Atlas")
});

const dbURL = mongoose.connect('mongodb+srv://user123:user123@camp-four-ikqzz.mongodb.net/camp-four?retryWrites=true',{ useNewUrlParser: true });

// app.use(bodyParser.json());

// // create application/json parser
// var jsonParser = bodyParser.json()
 
// // create application/x-www-form-urlencoded parser
// var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/', (req, res) => res.send('Hello World!'));
app.use('/index', express.static('public'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));