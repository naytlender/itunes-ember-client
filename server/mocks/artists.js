/*jshint node:true*/
module.exports = function(app) {
  var express = require('express');
  var artistsRouter = express.Router();

  artistsRouter.get('/', function(req, res) {
    res.send({
      'artists': []
    });
  });

  artistsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  artistsRouter.get('/:id', function(req, res) {
    res.send({
      'artists': {
        id: req.params.id
      }
    });
  });

  artistsRouter.put('/:id', function(req, res) {
    res.send({
      'artists': {
        id: req.params.id
      }
    });
  });

  artistsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  //app.use('/api/artists', require('body-parser').json());
  app.use('/api/artists', artistsRouter);
};
