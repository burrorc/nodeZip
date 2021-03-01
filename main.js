const dt = require('./date')
//const cities = require('cities');
const lookup = require('./lookup')
const url = require('url');
const http = require('http');
const app = http.createServer((req,res)=>{
    var q = url.parse(req.url, true).query
    var zipCode = q.zip

    res.writeHead(200, {"Content-Type": "text/html"});
    res.write(`<h1>This zip code is home to `+ lookup.city(zipCode) + ", " + lookup.state(zipCode)+`</h1>`);
    res.write("Your query was completed at " + dt.dateTime());
    res.write("here"+zipCode)
    res.end();
})

app.listen(3000)