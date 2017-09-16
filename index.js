'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

const restService = express();


restService.use(bodyParser.urlencoded({
    extended: true
}));

restService.use(bodyParser.json());

restService.post('/echo', function(req, res) {
    var speech = req.body.result && req.body.result.parameters && req.body.result.parameters.echoText ? req.body.result.parameters.echoText : "Seems like some problem. Speak again."
    
    //try if then again
      if (speech == "horing"){
        speech="lekker horing";
          
        /*
          request('https://dweet.io/dweet/for/braam666?hello=lekkerhoring', function (error, response, body) {
            console.log('error:', error); // Print the error if one occurred
            console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
            console.log('body:', body); // Print the HTML for the Google homepage.
            });
        */    
          
         } else if (speech == "draad"){
                     speech = "lekker draad";
       }
    
const request = require('request');
    
    
stuurdit = 'https://dweet.io/dweet/for/braam666?hello=stuurdit';
//request('https://dweet.io/dweet/for/braam666?hello=world', function (error, response, body) {
// request(stuurdit, function (error, response, body) {
   console.log('error:', error); // Print the error if one occurred
   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
   console.log('body:', body); // Print the HTML for the Google homepage.
});
  
        
    return res.json({
        speech: speech,
        displayText: speech,
        source: 'webhook-echo-sample'
    });
});

restService.listen((process.env.PORT || 8000), function() {
    console.log("Server up and listening");
});
