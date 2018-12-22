const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/schema');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Connected to MongoDB Atlas")
});

const dbURL = mongoose.connect('mongodb+srv://user123:user123@camp-four-ikqzz.mongodb.net/camp-four?retryWrites=true',{ useNewUrlParser: true });

//-----------------------------//
//---------- EXPRESS ----------//
//-----------------------------//

app.get('/', (req, res) => res.send('Hello World!'));
app.get('/users', (req, res) => res.send('Users view'));
app.use('/index', express.static('public'));

app.get('/snack', (req, res) => {
  res.sendFile(__dirname + '/public/snack.html')
  res.redirect('/index');
})

app.post('/newsnack', (req, res) => {
  db.collection('snacks').insertOne(req.body, (err, result) => {
    if (err) return console.log(err)

    console.log('saved to database')
    res.redirect('/snack')
  })
})

app.get('/snacklist', (req, res) => {
  db.collection('snacks').find().toArray(function(err, results) {
    console.log(results)
    // send HTML file populated with quotes here
    res.redirect('/');
  })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));