'use strict'

var express = require('express');
var bodyParser = require('body-parser');
//var request = require('request');

var apiToken = 'kwb0DSut2HaZrht9N+MlSRE3flPA';
var applicationId = '3F49459A-AFAB-41B7-93C3-ADB5408B6627';
//--header 'Content-Type: application/json' --header 'Accept: application/json'
//--header 'apiToken: kwb0DSut2HaZrht9N+MlSRE3flPA'

var postBodySchedule = {
  "applicationId": applicationId,
  "description": "string",
  "emailList": [ "chadlou@yahoo.com" ],
  "length": 120,
  "meetingType": 2,
  "recordMeeting": true,
  "startTime": 1485580976798,
  "subject": "test"
}

var postBodyJoin = {
  "email": "chadlou@yahoo.com",
  "meetingId": "546803461",
  "name": "chad2"
}

var mockStartJson = {
  "returnCode": 0,
  "data": {
    "referer": "sandbox.liveh2h.com",
    "serverURL": "https://meetstage-us.liveh2h.com",
    "origin": "TME",
    "meetingUri": "JTdCJTIydXNlcl9pZCUyMiUzQSUyMmt3YjBEU3V0MkhhWnJodDlOJTJCTWxTUkUzZmxQQSUyMiUyQyUyMm1lZXRpbmdfaWQlMjIlM0ElMjI1NDY4MDM0NjElMjIlMkMlMjJvcmlnaW4lMjIlM0ElMjJUTUUlMjIlMkMlMjJ1c2VyX2Rpc3BsYXlfbmFtZSUyMiUzQSUyMmNoYWQyJTIyJTdE",
    "meetingId": "546803461",
    "meetingSn": "NlpzaWM5WUl6VCtjeURoRkc1N1AxZz09",
    "location": "UW",
    "meetingURL": "https://meetstage-us.liveh2h.com/launcher.html?p=JTdCJTIydXNlcl9pZCUyMiUzQSUyMmt3YjBEU3V0MkhhWnJodDlOJTJCTWxTUkUzZmxQQSUyMiUyQyUyMm1lZXRpbmdfaWQlMjIlM0ElMjI1NDY4MDM0NjElMjIlMkMlMjJvcmlnaW4lMjIlM0ElMjJUTUUlMjIlMkMlMjJ1c2VyX2Rpc3BsYXlfbmFtZSUyMiUzQSUyMmNoYWQyJTIyJTdE&b=true"
  },
  "message": "Request is completed successfully"
}

var apiEndPoint = 'https://sandbox.liveh2h.com/tutormeetweb/rest/v1/meetings/schedule';

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

app.get('/start', function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(mockStartJson);
});

/*
app.get('/start', function(req, res) {
  postBodySchedule.startTime = new Date().getTime() + 10000;
  console.log('schedule: ', postBodySchedule);
  var requestJson = {
      url: apiEndPoint,
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'apiToken': apiToken
      },
      form: postBodySchedule
  };
  console.log('requestJson', requestJson);
  request(requestJson, function(err, response) {
      if(err) {
        return res.send(getError(err));
      }
      var responseJson = JSON.parse(response.body);
      console.log('res1', responseJson);
      var meetingId = responseJson.data.meetingId;
      postBodyJoin.meetingId = meetingId;
      request({
          url: apiEndPoint,
          method: 'POST',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'apiToken': apiToken
          },
          form: postBodyJoin
      }, function(err, response2) {
          if(err) {
            return res.send(getError(err));
          }
          console.log('res2', response2);
          var responseJson2 = JSON.parse(response2.body);
          res.send(responseJson2);
      });
  });
});
*/

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
