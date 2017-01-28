'use strict'

var express = require('express');
var app = express();

app.listen(3000, 'localhost', function() {
    console.log('Express is listening on port 3000')
});

var auctions = require('./mock/auctions');
console.log(auctions);
app.get('/auctions', function(req, res)  {
    res.send(auctions);
})

