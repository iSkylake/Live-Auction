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
    res.send(auctions);
})

