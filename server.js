'use strict';

//https
var fs = require('fs');
var https = require('https');
var path = require('path');
var cors = require('cors');
//https

var express = require('express'),
  app = express(),
  port = process.env.PORT || 8443,
  mongoose = require('mongoose'),
  Task = require('./api/models/alextoopApiModel'), //created model loading here
  bodyParser = require('body-parser');
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/alextoopApi'); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());


var routes = require('./api/routes/alextoopApiRoutes'); //importing route
routes(app); //register the route



// app.listen(port);

// app.use(function(req, res) {
//     res.status(404).send({url: req.originalUrl + ' not found. Navigate to /content'})
//   });

// console.log('alextoop com\'s RESTful API server started on: ' + port);

//https
var certsPath = path.join('/etc/letsencrypt/live/www.alextoop.com/');
var caCertsPath = path.join('/etc/letsencrypt/live/www.alextoop.com/');
var options = {
    key: fs.readFileSync(path.join(certsPath, 'privkey.pem')),
    cert: fs.readFileSync(path.join(caCertsPath, 'fullchain.pem'))
};
var server = https.createServer(options);
server.on('request', app);
server.listen(port);
//https