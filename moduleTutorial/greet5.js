var greeting = "hello world 5"

function greet(){
    console.log(greeting)

}

//revealing module pattern
//expose only the properties and methods you want via an returned object
module.exports = {

    greet: greet
}