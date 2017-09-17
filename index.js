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
      if (speech == "amandavid1"){
        speech="amandavid1";
          
        /*
          request('https://dweet.io/dweet/for/braam666?hello=lekkerhoring', function (error, response, body) {
            console.log('error:', error); // Print the error if one occurred
            console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
            console.log('body:', body); // Print the HTML for the Google homepage.
            });
        */    
          
         } else if (speech == "braampower"){
             speech = "well at least I got to before const req";
             const request = require('request');
             speech = "well at least I got to after const req ";
             // get reading from dweet
        
                 request('https://dweet.io/get/latest/dweet/for/braamwatts', function (error, response, body) {
                     speech = "well at least I got into request loop "; 
                     var myJSON = JSON.parse(body);
                      // console.log(myJSON);
                     speech = "well at least I got into request loop line 1 "; 
                      var tweedeobj = myJSON["with"];
                      speech = "well at least I got into request loop line 2 "; 
                      //console.log(tweedeobj[0]["content"]["totalkrag"]);
                      speech = tweedeobj[0]["content"]["totalkrag"].toString();
                      console.log(speech);
                  });
             

         } else if (speech == "lancevid1"){
                     speech = "lancevid1";
       }
    
const request = require('request');
    
    
var stuurdit = 'https://dweet.io/dweet/for/braam666?hello='.concat(speech);
//request('https://dweet.io/dweet/for/braam666?hello=world', function (error, response, body) {

request(stuurdit, function (error, response, body) {
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
