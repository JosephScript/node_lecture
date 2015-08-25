var http = require('http');
var greetings = require('./greetings');

http.createServer(function(req, res){
    res.writeHead(200);
    res.write(greetings[0]()
        + ' ' + greetings[1]() + '\n');
    res.end();
}).listen(3000);