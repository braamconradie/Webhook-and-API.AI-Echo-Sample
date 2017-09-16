'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const restService = express();

restService.use(bodyParser.urlencoded({
    extended: true
}));

restService.use(bodyParser.json());

restService.post('/echo', function(req, res) {
    var speech = req.body.result && req.body.result.parameters && req.body.result.parameters.echoText ? req.body.result.parameters.echoText : "Seems like some problem. Speak again."
    if (speech == "horing"){
       speech="lekker horing";
    } else if (speech == "draad"){
        speech = "lekker draad";
    }
    
	/*
    var dweetClient = require("node-dweetio");
    var dweetio = new dweetClient();
    var speech;
    dweetio.get_latest_dweet_for("northvaletotalekrag", function(err, dweet){
    var dweet = dweet[0]; // Dweet is always an array of 1
    speech = dweet.content;
	console.log(speech); // The generated name
	//console.log(dweet.thing); // The generated name
    //console.log(dweet.content); // The content of the dweet
    //console.log(dweet.created); // The create date of the dweet
   */
	
});
    
    
    
    // speech = 'yster';  // braam tries to over ride
    
    //next block is experiment
    
    /*
    var speech = req.body.result && req.body.result.resolvedQuery ? req.body.result.parameters.echoText : "Seems like some problem. Speak again."
    if (speech == "mysword"){
       speech="swaard idee werk!!!";
    } else if (speech == "draad"){
        speech = "lekker draad";
    }
    */
    
    return res.json({
        speech: speech,
        displayText: speech,
        source: 'webhook-echo-sample'
    });
});

restService.post('/slack-test', function(req, res) {

    var slack_message = {
        "text": "Details of JIRA board for Browse and Commerce",
        "attachments": [{
            "title": "JIRA Board",
            "title_link": "http://www.google.com",
            "color": "#36a64f",

            "fields": [{
                "title": "Epic Count",
                "value": "50",
                "short": "false"
            }, {
                "title": "Story Count",
                "value": "40",
                "short": "false"
            }],

            "thumb_url": "https://stiltsoft.com/blog/wp-content/uploads/2016/01/5.jira_.png"
        }, {
            "title": "Story status count",
            "title_link": "http://www.google.com",
            "color": "#f49e42",

            "fields": [{
                "title": "Not started",
                "value": "50",
                "short": "false"
            }, {
                "title": "Development",
                "value": "40",
                "short": "false"
            }, {
                "title": "Development",
                "value": "40",
                "short": "false"
            }, {
                "title": "Development",
                "value": "40",
                "short": "false"
            }]
        }]
    }
    return res.json({
        speech: "speech",
        displayText: "speech",
        source: 'webhook-echo-sample',
        data: {
            "slack": slack_message
        }
    });
});




restService.listen((process.env.PORT || 8000), function() {
    console.log("Server up and listening");
});
