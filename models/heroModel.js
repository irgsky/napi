var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var Hero = mongoose.model('Hero', new Schema({
	name: String,
	url: String
}));



exports.model = Hero;