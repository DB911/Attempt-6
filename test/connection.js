const mongoose = require('mongoose');

//E6 Promises
mongoose.Promise = global.Promise;

//Connect to the db before tests tdRU3CGZriJWmfNGfloH87lVuv0
before(function(done)
{
  //connect to mongodb
  mongoose.connect('mongodb://localhost/testaroo');

  mongoose.connection.once('open', function()
  {
    console.log('Connection has been made, now make Fireworks...');
    done();
  }).on('error', function(error)
    {
      console.log('Connection error:', error);
    });
});

//Drop the characters collection before each test
beforeEach(function(done)
{
  //Drop the collection
  mongoose.connection.collections.mariochars.drop(function()
  {
    done();
  });
});
