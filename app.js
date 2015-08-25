var http = require('http');
var greetings = require('./greetings');

http.createServer(function(req, res){
    res.writeHead(200);
    res.write(greetings.sayHello()
        + ' ' + greetings.sayGoodbye() + '\n');
    res.end();
}).listen(process.env.PORT || 3000);