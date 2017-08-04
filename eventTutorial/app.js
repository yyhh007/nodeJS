//object property and methods

var obj = {

    greet: "hello"
}

console.log(obj.greet)
console.log(obj['greet'])

//set prop to string, then set obj to that string
var prop = 'greet'
console.log(obj[prop])

//functions and arrays

var arr = []

arr.push(function(){console.log("hello1")}, function(){console.log("hello2")} , function(){console.log("hello3")})

arr.forEach(function(element) {
    element()
}, this);


//self built event handler runner
var Emitter = require('./emitter')
var eventConfig = require('./config').events
var emtr = new Emitter()

emtr.on(eventConfig.HELLO, function(){
    console.log("hello heard")
})

emtr.on(eventConfig.GREETING, function(){
    console.log("greeting heard")
})

//console.log("hello")
//emiting the type of events called here 
emtr.emit(eventConfig.HELLO)
emtr.emit(eventConfig.GREETING)

