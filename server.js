var express = require('express');
var app = express();
var http = require('http');
const { url } = require('url');
var steem = require('steem');
//const axios = require('axios');
app.set('port', (process.env.PORT || 2222)) // Define Port
app.use(express.static(__dirname + '/public')) // Define static public folder

var steembot_id = process.env.STREEMBOT_ID;
var voter = process.env.STEEMVOTER;
var wif = process.env.STEEMVOTERWIF;


var permlinkFix = new Date().toISOString().replace(/[^a-zA-Z0-9]+/g, '').toLowerCase();

const url = 'https://livemediacontrol.com/wp-json/wp/v2/steembots/60';




// write an index file to be served when they access steemblast.com
app.get('/', (req, res, next) => {
    res.send('public/index.html')
    });
	



app.listen(app.get('port'), function() {
  console.log("steembot is live on:" + app.get('port'))
});
