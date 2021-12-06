var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
    fs.readFile('index.html',function(err,de){
         res.writeHead(200, {'Content-Type': 'text/html'});
         res.write(de);
         return res.end();
    });
}).listen(8080);
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('erreur de port');
}).listen(8082);