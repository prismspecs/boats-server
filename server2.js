// app.js
var express = require('express');  
var app = express();  
var server = require('http').createServer(app);  
var io = require('socket.io')(server);
var osc = require('node-osc');

app.use(express.static(__dirname));  
app.get('/', function(req, res,next) {  
    res.sendFile(__dirname + '/index.html');
});

server.listen(3000); 

// handle incoming requests
io.on('connection', function(client) {  
    console.log('Client connected...');

    client.on('join', function(data) {
        console.log(data);
    });

    client.on('servo', function(data) {
        console.log(data);
        var client = new osc.Client('132.162.75.186', 12345);
		client.send('/boat1/mast', parseInt(data), function () {
			client.kill();
		});
    });

});