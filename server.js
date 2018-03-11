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

const urlConfig = 'http://livemediacontrol.com/wp-json/wp/v2/steembots/60';

var permlinkFix = new Date().toISOString().replace(/[^a-zA-Z0-9]+/g, '').toLowerCase();





// write an index file to be served when they access steemblast.com
app.get('/', (req, res, next) => {
    res.send('public/index.html')
    });
	
app.get('/tmd', (req, res) => {
     axios.get(url)
    .then((response) => {
        const alldata= [];
        // res.send(response.data.results.map((data) => {data.title}))
        response.data.results.map((data, index) => {
            const obj= {
                id: data.id,
                slug: data.slug
            }
            alldata.push(obj)   
        });
        res.send(alldata);
    });
 });



app.listen(app.get('port'), function() {
  console.log("steembot is live on:" + app.get('port'))
})
