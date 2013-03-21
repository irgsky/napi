
/**
 * Module dependencies.
 */

var express = require('express'),
	http = require('http'),
	path = require('path'),
	// routes
	indexRouter = require('./routes/indexRouter'),
	heroesRouter = require('./routes/heroesRouter'),
	uploadRouter = require('./routes/uploadRouter'),
	// database
	mongoose = require('mongoose'),
	db = mongoose.connect('mongodb://localhost/dota2best');

var app = express();

app.configure(function() {
	app.set('port', process.env.PORT || 3000);
	app.set('views', __dirname + '/views');
	app.set('view engine', 'jade');
	app.use(express.favicon());
	app.use(express.logger('dev'));
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(app.router);
	app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function() {
	app.use(express.errorHandler());
});

app.get('/', indexRouter.index);
app.get('/add_hero', heroesRouter.addHero);
app.post('/save_hero', heroesRouter.saveHero);
app.get('/heroes_list', heroesRouter.heroesList);

// Upload file
app.get('/upload_file', uploadRouter.uploadFile);
app.post('/upload_file_ajax', uploadRouter.uploadFileAjax);


// console.log(app.routes);

http.createServer(app).listen(app.get('port'), function() {
	console.log("Express server listening on port " + app.get('port') + ", " + "http://localhost:3000/");
});
