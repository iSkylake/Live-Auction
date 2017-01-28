'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser());

app.use(express.static(__dirname + '/public'));

app.listen(3000, 'localhost', function() {
    console.log('Express is listening on port 3000')
});

var auctions = require('./mock/auctions');

app.get('/auctions', function(req, res)  {
  res.setHeader('Content-Type', 'application/json');
  res.send(auctions);
});

app.get('/rooms', function(req, res)  {
  res.setHeader('Content-Type', 'application/json');
  res.send(auctions);
});

app.get('/auctions/:id', function(req, res)  {
    var id = req.params.id;
    res.setHeader('Content-Type', 'application/json');
    var result = id < auctions.length ?
      auctions[id] : getError('invalid auction id');
    res.send(result);
});

function getError(error) {
  return {error: error};
}
