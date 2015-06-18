var express = require('express'),
	app = express(),
	bodyParser = require('body-parser'),
	methodOverride = require('method-override'),
	logger = require('morgan'),
	mongoose = require('mongoose'),
	port = process.env.PORT || 3030;

app.use(express.static(__dirname + '/public')); 				
app.use('/bower_components',  express.static(__dirname + '/bower_components'));
app.use(logger('dev')); 										
app.use(bodyParser.urlencoded({'extended':'true'})); 			
app.use(bodyParser.json()); 									
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 
app.use(methodOverride());


require('./server/routes/routes')(app);

app.listen(port, function() {
	console.log('Listening on port ' + port);
});


