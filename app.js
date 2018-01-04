
var express = require('express');
var Rx = require('rxjs/Rx');
var app = express(); // declares express app


var port = process.env.PORT || 4000; //sets the port to listen on

app.use(express.static('/node_modules'));
app.use("/node_modules", express.static(__dirname + '/node_modules'));

app.use("/test-1", express.static(__dirname + '/test-1'));



app.get('/', function(req, res) {
    res.sendFile(__dirname + '/test-1/test1.html');
});

app.get('/test-1', function(req, res) {
	res.sendFile(__dirname + '/test-1/test1.html');
});

app.get('/test-2', function(req, res) {
	res.sendFile(__dirname + '/test-2/test2.html');
});

//start server
app.listen(port, function() {
	console.log("Now listening on port " + port);
});
