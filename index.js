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
        

/*
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
      
   
                                                const http = require('http');
                                                let options = {
                                                  host: 'dweet.io',
                                                  path: '/get/latest/dweet/for/braamwatts'
                                                };
                                                callback = function(response) {
                                                  let str = '';
                                                  response.on('data', function (chunk) {
                                                  let str += chunk;
                                                  });
                                                  response.on('end', function () {

                                                let myJSON = JSON.parse(str);
                                                // console.log(myJSON);
                                                  let tweedeobj = myJSON["with"];
                                                  //console.log(tweedeobj[0]["content"]["totalkrag"]);
                                                  let speech = tweedeobj[0]["content"]["totalkrag"].toString();
                                                console.log(speech);
                                                });
                                                }
                                                http.request(options, callback).end();
             
            */
             
             

         } else if (speech == "lancevid1"){
             
                     speech = "lancevid1";
                      // OK lets see if this puppy works
             
                                                     const http = require('http');

                                        const host = 'api.worldweatheronline.com';
                                        const wwoApiKey = '';

                                        exports.weatherWebhook = (req, res) => {
                                          // Get the city and date from the request
                                          //let city = req.body.result.parameters['geo-city']; // city is a required param
                                            
                                            let city = 'Auckland'; // city is a required param
                                            
                                          // Get the date for the weather forecast (if present)
                                          let date = '';
                                          if (req.body.result.parameters['date']) {
                                            date = req.body.result.parameters['date'];
                                            console.log('Date: ' + date);
                                          }

                                          // Call the weather API
                                          callWeatherApi(city, date).then((output) => {
                                            // Return the results of the weather API to API.AI
                                            res.setHeader('Content-Type', 'application/json');
                                            res.send(JSON.stringify({ 'speech': output, 'displayText': output }));
                                          }).catch((error) => {
                                            // If there is an error let the user know
                                            res.setHeader('Content-Type', 'application/json');
                                            res.send(JSON.stringify({ 'speech': error, 'displayText': error }));
                                          });
                                        };

                                        function callWeatherApi (city, date) {
                                          return new Promise((resolve, reject) => {
                                            // Create the path for the HTTP request to get the weather
                                            let path = '/premium/v1/weather.ashx?format=json&num_of_days=1' +
                                              '&q=' + encodeURIComponent(city) + '&key=' + wwoApiKey + '&date=' + date;
                                            console.log('API Request: ' + host + path);

                                            // Make the HTTP request to get the weather
                                            http.get({host: host, path: path}, (res) => {
                                              let body = ''; // var to store the response chunks
                                              res.on('data', (d) => { body += d; }); // store each response chunk
                                              res.on('end', () => {
                                                // After all the data has been received parse the JSON for desired data
                                                let response = JSON.parse(body);
                                                let forecast = response['data']['weather'][0];
                                                let location = response['data']['request'][0];
                                                let conditions = response['data']['current_condition'][0];
                                                let currentConditions = conditions['weatherDesc'][0]['value'];
                                                 let speech = "wenner";
                                                // Create response
                                                let output = `Current conditions in the ${location['type']} 
                                                ${location['query']} are ${currentConditions} with a projected high of
                                                ${forecast['maxtempC']}°C or ${forecast['maxtempF']}°F and a low of 
                                                ${forecast['mintempC']}°C or ${forecast['mintempF']}°F on 
                                                ${forecast['date']}.`;

                                                // Resolve the promise with the output text
                                                console.log(output);
                                                resolve(output);
                                              });
                                              res.on('error', (error) => {
                                                reject(error);
                                              });
                                            });
                                          });
                                        }
                           
             
             
             }
    
    // so stuff below id after we are through the evaluation of if else etc
    
    
    
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
