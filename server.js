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


var routes = require('./api/routes/alextoopApiRoutes'); //importing route
routes(app); //register the route


app.listen(port);

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found. Navigate to /content'})
  });

console.log('alextoop com\'s RESTful API server started on: ' + port);