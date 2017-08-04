var greet = require('./greet1')
greet()

var greet2 = require('./greet2').greet
greet2()

var greet3 = require('./greet3')
greet3.greet()

//this line changes the next require to the new changed greeting
//reason is this require caches required modules
//the next require is then passed by refrence 
greet3.greeting = "new hello world 3"

var greet3b = require('./greet3')
greet3b.greet()

var greet5 = require('./greet5').greet
greet5()

//no need for ./ for native core js file
var util = require('util')

var name = "yihan"
var greetname = util.format('hello, %s', name)
util.log(greetname)
