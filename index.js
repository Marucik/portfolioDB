var http = require('http')

var server = http.createServer((request, response) => {

    response.writeHead(200, {"Content-Type": "text/plain"})
    response.end("XDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD")

});

var port = process.env.PORT || 80
server.listen(port)

console.log("Server running at http://localhost:%d", port)
