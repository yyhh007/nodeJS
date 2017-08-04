//constructor
function Greetr(){
    this.greeting = "hello world 3"
    this.greet = function(){
        console.log(this.greeting)
    }
}

//this is passing back an object that is created here
//to pass back only the constructor and not the object create, use
//module.exports = Greeter;
module.exports = new Greetr()