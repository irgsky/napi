var heroModel = require('../models/heroModel');

function addHero(req, res) {
	

	res.render('addHero', {
		'title': 'Add new hero'
	});
}

function saveHero(req, res) {
	var formidable = require("formidable"),
		form = new formidable.IncomingForm();

	form.parse(req, function(errors, fields, files) {
		console.log("sddsd");
		console.log("parse done: " + fields);

		// for (var i in files) {
		// 	console.log(i + ": " + files[i]);			
		// }
	});

	console.log(req.body.name);
	res.contentType('json');
	res.send({ some: JSON.stringify({response:'json'}) });

//	res.redirect('/add_hero');
//	res.json({status: 'ok' });
}

function getListOfHeroes(req, res) {
	var	Hero = heroModel.model;

	var u = new Hero();

	u.name = 'Foo';
	u.save(function() {
	    console.log('Saved.');
	});

	res.render('heroesList', {
		'title': 'here is the list of heroes'
	});
}


exports.addHero = addHero;
exports.saveHero = saveHero;
exports.heroesList = getListOfHeroes;