var http = require('http');


http.createServer(function (req, res) {
  res.write('Hello FROM GKE!'); 
  res.end(); 
}).listen(8080);