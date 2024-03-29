const assert = require('assert');
const mocha = require('mocha');
const MarioChar = require('../models/mariochar');

//Describe tests
describe('Saving Records', function()
{
  //Create tests
  it('Saves a record to the database', function(done)
  {
    var char = new MarioChar(
      {
          name: 'Mario'
      });

    char.save().then(function()
    {
      assert(char.isNew === false);
      done();

    });

  });

});
