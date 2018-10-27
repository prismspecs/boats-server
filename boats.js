const http = require('http');

var osc = require('node-osc');

var fs = require('fs');

var server = http.createServer(function(req,res) {
	console.log("request was made :" + req.url);
	res.writeHead(200, {"Content-Type": "text/html"});
	var myReadStream = fs.createReadStream(__dirname + "/index.html", "utf8");
	myReadStream.pipe(res);
});

server.listen(3000, "127.0.0.1");
console.log('Node server running on port 3000');  

var client = new osc.Client('132.162.75.186', 12345);
client.send('/boat1/mast', 180, function () {
  client.kill();
});

// // Create an instance of the http server to handle HTTP requests
// let app = http.createServer((req, res) => {  
//     // Set a response type of plain text for the response
//     res.writeHead(200, {'Content-Type': 'text/plain'});

//     // Send back a response and end the connection
//     res.end('Hello World!\n');
// });

// // Start the server on port 3000
// app.listen(3000, '127.0.0.1');  
// console.log('Node server running on port 3000');  