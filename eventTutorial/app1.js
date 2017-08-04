//nodejs tutorial 36, inherit from the event emiter

var EventEmitter = require('events')
var util = require('util')

//this part is for tutorial 41, classes and extend emitters
class Greetr extends EventEmitter{
    constructor(){
        //super inherites all eventemitter functions
        super()
        this.greeting = 'hello world class constructor '
    }
    greet(data){
        console.log(`${this.greeting}: ${data}`)
        this.emit('greet', data)
    }
}

function GreetrC (){
    //super constructor
    EventEmitter.call(this)
    this.greeting = "hello world function constructor"
}


//greetr object now inherits the eventemiter functions
util.inherits(Greetr,EventEmitter)

Greetr.prototype.greet = function(data){
    console.log(this.greeting + ' '+ data)
    this.emit('greet', data)
}

var greetr1 = new Greetr()

greetr1.on('greet', function(data){

    console.log('someone greeted: '+ data)
})

greetr1.greet("yi")
//tutorial 37
//temperate literal for string concat using ` and ${}

var name = 'yi han'
var greet = 'hello '

var greetAll = `hello ${ name} i am the computer` 
console.log(greetAll)

//tutorial 38 
//.call and .apply differnces
var person = {
    name: 'yi han',
    job: 'monkey trainer',
    greetme: function(job){
        console.log(`hello ${name} the ${this.job}`)
        console.log(job)
    }
}

//call takes comma separated params, apply takes an array of params
jobName= "dragon slayer"
person.greetme();
person.greetme.call({name: 'alice', job: jobName}, jobName)
person.greetme.apply({name: 'alice',job: jobName}, [jobName])