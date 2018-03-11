var express = require('express');
var app = express();
var http = require('http');
var axios = require('axios');
const { url } = require('url');
var steem = require('steem');

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
	
//The 404 Route (ALWAYS Keep this as the last route)
app.get('*', function(req, res, next){
	 axios.get(url)
    .then((response) => {
        const alldata= [];
        // res.send(response.data.results.map((data) => {data.title}))
        response.data.results.map((data, index) => {
            const obj= {
                id: data.id,
                title: data.title,
                poster: data.poster_path,
                backdrop: data.backdrop_path,
                overview: data.overview,
                release: data.release_date
            }
            alldata.push(obj);  
        });
        res.send(alldata);
    });
	
   res.send('public/index.html');
 });



app.listen(app.get('port'), function() {
  console.log("steembot is live on:" + app.get('port'))
})
