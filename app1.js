var greeting = require('./greet/spanish.js')
var greetingEnglish = require('./greet.js')
var greetingjson = require('./greeting.json')
greeting()
greetingEnglish()


//read json
console.log(greetingjson.en)
//object literals
var person = {

    firstname: 'yi',
    lastname: 'han',
    greetingPerson: function(){
        console.log('hello'+this.firstname+this.lastname)
    }

}
//call object declared functions
person.greetingPerson();

console.log("firstname: "+person['firstname'])

//js inheritance methods
//function constructors
function personfunc(first, last){

    this.firstname =first;
    this.lastname= last;
}

personfunc.prototype.greet = function(){
    console.log('helllllo'+this.firstname+this.lastname)
}

var yi = new personfunc('yi', 'han') 

console.log(yi.firstname)

yi.greet()

//passing by value vs passing by reference 

//by value
function change(b){
    b=2;
}

var a = 1

console.log(change(a))
console.log("because we are passing by value only, the memory location of b was changed and a remain to be 1")

//by reference 

function changeObj(d){

    d.prop1 = function(){console.log("hi")}

    d.prop2 = {}


}


var c = {}

console.log(changeObj(c))
console.log("because we are passing by reference, we override the property")

//scope, immediately invoked function
var first = "yi"
/*
(function(lastname){
    var first = 'alice'
    console.log(first)
    //to immediately invoke the function, add prentices at the end of function declarelation
    //the invoked function will not effect outside variables of the same name
}("han"))*/

console.log(first)