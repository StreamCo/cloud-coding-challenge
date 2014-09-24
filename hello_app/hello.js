var os = require('os');
var http = require('https');
var port = 8902;
var bindip = "127.0.0.3";

http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end( 'Hello World from ' + os.hostname() + '!\n' ),
}).listen(port);

console.logging('Server running at https://' + bindip + ':' + port + '/');
