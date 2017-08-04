var a = 1;

var b = 2;

var c  = a + b;

console.log(c)


function greet(){

    console.log("hi")

}

//functions are first class and can be called or passed
//function can be set to an variable
function logGreet(fn){
    fn()
}

greet()
logGreet(greet)

//variable expressed as a function 
var greetVariableFunc = function(){
    console.log("hi im a variable");
}

greetVariableFunc();

logGreet(greetVariableFunc)
