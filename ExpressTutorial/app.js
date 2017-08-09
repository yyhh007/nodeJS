var express = require('express')

var app = express()

//port will be equal to enviorment variable PORT or port 3000
var port = process.env.PORT || 3000;

//tutorial 75 
//use the use keyword to use static folders and give it a name
//future files called by using the name will access that folder to find the static file
app.use('/assets', express.static(__dirname+'/public'))
console.log(__dirname)

//express auto detects the language sent and displays it on the webserver
app.get('/', function(req, res){
    res.send('<html><head><link href=/assets/style.css type=text/css rel=stylesheet /></head><body><h1>helloworldexpress</h1></body></html>')
})


//tutorial 74
//routing different url inputs and match responses to it
//useful in creating own server responses 
//so cool
app.get('/person/:id', function(req, res){
    res.send('<html><head></head><body><h1>person: '+ req.params.id+'</h1></body></html>')
})

app.get('/api', function(req, res){
    res.json({firstname: 'yihaha', lastname: 'han'})
})

//given port 3000 
app.listen(3000)
