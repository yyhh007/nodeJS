//tutorial 39, inherit super variable and functions, not just prototype functions 
var util = require('util');

function Person() {
	this.firstname = 'yi';
	this.lastname = 'han';
}

Person.prototype.greet = function() {
	console.log('Hello ' + this.firstname + ' ' + this.lastname + ' '+this.badgenumber);
}

function Policeman() {
	Person.call(this);
	this.badgenumber = '1234';
}

util.inherits(Policeman, Person);
var officer = new Policeman();
officer.greet();