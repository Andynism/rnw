// import built-in Node package
var http = require('http');
var port = 4000;

var server = http.createServer(function (req, res) { // Callback function
    // Response header
    res.writeHead(200, { "Content-Type": "text/html" });

    // send HTML response to client
    res.end("<h1>Hello World</h1>");
});

server.listen(port, function () { // Callback function
    console.log("Starting server at " + port);
});