const assert = require('assert');
const mongoose = require('mongoose');
const Author = require('../models/author');

//Describe our tests
describe('Nesting Records', function()
{
  beforeEach(function(done)
  {
    mongoose.connection.collections.authors.drop(function()
    {
      done();
    });
  });


  //Create tests
  it('Creates an author with sub-documents', function(done)
  {
    var pat = new Author(
    {
          name: 'Patrick Rothfuss',
          books: [{title: 'Name of the Wind', pages: 400}]
    });

    pat.save().then(function()
    {
      Author.findOne({name: 'Patrick Rothfuss'}).then(function(record)
      {
        assert(records.books.length === 1)
        done();
      });

    });

  });

  it('Adds a book to an author', function(done)
  {
    var pat = new Author(
    {
          name: 'Patrick Rothfuss',
          books: [{title: 'Name of the Wind', pages: 400}]
    });

    pat.save().then(function()
    {
        Author.findOne({name: 'Patrick Rothfuss'}).then(function(record)
        {
          //Add books to Book
          record.books.push({title: "Wise Man's Fear", pages: 500});
          record.save().then(function()
          {
            Author.findOne({name: 'Patrick Rothfuss'}).then(function(result)
            {
              assert(result.books.length === 2);
              done();
            });
          });
        });
    });

  });


});
