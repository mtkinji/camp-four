const assert = require('assert');
const User = require('../models/user');

describe('finding records', function() {
  //create tests
  
  beforeEach(function(done) {
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
  
  it('finds one record in the db', function(done) {
    User.findOne({ fname: 'Blaire' }).then(function(result) {
      assert(result.name === 'Blaire');
      done();
    })
  })

});