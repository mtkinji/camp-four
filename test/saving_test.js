const assert = require('assert');
const User = require('../models/user');

describe('Save a file to MongoDB Atlas', function() {
  //create tests
  it('saves a record to the database', function(done) {
    var userTest = new User({
      fname: 'Testy',
      lname: 'Testerson',
      email: 'test@test.com'
    });

    userTest.save().then(function(){
      assert(userTest.isNew === false);
      done();
    });

  })

});