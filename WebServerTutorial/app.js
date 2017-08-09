//web server creater
//tutorial #59

var http = require('http')
var fs = require('fs')
//event listener object for serverside
/*http.createServer(function(req, res){

    //specify how to read the content
    res.writeHead(200, {'Content-Type':'text/html'})
    var html = fs.readFileSync(__dirname+'/index.htm', 'utf8')

    var message = 'hello world string buffer'
    html =html.replace('{message}',message)

    res.end(html)
    //res.end('hello web world\n')
    
}).listen(1337, '127.0.0.1')
//listening on port 1337 and localhost
*/
//tutorial 61
/*
http.createServer(function(req, res){

    //piping out in stream to the web site
    res.writeHead(200, {'Content-Type': 'text/html'})
    fs.createReadStream(__dirname+'/index.htm').pipe(res)

    //placeholder handler


}).listen(1337, '127.0.0.1')*/

//tutorial 63 routing data from a different place when asked for content
http.createServer(function(req, res){

    if(req.url ==='/'){
        fs.createReadStream(__dirname + '/index.htm').pipe(res)
    }

    //piping out in stream to the web site
    else if(req.url === '/json'){
        res.writeHead(200, {'Content-Type': 'application/json'})

        var nameObj = {
            firstName : 'yi',
            lastName : 'han'
        }

        res.end(JSON.stringify(nameObj))
    }
    else {
        res.writeHead(404)
        res.end()
    }

    //semver.org
    //major minor patch changes semantics
    //tutorial 67

    //placeholder handler


}).listen(1337, '127.0.0.1')