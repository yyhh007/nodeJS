var buf = new Buffer('hello buffer') //debault utf8

console.log(buf+'\n')
console.log(buf.toString())
console.log(buf.toJSON())

//can access as array and writen to

//tutorial 48 
//8 bype*8 =64 bits
//int 32 array means only 2x32 buffer, so only store 2 values
var buffer = new ArrayBuffer(8)
var view = new Int32Array(buffer)

view[0]= 5;
view [1] = 10;
view [2] = 32;
//32 is not printed cuz its too big only 2 bytes held
console.log(view)

//tutorial 49 callback
function greetCB(callback){
    var data={
        name: 'YIHAN'
    }
    console.log('log call back')
    callback(data)
}

greetCB(function(data){
    console.log('callback function: '+ data)
})

greetCB(function(data){
    console.log('callback function:'+ data.name)
})

//tutorial 50 files
var fs = require('fs')

var greetFile = fs.readFileSync(__dirname+'/greet.txt','utf8')
console.log(greetFile)

//when running this code, the first read file is syncronous, the second one is not
//therefore the done is printed before 2nd file is read
//error first callback, function always pass back a error code first, null if none exists
var greetFile2 = fs.readFile(__dirname+'/greet.txt', 'utf8', function(err,data){
    console.log(data)
    console.log("error is "+ err)
})
//when reading this, the file is put on a heap, which will get large in real world
//this is bad coding 
console.log("done")

//tutorial 51 streaming
//to improve reading files, use streaming, which uses buffers and get file from server
//this is the basic background solution

//highWaterMark is max chunk per stream
var readable = fs.createReadStream(__dirname+'/greetLong.txt',{encoding:'utf8', highWaterMark: 16*1024})

var writable = fs.createWriteStream(__dirname+'/greetLongCopy.txt')

//stream uses event emitter, thus we an use the on function to move greetLong content to greetLongCopy
//since data is being streamed in chunks, it will ensure multiple user less waiting around and faster web resond time
readable.on('data', function(chunk){
    console.log(chunk)
    writable.write(chunk)
})



